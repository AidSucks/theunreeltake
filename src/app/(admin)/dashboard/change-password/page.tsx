import {auth} from "@/lib/auth";
import {headers} from "next/headers";
import {redirect} from "next/navigation";
import {ChangePassword} from "@/app/ui/admin/forms/ChangePassword";

export default async function DashboardChangePasswordPage() {

  const session = await auth.api.getSession({
    headers: await headers()
  });

  if(!session) redirect("/login");

  return <ChangePassword/>;
}