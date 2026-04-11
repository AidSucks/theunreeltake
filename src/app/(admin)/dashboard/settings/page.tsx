import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { ChangePassword } from "@/app/ui/admin/forms/ChangePassword";
import { Box, Title, Divider,Text,TextInput,UnstyledButton,Stack,Checkbox } from "@mantine/core";
import { PasswordSettings } from "./PasswordSettings";
import { UsernameSettings } from "./UsernameSettings";

export default async function DashboardSettingsPage() {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!session) redirect("/login");

  return (
    <Box>
      <Title order={2} mb="md">
        Account Settings
      </Title>

      <Divider mb="xl" />

      <Title order={6} mb="xs">
        Email Address
      </Title>

      <Text mb="lg">
        testuser@domain.com
      </Text>

      <PasswordSettings/>

      <Title order={6} mb="xs">
        Personal Information
      </Title>

      <UsernameSettings/>

      <Stack gap="md">
        <Title order={6}>
          Permissions
        </Title>

        <Checkbox size="sm" label="Enable ...." />
        <Checkbox size="sm" label="Enable ...." />
        <Checkbox size="sm" label="Enable ...." />
      </Stack>

      <Title mt="lg" order={6} mb="xs">Delete Account</Title>
      <Text size ="sm"mb="sm">Deleting your account will permanently remove all data</Text>
      <UnstyledButton fw={1000} c="red">I want to delete my account</UnstyledButton>
    </Box>
  );
}