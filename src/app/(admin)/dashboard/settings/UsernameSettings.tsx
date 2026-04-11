"use client";

import { Box, Title, Stack } from "@mantine/core";
import { ChangeUsername } from "@/app/ui/admin/forms/ChangeUsername";

export function UsernameSettings() {
  return (
    <Box mb="xl">
      <Stack gap="xs" align="flex-start">
        <ChangeUsername />
      </Stack>
    </Box>
  );
}