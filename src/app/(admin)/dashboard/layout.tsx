import React from "react";

import {DashboardSidebar} from "@/app/ui/admin/dashboard-sidebar";

export default function AdminDashboardLayout(
  { children }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <div className={"d-flex"}>
      <DashboardSidebar/>
      <main className={"min-vh-100 p-3 w-100"}>
        {children}
      </main>
    </div>
  );
}