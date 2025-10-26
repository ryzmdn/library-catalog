import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router";
import KoleksBuku from "./pages/dashboard/koleksi-buku/page";
import PeminjamanBuku from "./pages/dashboard/peminjaman/page";
import ReportsPage from "./pages/dashboard/laporan/page";
import HalamanHistori from "./pages/dashboard/histori/page";
import TambahBuku from "./components/AddBookForm";
import InformasiPerpustakaan from "./pages/informasi-perpustakaan/page";
import SettingPage from "./pages/dashboard/settings/SettingPage";
import Bantuan from "./pages/bantuan/page";

const Home = lazy(() => import("@/pages/home"));
const Catalog = lazy(() => import("@/pages/katalog/page"));
const Dashboard = lazy(() => import("@/pages/dashboard/page"));
const Faqs = lazy(() => import("@/pages/pertanyaan-umum/page"));
const NotFound = lazy(() => import("@/pages/not-found"));
const Detail = lazy(() => import("@/pages/info-buku/detail/page"));

const routeConfig = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/katalog",
    element: <Catalog />,
  },
  {
    path: "/info-buku/detail/:slug",
    element: <Detail />,
  },
  {
    path: "/bantuan",
    element: <Bantuan />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/dashboard/koleksi-buku",
    element: <KoleksBuku />,
  },
  {
    path: "/dashboard/laporan",
    element: <ReportsPage />,
  },
  {
    path: "/dashboard/peminjaman",
    element: <PeminjamanBuku />,
  },
  {
    path: "/dashboard/histori",
    element: <HalamanHistori />,
  },
  {
    path: "/informasi-perpustakaan",
    element: <InformasiPerpustakaan />,
  },
  {
    path: "/pertanyaan-umum",
    element: <Faqs />,
  },
  {
    path: "/tambah-buku",
    element: <TambahBuku />,
  },
  {
    path: "/dashboard/pengaturan",
    element: <SettingPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        {routeConfig.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Suspense>
  );
}
