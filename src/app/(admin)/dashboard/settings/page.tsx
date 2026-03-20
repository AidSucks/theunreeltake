import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { ChangePassword } from "@/app/ui/admin/forms/ChangePassword";
import { Box, Title, Divider } from "@mantine/core";
import { PasswordSettings } from "./PasswordSettings";

export default async function DashboardSettingsPage() {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!session) redirect("/login");

  return (
    <Box>
      <Title order={2} mb="md">Account Settings</Title>
      <Divider mb="xl" />
      
      <PasswordSettings/>
    </Box>
  );
}