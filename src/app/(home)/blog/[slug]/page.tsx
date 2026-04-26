import films from "@/../public/film.json";
import prisma from "@/lib/prisma";
import { redirect } from 'next/navigation';
import Link from "next/link";
import { Title, Grid, GridCol,Image,Text,Divider,Group,Stack, Textarea, ScrollArea, Box, Flex, Paper, UnstyledButton, SimpleGrid, Button,  } from "@mantine/core";

export default async function BlogPostPage(
  {
    params
  }: {
    params: Promise<{ slug: string }>
  }
) {

  const { slug } = await params;

  const fullPostData = films.find((entry) => entry.slug === slug);

  const data = await prisma.post.findUnique({ where: { slug: slug }, include: { tags: { include: { tag: true }, omit: { postId: true, tagId: true }} }});

  if (!data) redirect ("/catalog");

  const tagElements = data.tags.map((value, index) => {
    return(
      <Button 
      key = {index}
      size = "sm"
      mt={4}
      onClick={async () => {
        "use server"
        let url: string = "/catalog/?tags="+value.tag.id;
        redirect (url);
      }}
      >
        {value.tag.displayName}
      </Button>
    );
  });

  async function whoosh(){
    "use server"

    redirect 
  }

  if (!fullPostData) redirect ("/catalog");

  return (
    <div>
    <Stack ta="center" gap="1">
      <Group justify="space-between" align="flex-start">
        <Text size="sm">Review by:</Text>

        <Stack gap={2} align="flex-end">
          <Text size="xs">Posted on:</Text>
          <Text size="xs">Last Updated:</Text>
        </Stack>
      </Group>

      <Title size="80" > {fullPostData["Title"]}  </Title>

      <Text size="md">{fullPostData["Released"]} • {fullPostData["Rated"]} • {fullPostData["Runtime"]} • {fullPostData["Genre"]} • {fullPostData["Director"]} • {fullPostData["Country"]} • {fullPostData["Language"]}</Text>
      </Stack>



      <Grid justify="center" align="flex-start">
        <GridCol span={2}><Image
          radius="md"
      
          src={fullPostData.Images[0]}
          />
        </GridCol>
        <GridCol span={2}><Image
          radius="md"
      
          src={fullPostData.Images[1]}
          />
        </GridCol>
        <GridCol span={2}><Image
          radius="md"
      
          src={fullPostData.Images[2]}
        />
        </GridCol>
      </Grid>



      <Divider my="md" size={10} variant="dotted" />

      <Text>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis
            convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer 
            nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus 
            leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit 
            semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus 
            leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit 
            semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus 
            leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit 
            semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus 
            leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit 
            semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus 
            leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit 
            semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
      </Text>
      
      <Divider my="md" size={10} variant="dotted" />
      
      
      <Group justify="space-between" align="flex-start">
        <Stack gap="xs">
          <Textarea 
          w={600} 
          label="Review the Review"
          placeholder="Start Here"
          autosize
          minRows={2}
          />
          <Stack gap="sm">
            <Text fw={600}>Comments</Text>
            <SimpleGrid cols={3}>

              <Paper withBorder p="sm" radius="md">
                <Text fw={500} size="sm">John Doe</Text>
                <Text size="xs" c="dimmed">2 days ago</Text>

                <Text size="sm" mt={4}>This movie was really good.</Text>
              </Paper>
              <Paper withBorder p="sm" radius="md">
                <Text fw={500} size="sm">John Doe</Text>
                <Text size="xs" c="dimmed">2 days ago</Text>

                <Text size="sm" mt={4}>This movie was really good.</Text>
              </Paper>
              <Paper withBorder p="sm" radius="md">
                <Text fw={500} size="sm">John Doe</Text>
                <Text size="xs" c="dimmed">2 days ago</Text>

                <Text size="sm" mt={4}>This movie was really good.</Text>
              </Paper>
              <Paper withBorder p="sm" radius="md">
                <Text fw={500} size="sm">John Doe</Text>
                <Text size="xs" c="dimmed">2 days ago</Text>

                <Text size="sm" mt={4}>This movie was really good.</Text>
              </Paper>
            </SimpleGrid>
          </Stack>
        </Stack>

        <Stack gap="sm">
            <Text fw={600}>Tags</Text>
            <SimpleGrid cols={3}>
                {tagElements}
            </SimpleGrid>
          </Stack>
        
        <Stack gap="xs">
          <Text size="sm" ta="left">Reviews you may also like:</Text>
          <ScrollArea  maw={800} mx="auto">
            <Flex gap="md">
              <UnstyledButton>
                <Paper w={180} h={220} withBorder radius="md" p="sm">
                  <Image src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png" h={140} radius="md" />
                  <Text mt="sm">Movie Name</Text>
                </Paper>
              </UnstyledButton>
              <UnstyledButton>
                <Paper w={180} h={220} withBorder radius="md" p="sm">
                  <Image src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png" h={140} radius="md" />
                  <Text mt="sm">Movie Name</Text>
                </Paper>
              </UnstyledButton>
              <UnstyledButton>
                <Paper w={180} h={220} withBorder radius="md" p="sm">
                  <Image src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png" h={140} radius="md" />
                  <Text mt="sm">Movie Name</Text>
                </Paper>
              </UnstyledButton>
              <UnstyledButton>
                <Paper w={180} h={220} withBorder radius="md" p="sm">
                  <Image src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png" h={140} radius="md" />
                  <Text mt="sm">Movie Name</Text>
                </Paper>
              </UnstyledButton>
              <UnstyledButton>
                <Paper w={180} h={220} withBorder radius="md" p="sm">
                  <Image src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png" h={140} radius="md" />
                  <Text mt="sm">Movie Name</Text>
                </Paper>
              </UnstyledButton>
              <UnstyledButton>
                <Paper w={180} h={220} withBorder radius="md" p="sm">
                  <Image src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png" h={140} radius="md" />
                  <Text mt="sm">Movie Name</Text>
                </Paper>
              </UnstyledButton>
              <UnstyledButton>
                <Paper w={180} h={220} withBorder radius="md" p="sm">
                  <Image src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png" h={140} radius="md" />
                  <Text mt="sm">Movie Name</Text>
                </Paper>
              </UnstyledButton>
              <UnstyledButton>
                <Paper w={180} h={220} withBorder radius="md" p="sm">
                  <Image src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png" h={140} radius="md" />
                  <Text mt="sm">Movie Name</Text>
                </Paper>
              </UnstyledButton>
              <UnstyledButton>
                <Paper w={180} h={220} withBorder radius="md" p="sm">
                  <Image src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png" h={140} radius="md" />
                  <Text mt="sm">Movie Name</Text>
                </Paper>
              </UnstyledButton>
            </Flex>
          </ScrollArea>
        </Stack>

        
      </Group>
      
    </div>
  );
}