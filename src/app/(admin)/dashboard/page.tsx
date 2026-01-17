"use client";

import {useContext} from "react";
import {AuthContext} from "@/app/ui/admin/AuthContext";
import {redirect} from "next/navigation";

export default function DashboardPage() {

  const contextData = useContext(AuthContext);

  if(!contextData) redirect("/login");

  return (
    <>
      <h1>Dashboard</h1>
      <p>Name: {contextData.user.name}</p>
      <p>Email: {contextData.user.email}</p>
      <p>Role: {contextData.user.role}</p>
    </>
  );

}