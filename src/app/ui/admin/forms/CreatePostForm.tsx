"use client";

import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks"; 
import { useRouter } from "next/navigation"; 
import { DeletePostModal } from "@/app/ui/admin/DeletePostModal";
import { zod4Resolver } from "mantine-form-zod-resolver";
import {
  TextInput,
  Textarea,
  Select,
  Button,
  Stack,
  Paper,
  Group,
  Title,
  Box,
  Input
} from "@mantine/core";
import { createNewPost } from "@/lib/actions";
import { CreatePostSchema } from "@/lib/schemas";
import {SiteTextEditor} from "@/app/ui/admin/SiteTextEditor"



export function CreatePostForm() {
  const [opened, { open, close }] = useDisclosure(false);
  const router = useRouter();

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      title: "",
      slug: "",
      mediaType: "",
      pageContent: ""
    },
    validate: zod4Resolver(CreatePostSchema),
    validateInputOnChange: true,
  });

  const handleSubmit = async (values: typeof form.values) => {
    const result = await createNewPost(values);

    if (result.success) {
      router.push('/dashboard/posts');
    } else {
      alert("Failed to create post");
    }
  };

  const handleDeleteConfirm = () => {
    // TODO: delete from database
    close();
    router.push('/dashboard/posts');
  }

  return (
    <>


    <DeletePostModal 
        opened={opened} 
        onClose={close} 
        onConfirm={handleDeleteConfirm} 
      />

    <Paper withBorder shadow="sm" p="xl" radius="md" w="100%" mih="85vh" display="flex" style={{ flexDirection: 'column' }}>
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

          <Input.Wrapper 
            label="Page Content" 
            error={form.errors.pageContent}
          >
            <SiteTextEditor
              value={form.getInputProps('pageContent').defaultValue}
              onChange={form.getInputProps('pageContent').onChange}
            />
          </Input.Wrapper>

          <Group justify="flex-end" mt="md">
            <Button color="red" onClick={open}>Delete</Button>
            <Button type="submit" color="dark">Save</Button>
          </Group>

        </Stack>
      </form>
    </Paper>
    </>
  );
}