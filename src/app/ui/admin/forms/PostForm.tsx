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
import { createNewPost, savePost } from "@/lib/actions";
import { deletePost } from "@/lib/actions";
import { CreatePostSchema } from "@/lib/schemas";
import {SiteTextEditor} from "@/app/ui/admin/SiteTextEditor"

interface PostProp {
  id: string;
  title: string;
  slug: string;
  content: string;
  published: boolean;
  mediaType: string; 
}

export function PostForm({ post }: { post?: PostProp | null }) {
  const [opened, { open, close }] = useDisclosure(false);
  const router = useRouter();

  const isEditMode = !!post;

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      title: post?.title || "",
      slug: post?.slug || "",
      mediaType: post?.mediaType || "",
      pageContent: post?.content || ""
    },
    validate: zod4Resolver(CreatePostSchema),
    validateInputOnChange: true,
  });

  const handleSubmit= async (action: "publish" | "draft" | "save") => {
    const { hasErrors } = form.validate();
    if (hasErrors) return;

    const values = form.getValues();

    if (isEditMode && post) {
      const isPublishing = action === "publish" ? true : post.published;
      
      await savePost(post.id, values.title, values.slug, values.mediaType, values.pageContent, isPublishing);
      router.push('/dashboard/posts');

    } else {
      const isPublishing = action === "publish";
      await createNewPost({...values, published: isPublishing });
      router.push('/dashboard/posts');
    }
  };

  const handleDeleteConfirm = async () => {
    if (isEditMode && post) {
      await deletePost(post.id);
    }
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

      <form>
        <Stack gap="md">
          
          <TextInput label="Post Title" placeholder="Enter the title of your post" key="title" {...form.getInputProps('title')} />

          <Group grow align="flex-start">
            <TextInput label="Slug" placeholder="e.g., my-new-post" key="slug" {...form.getInputProps('slug')} />
            <Select label="Media Type" placeholder="Select media type" data={['Movie', 'Book', 'TV Show', 'Game', 'Music']} key="mediaType" {...form.getInputProps('mediaType')} />
          </Group>

          <Input.Wrapper label="Page Content" error={form.errors.pageContent}>
            <SiteTextEditor value={form.getInputProps('pageContent').defaultValue} onChange={form.getInputProps('pageContent').onChange} />
          </Input.Wrapper>

          <Group justify="flex-end" mt="md">
            {!isEditMode && (
              <>
                <Button color="red" onClick={open}>Discard</Button>
                <Button variant="default" onClick={() => handleSubmit("draft")}>Save as Draft</Button>
                <Button color="dark" onClick={() => handleSubmit("publish")}>Publish</Button>
              </>
            )}
            {isEditMode && post && (
              <>
                <Button color="red" onClick={open}>Delete</Button>
                <Button variant="default" onClick={() => handleSubmit("save")}>Save</Button>
                {!post.published && (
                   <Button color="dark" onClick={() => handleSubmit("publish")}>Publish</Button>
                )}
              </>
            )}
          </Group>

        </Stack>
      </form>
    </Paper>
    </>
  );
}