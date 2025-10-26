"use client";

import { DashboardStats } from "@/components/DashboardStats";
import { DashboardLayout } from "@/components/DashboardLayout";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardStats />
    </DashboardLayout>
  );
}
