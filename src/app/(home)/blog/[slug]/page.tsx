import prisma from "@/lib/prisma";
import { redirect } from 'next/navigation';
import {
  Title,
  Grid,
  GridCol,
  Image,
  Text,
  Group,
  Stack,
  Textarea,
  ScrollArea,
  Flex,
  Paper,
  Button, Container, Box
} from "@mantine/core";
import dayjs from "dayjs";

export default async function BlogPostPage(
  {
    params
  }: {
    params: Promise<{ slug: string }>
  }
) {

  const { slug } = await params;

  const data = await prisma.post.findUnique({
    where: { slug: slug },
    include: {
      tags: { include: { tag: true }, omit: { postId: true, tagId: true }},
      author: { select: { name: true, image: true } }
    },
    omit: { authorId: true }
  });

  if (!data || !data.published) redirect ("/catalog");

  const tagElements = data.tags.map((value, index) => {
    return(
      <Button 
        key={index}
        color={"dark"}
        variant={"outline"}
        size={"sm"}
        mt={4}
        onClick={async () => {
          "use server"
          const url: string = "/catalog?tags="+value.tag.id;
          redirect (url);
        }}
      >
        {value.tag.displayName}
      </Button>
    );
  });


  return (
    <Flex bg={"gray.0"}>
      <Container px={{ base: 0, md: "md"}}>
        <Paper shadow={"sm"} p={{ base: "md", sm: "xl"}} bdrs={0}>
          <Stack>

            <Group gap={"md"}>

              <Paper shadow={"xs"} bg={"gray.0"} p={"xs"} bdrs={0} miw={175}>
                <Stack gap={0}>
                  <Text component={"span"} size={"xs"} fw={500}>Written By:</Text>
                  <Text>{data.author.name}</Text>
                </Stack>
              </Paper>

              <Paper shadow={"xs"} bg={"gray.0"} p={"xs"} bdrs={0} miw={175}>
                <Stack gap={0}>
                  <Text component={"span"} size={"xs"} fw={500}>Posted:</Text>
                  <Text>{dayjs(data.createdAt).format("MMM D, YYYY h:mm A")}</Text>
                </Stack>
              </Paper>

              <Paper shadow={"xs"} bg={"gray.0"} p={"xs"} bdrs={0} miw={175}>
                <Stack gap={0}>
                  <Text component={"span"} size={"xs"} fw={500}>Updated:</Text>
                  <Text>{dayjs(data.updatedAt).format("MMM D, YYYY h:mm A")}</Text>
                </Stack>
              </Paper>

            </Group>

            <Title order={1} my={"lg"}> {data.title}  </Title>

            <Grid align="flex-start" columnGap={"xs"}>
              <GridCol span={{base: 12, md: 6}}>
                <Image
                  alt={"Test"}
                  src={"https://placehold.co/640x360"}
                />
              </GridCol>
              <GridCol span={{base: 12, md: 6}}>
                <Image
                  alt={"Test"}
                  src={"https://placehold.co/640x360"}
                />
              </GridCol>
            </Grid>

            <Box>
              <div dangerouslySetInnerHTML={{__html: data.htmlContent}}></div>
            </Box>

            <Text size="sm" ta="left" fw={500}>Tags:</Text>
            <Group>
              {tagElements}
            </Group>

            <Textarea
              label="Leave a comment"
              placeholder="Your comment"
              autosize
              minRows={4}
            />

            <Text size="sm" ta="left" fw={500}>Reviews you may also like:</Text>

            <ScrollArea w={"100%"} h={240} scrollbars={"x"}>
              <Group w={288} wrap={"nowrap"} px={"sm"}>

                {new Array<number>(10).fill(0).map((_, i) =>
                  <Box key={i}>
                    <Paper w={180} h={220} bg={"gray.2"}></Paper>
                  </Box>
                )}

              </Group>
            </ScrollArea>

          </Stack>
        </Paper>
      </Container>
    </Flex>
  );
}