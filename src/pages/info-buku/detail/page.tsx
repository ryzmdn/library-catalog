"use client";

import { useParams } from "react-router";
import { books } from "@/assets/data";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/common/Button";
import { clss } from "@/utils/clss";
import { slugify } from "@/utils/slugify";

export default function DetailPage() {
  const params = useParams();
  const slug = params?.slug ?? null;
  const book = (() => {
    if (!slug) return null;
    // Try several matching strategies: slugified title, exact isbn, id
    const bySlug = books.find((b) => slugify(b.judul) === slug);
    if (bySlug) return bySlug;
    const byIsbn = books.find(
      (b) => String(b.isbn) === slug || slugify(String(b.isbn)) === slug
    );
    if (byIsbn) return byIsbn;
    const byId = books.find((b) => String(b.id) === slug);
    if (byId) return byId;
    // loose match: title includes slug
    const loose = books.find((b) => slugify(b.judul).includes(slug));
    if (loose) return loose;
    return null;
  })();

  // debug info for developer
  if (typeof window !== "undefined") {
    console.debug("detail page slug:", slug, "found:", book?.id ?? null);
  }

  return (
    <>
      {!book && (
        <div className="px-6 py-4">
          <p className="text-sm text-red-500">Buku tidak ditemukan.</p>
        </div>
      )}
      <Button
        variant="link"
        href="/katalog"
        className="px-6 py-2 text-sm text-indigo-600"
      >
        &larr; Kembali
      </Button>

      <div className="mx-auto max-w-7xl sm:px-6 pb-20 sm:pt-16 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          {/* Product */}
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-12">
            {/* Image gallery */}
            <div className="aspect-square rounded-xl bg-gray-900/5 p-2 ring-1 ring-gray-900/10 ring-inset lg:rounded-2xl lg:p-4">
              <img
                alt="App screenshot"
                src="https://placehold.net/600x800.png"
                className="size-full rounded-md bg-gray-50 shadow-xl ring-1 ring-gray-900/10"
              />
            </div>

            {/* Product info */}
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <div className="mb-3">
                <h2 className="text-xl font-medium tracking-tight text-gray-900">
                  Detail Buku
                </h2>
              </div>

              {book && (
                <>
                  <h1 className="text-4xl font-bold capitalize tracking-tight pb-5 text-gray-900">
                    {book.judul}
                  </h1>

                  <div className="py-8 border-y border-gray-200">
                    <div>
                      <h3 className="text-lg font-medium">Sinopsis</h3>

                      <p className="space-y-6 text-base text-gray-700 mt-3">
                        {book.sinopsis}
                      </p>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-2 gap-y-7 sm:grid-cols-2">
                      <div>
                        <h3 className="text-lg font-medium text-gray-800">Penulis</h3>
                        <p className="text-gray-700">{book.author}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800">Penerbit</h3>
                        <p className="text-gray-700">{book.publisher}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800">Tahun</h3>
                        <p className="text-gray-700">{book.tahun}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800">Kategori</h3>
                        <p className="text-gray-700">{book.kategori}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800">Bahasa</h3>
                        <p className="text-gray-700">{book.bahasa}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800">Halaman</h3>
                        <p className="text-gray-700">{book.halaman}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800">ISBN</h3>
                        <p className="text-gray-700">{book.isbn}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800">Lokasi</h3>
                        <p className="text-gray-700">{book.lokasi}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800">Stok</h3>
                        <p className="text-gray-700">{book.stok}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800">Rating</h3>
                        <p className="text-gray-700">{book.rating}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800">Tags</h3>
                        <p className="text-gray-700 capitalize">{(book.tags || []).join(", ")}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800">Tersedia</h3>
                        <p className={clss(
                            book.tersedia ? "text-green-500" : "text-red-500"
                          )}
                        >
                          {book.tersedia ? "Tersedia" : "Tidak tersedia"}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center mt-10 gap-x-5">
                    <Button className="flex flex-1 items-center justify-center rounded-md w-full border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">
                      Pinjam Buku
                    </Button>

                    <Button variant="ghost" className="size-14">
                      <BookmarkIcon
                        aria-hidden="true"
                        className="size-6 shrink-0"
                      />
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
