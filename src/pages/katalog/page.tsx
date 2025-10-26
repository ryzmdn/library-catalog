import { Card } from "@/components/ui/Card";
import { Pagination } from "@/components/ui/Pagination";
import { books } from "@/assets/data";
import { Button } from "@/components/common/Button";

export default function CatalogPage() {
  return (
    <div className="bg-white">
      <Button
        variant="link"
        href="/"
        className="px-6 py-2 text-sm text-indigo-600"
      >
        &larr; Kembali
      </Button>

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <header className="bg-white px-6 pt-2 pb-16 lg:px-8 dark:bg-gray-900">
          <div className="flex justify-center items-center gap-x-5 mx-auto max-w-2xl text-center">
            <img
              src="https://placehold.net/600x600.png"
              alt="Logo sekolah SMP Negri 41 Jakarta"
              className="size-20"
            />
            <h2 className="text-5xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Katalog Perpustakaan
            </h2>
          </div>
        </header>

        <div>
          <label
            htmlFor="company-website"
            className="block text-sm/6 font-medium text-gray-900 dark:text-white"
          >
            Cari Buku yang tersedia
          </label>
          <div className="mt-2 flex">
            <div className="flex shrink-0 items-center rounded-l-md bg-white px-3 text-base text-gray-500 outline-1 -outline-offset-1 outline-gray-300 sm:text-sm/6 dark:bg-white/5 dark:text-gray-400 dark:outline-gray-700">
              Cari Buku :
            </div>
            <input
              id="company-website"
              name="company-website"
              type="text"
              placeholder="Cerita Rakyat"
              className="-ml-px block w-full grow rounded-r-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-gray-700 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-y-4 py-12 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {books.map((book) => (
            <Card
              key={book.id}
              src={book.cover}
              name={book.judul}
              isbn={book.isbn}
              url={`/info-buku/detail/${book.judul
                .replace(/ /gi, "-")
                .toLowerCase()}`}
              textAction="Lihat Buku"
              stok={book.stok}
            />
          ))}
        </div>

        <Pagination />
      </div>
    </div>
  );
}
