import { books } from "@/assets/data";
import { DashboardLayout } from "@/components/DashboardLayout";

export default function HalamanHistori() {
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold mb-6">Histori</h2>

        <table className="relative min-w-full divide-y divide-gray-300 dark:divide-white/15">
          <thead>
            <tr>
              <th
                scope="col"
                className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8 dark:text-white"
              >
                Judul
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white"
              >
                Peminjam
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white"
              >
                Pinjam
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white"
              >
                Kembali
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white dark:divide-white/10 dark:bg-gray-900">
            {books.map((buku) => (
              <tr key={buku.judul}>
                <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-6 lg:pl-8 dark:text-white">
                  {buku.judul}
                </td>
                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500 dark:text-gray-400">
                  John Doe
                </td>
                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500 dark:text-gray-400">
                  24 Oktober 2025
                </td>
                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500 dark:text-gray-400">
                  26 Oktober 2025
                </td>
                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500 dark:text-gray-400">
                  <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 inset-ring inset-ring-green-600/20">Dikembalikan</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </DashboardLayout>
  );
}
