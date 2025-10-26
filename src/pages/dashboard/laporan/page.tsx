import { DashboardLayout } from "@/components/DashboardLayout";

export default function ReportsPage() {
  const reports = [
    { id: 1, title: "Laporan Peminjaman Bulanan", date: "2025-10-01", status: "Selesai" },
    { id: 2, title: "Buku Paling Sering Dipinjam", date: "2025-10-15", status: "Dalam Proses" },
    { id: 3, title: "Laporan Keterlambatan", date: "2025-09-20", status: "Selesai" }
  ];

  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold mb-6">Laporan Perpustakaan</h2>

      <div className="overflow-x-auto shadow rounded-lg">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-6 py-3">No</th>
              <th className="px-6 py-3">Judul Laporan</th>
              <th className="px-6 py-3">Tanggal</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((item, index) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-3">{index + 1}</td>
                <td className="px-6 py-3">{item.title}</td>
                <td className="px-6 py-3">{item.date}</td>
                <td className="px-6 py-3">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${item.status === "Selesai" ? "bg-green-200 text-green-700" : "bg-yellow-200 text-yellow-700"}`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-3 text-center">
                  <button className="border px-3 py-1 rounded text-xs hover:bg-gray-100">
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};
