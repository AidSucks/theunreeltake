"use client";

import { useEffect, useState } from "react";
import { PostGrid } from "@/app/ui/admin/AdminPostGrid";
import { Title, Box, Loader, Center } from "@mantine/core";
import { PencilSquare, Chat, BarChart, Trash } from "react-bootstrap-icons";
import { getDraftPosts } from "@/lib/actions";

export default function DraftsPage() {
  const [drafts, setDrafts] = useState<{ id: string; imageSrc: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDrafts() {
      const result = await getDraftPosts();
      if (result.success) {
        setDrafts(result.data);
      }
      setLoading(false);
    }
    
    fetchDrafts();
  }, []);

  const gridIcons = {
    Edit: PencilSquare,
    Chat: Chat,
    Stats: BarChart,
    Delete: Trash,
  };

  return (
    <Box>
      <Title order={2} mb="xl">Your Drafts</Title>
      
      {loading ? (
        <Center mt="xl">
          <Loader color="blue" />
        </Center>
      ) : drafts.length === 0 ? (
        <p>You have no saved drafts.</p>
      ) : (
        <PostGrid data={drafts} icons={gridIcons} />
      )}
    </Box>
  );
}