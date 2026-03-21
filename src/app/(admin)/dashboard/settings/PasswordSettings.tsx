"use client";

import { Box, Title, Stack, Anchor, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ChangePassword } from "@/app/ui/admin/forms/ChangePassword";

export function PasswordSettings() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Box mb="xl">
      <Title order={6} mb="xs">Password</Title>

      <Stack gap={5} align="flex-start">
        <Anchor component="button" onClick={open} size="sm" fw={500}>
          Change
        </Anchor>
        
        <Anchor href="/reset-password" size="sm" fw={500}>
          Reset your password
        </Anchor>
      </Stack>

      <Modal opened={opened} onClose={close} centered radius="md">
        <ChangePassword />
      </Modal>
    </Box>
  );
}