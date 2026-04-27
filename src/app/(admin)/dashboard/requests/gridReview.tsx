"use client"

import { Title, Stack, Paper, SimpleGrid, Text } from "@mantine/core";

export type Review = {
  id: string;
  title: string;
  user: string;
  date: string;
  body: string;
};

type GridReviewProps = {
  data: Review[];
  selectedId?: string;
  onSelect?: (id: string) => void;
};

export default function GridReview({
  data,
  selectedId,
  onSelect,
}: GridReviewProps) {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg:4 }} spacing="lg">
      {data.map((item) => {
        const isSelected = item.id === selectedId;

        return (
          <Paper
            key={item.id}
            withBorder
            radius="md"
            p="md"
            onClick={() => onSelect?.(item.id)}
            style={{
              cursor: "pointer",
              backgroundColor: isSelected ? "#e7e6e6" : "white",
              transition: "0.2s ease",
            }}
          >
            <Stack gap={4}>
              <Title order={4}>{item.title}</Title>

              <Text size="xs" c="dimmed">
                Requested By: {item.user}
              </Text>
              <Text size="xs" c="dimmed">
                Date Submitted: {item.date}
              </Text>

              <Text size="sm" mt="xs"   >
                {item.body}
              </Text>
            </Stack>
          </Paper>
        );
      })}
    </SimpleGrid>
  );
}