
import films from "@/../public/film.json";
import { Title, Grid, GridCol,Image,Text,Divider,Group,Stack, Textarea, ScrollArea, Box, Flex, Paper, UnstyledButton } from "@mantine/core";

export default async function BlogPostPage(
  {
    params
  }: {
    params: Promise<{ slug: string }>
  }
) {

  const { slug } = await params;

  const fullPostData = films.find((entry) => entry.slug === slug);

  if(!fullPostData) return <h1>Not Found</h1>;

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
        <Textarea 
        w={600} 
        label="Review the Review"
        placeholder="Start Here"
        autosize
        minRows={2}
        />
        <Stack gap="xs">
          <Text size="sm" ta="left">Reviews you may also like:</Text>
          <ScrollArea  maw={800} w="100%" mx="auto" scrollbars="x">
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