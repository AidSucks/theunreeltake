'use client'; 

import { 
  TextInput, Select, Checkbox, Textarea, 
  Button, Group, Title, Stack, Box 
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { DeletePostModal } from "@/app/ui/admin/DeletePostModal";
import { useDisclosure } from "@mantine/hooks"; 
import { useRouter } from "next/navigation"; 
import { deletePost } from "@/lib/actions";

const MEDIA_TYPES = ['Movie', 'TV Show', 'Book', 'Game', 'Music'];

interface FormValues {
  id: string;
  slug: string;
  title: string;
  mediaType: string;
  published: boolean;
  content: string;
}

export default function EditPostPage() {
  const [opened, { open, close }] = useDisclosure(false);
  const router = useRouter();
  const form = useForm<FormValues>({
    initialValues: {
      id: '',
      slug: 'media-title-slug',
      title: 'Post Display Title',
      mediaType: 'Movie',
      published: true,
      content: ''
    },
    validate: {
      slug: (value) => (/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value) ? null : 'Invalid slug format (use lowercase and hyphens)'),
      title: (value) => (value.length >= 3 && value.length <= 128 ? null : 'Title must be between 3 and 128 characters'),
    },
  });

  const onSubmit = (values: FormValues) => {
    console.log('Form submitted:', values);
  };

    const handleDeleteConfirm = async () => {
    // TODO: delete from database
    const result = await deletePost(form.getValues().id) //form.getValues().id
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

    <Box maw={800}>
      <Title order={1} mb="xl">Edit Post</Title>

      <form onSubmit={form.onSubmit(onSubmit)}>
        <Stack gap="md">
          <TextInput
            label="Slug"
            placeholder="post-slug"
            {...form.getInputProps('slug')}
          />

          <TextInput
            label="Post Title"
            placeholder="Enter post title"
            {...form.getInputProps('title')}
          />

          <Select
            label="Media Type"
            data={MEDIA_TYPES}
            {...form.getInputProps('mediaType')}
          />

          <Checkbox
            label="Published"
            mt="xs"
            {...form.getInputProps('published', { type: 'checkbox' })}
          />

          <Textarea
            label="Edit Page Content"
            placeholder="Rich Text editor"
            minRows={15}
            styles={{ input: { backgroundColor: '#f8f9fa' } }}
            {...form.getInputProps('content')}
          />

          <Group mt="xl">
            <Button type="submit" color="dark">Save Changes</Button>
            <Button variant="filled" color="dark">Send to Draft</Button>
            <Button variant="filled" color="red" onClick={open}>Delete Post</Button>
          </Group>
        </Stack>
      </form>
    </Box>
    </>
  );
}