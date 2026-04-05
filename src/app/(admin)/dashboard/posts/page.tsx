import { Group, Title, Box } from "@mantine/core";
import { NewPostButton } from "@/app/ui/admin/NewPostButton";

export default function DashboardPostsPage() {
  return (
    <Box>
      <Group justify="space-between" mb="xl">
        <Title order={2}>Your Posts</Title>
        
        <NewPostButton/>
      </Group>
    </Box>
  );
}