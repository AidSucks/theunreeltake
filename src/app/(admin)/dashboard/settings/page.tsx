import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { ChangePassword } from "@/app/ui/admin/forms/ChangePassword";
import { Box, Title, Divider,Text,TextInput } from "@mantine/core";
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
      <Title order={6} mb="xs">Email Address</Title>
      <Text mb="lg">testuser@domain.com</Text>
      <PasswordSettings/>
      <Title order={6} mb="xs">Personal Information</Title>
      <TextInput pl="lg" w={200} size="sm" radius="lg" label="Username" placeholder="New Username"/>
    </Box>
  );
}