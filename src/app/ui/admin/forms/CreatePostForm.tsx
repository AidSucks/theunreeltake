"use client";

import { useForm } from "@mantine/form";
import {
  TextInput,
  Textarea,
  Select,
  Button,
  Stack,
  Paper,
  Group,
  Title,
  Box
} from "@mantine/core";

export function CreatePostForm() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      title: "",
      slug: "",
      mediaType: "",
      pageContent: ""
    }
  });

  const handleSubmit = (values: typeof form.values) => {
    // TODO: connect to backend
  };

  return (
    <Paper withBorder shadow="sm" p="xl" radius="md" maw={800}>
      <Title order={3} mb="lg">Create New Post</Title>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap="md">
          
          <TextInput
            label="Post Title"
            placeholder="Enter the title of your post"
            key="title"
            {...form.getInputProps('title')}
          />

          <Group grow align="flex-start">
            <TextInput
              label="Slug"
              placeholder="e.g., my-new-post"
              key="slug"
              {...form.getInputProps('slug')}
            />

            <Select
              label="Media Type"
              placeholder="Select media type"
              data={['Movie', 'Book', 'TV Show']} 
              key="mediaType"
              {...form.getInputProps('mediaType')}
            />
          </Group>

          <Textarea
            label="Page Content"
            placeholder="Write your post content here..."
            minRows={8}
            autosize
            key="pageContent"
            {...form.getInputProps('pageContent')}
          />

          <Group justify="flex-end" mt="md">
            <Button color="red">Delete</Button>
            <Button type="submit" color="dark">Save</Button>
          </Group>

        </Stack>
      </form>
    </Paper>
  );
}