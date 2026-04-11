'use client'; 

import { 
  TextInput, Select, Checkbox,
  Button, Group, Title, Stack, Box 
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { DeletePostModal } from "@/app/ui/admin/DeletePostModal";
import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/navigation";
import {deletePost, savePost} from "@/lib/actions";
import {SiteTextEditor} from "@/app/ui/admin/SiteTextEditor"


export default function EditPostForm({fullReviewData} : {fullReviewData: {id: string, slug: string,
    title: string, mediaType: string, published: boolean, content: string} | undefined})
{
    const MEDIA_TYPES = ['Movie', 'TV Show', 'Book', 'Game', 'Music'];

    const handleEditorChange = (value: string) => {
        console.log('This is the HTML now: ', value);
        }

    interface FormValues {
    slug: string;
    title: string;
    mediaType: string;
    published: boolean;
    content: string;
    }


    const [opened, { open, close }] = useDisclosure(false);
    const router = useRouter();

    const form = useForm<FormValues>({
        initialValues: {
        slug: fullReviewData?.slug?? '',
        title: fullReviewData?.title?? '',
        mediaType: fullReviewData?.mediaType?? '',
        published: fullReviewData?.published?? true,
        content: fullReviewData?.content?? ''
        },
        validate: {
        slug: (value) => (/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value) ? null : 'Invalid slug format (use lowercase and hyphens)'),
        title: (value) => (value.length >= 3 && value.length <= 128 ? null : 'Title must be between 3 and 128 characters'),
        },
    });

  const onSubmit = async (values: FormValues) => {
    await savePost(fullReviewData?.id ?? "", values.title, values.slug, values.mediaType, values.content);
  };

  const handleDeleteConfirm = async () => {
    await deletePost(fullReviewData?.id ?? "");
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

          <SiteTextEditor value={fullReviewData?.content?? ''} onChange={handleEditorChange}/>

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