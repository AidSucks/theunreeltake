"use client";

import { Box, Button, Title, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { InviteUserModal } from "@/app/ui/admin/InviteUserModal";

export default function DashboardUsersPage() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Box>
      <Title order={2} mb="md">Users</Title>

      <InviteUserModal opened={opened} onClose={close} />

      <Stack align="flex-start" gap="md">
        <p>User list coming soon...</p>

        <Button color="dark" radius="md" onClick={open}>
          Invite a New User
        </Button>
      </Stack>
    </Box>
  );
}