import { books } from "@/assets/data";
import { Card } from "./ui/Card";
import { Button } from "./common/Button";

const stats = [
  { id: 1, name: 'Koleksi Buku', value: '500' },
  { id: 2, name: 'Kategori Buku', value: '64' },
  { id: 3, name: 'Bagian Rak Buku', value: '6' },
];

const stats2 = [
  { id: 1, name: 'Peminjam Buku', value: '50' },
  { id: 2, name: 'Terlambat Dikembalikan', value: '0' },
  { id: 3, name: 'Pengembalian hari ini', value: '37' },
];

export function DashboardStats() {
  return (
    <div className="w-full space-y-8">
      <div className="bg-white dark:bg-gray-900">
      <div className="mx-auto space-y-8 max-w-7xl">
        <dl className="grid grid-cols-1 gap-x-5 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col gap-y-4 bg-gradient-to-br from-indigo-600 to-indigo-500 p-8 rounded-2xl">
              <dt className="text-base/7 font-medium text-gray-300">{stat.name}</dt>
              <dd className="order-first text-4xl font-semibold tracking-tight text-gray-100">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        <dl className="grid grid-cols-1 gap-x-5 gap-y-16 text-center lg:grid-cols-3">
          {stats2.map((stat) => (
            <div key={stat.id} className="flex flex-col gap-y-4 bg-gradient-to-br from-orange-600 to-yellow-500 p-8 rounded-2xl">
              <dt className="text-base/7 font-medium text-gray-300">{stat.name}</dt>
              <dd className="order-first text-4xl font-semibold tracking-tight text-gray-100">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>

    <section className="w-full py-10">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Buku Terpopuler</h2>
        <Button variant="link" href="/katalog" className="text-indigo-500">Lihat Buku &rarr;</Button>
      </div>
      <div className="grid grid-cols-1 gap-y-4 py-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
        {books.slice(0, 3).map((book) => (
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
    </section>
    </div>
  )
}
