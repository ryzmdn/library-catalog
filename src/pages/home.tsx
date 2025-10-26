"use client";

import { FeatureSection } from "@/components/FeatureSection";
import { LoginForm } from "@/components/LoginForm";
import { Card } from "../components/ui/Card";
import { Footer } from "../components/Footer";
import { books } from "../assets/data";
import PetugasPerpus from "@/components/PetugasPerpus";

export default function Home() {
  return (
    <>
      <div className="min-h-full">
        <header className="bg-indigo-600 pb-24">
          <div className="mx-auto px-4 py-6 sm:px-6 lg:px-8" />
        </header>

        <main className="-mt-24 pb-8">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
              <section
                aria-labelledby="section-1-title"
                className="grid grid-cols-1 gap-4"
              >
                <div className="overflow-hidden rounded-4xl bg-white border border-gray-100 shadow-sm">
                  <div className="p-6">
                    <LoginForm />
                  </div>
                </div>
              </section>

              {/* Right column */}
              <div className="grid grid-cols-1 gap-4 lg:col-span-2">
                <section>
                  <div className="overflow-hidden rounded-4xl bg-white border border-gray-100 shadow-sm">
                    <div className="p-6">
                      <div className="border-b border-gray-200 pb-6">
                        <h3 className="text-lg font-semibold text-gray-900">
                          Katalog Perpustakaan
                        </h3>
                        <p className="mt-1 text-base text-gray-500">
                          Cari semua buku yang tersedia di perpustakaan
                        </p>
                      </div>

                      <div className="grid grid-cols-1 gap-y-4 pt-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-6">
                        {books.slice(0, 3).map((book) => (
                          <Card
                            src={book.cover}
                            name={book.judul}
                            isbn={book.isbn}
                            url={decodeURIComponent(
                              `/info-buku/detail/${book.judul
                                .replace(/ /gi, "-")
                                .toLowerCase()}`
                            )}
                            textAction="Lihat Buku"
                            stok={book.stok}
                          />
                        ))}
                      </div>

                      <a
                        href="/katalog"
                        className="flex w-full justify-center rounded-full bg-indigo-600 mt-6 px-3 py-2 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Lihat Semua Buku
                      </a>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>

          <FeatureSection />

          <PetugasPerpus />
        </main>

        <Footer />
      </div>
    </>
  );
}
