'use client';

import {
  AspectRatio,
  Button,
  Center,
  Flex,
  Grid,
  Image,
  Stack,
  Text,
  Title,
  TextInput,
  Group,
  Container,
  Paper
} from "@mantine/core";
import {HomeSearchBar} from "@/app/ui/home/HomeSearchBar";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const handleSearch = (value: string) => {router.push(`/catalog?search=${value}`)};

  return (
    <Container size={"lg"}>

      <Stack mt={48}>

        <Flex h={"100%"} align={"center"} justify={"center"}>
          <Title order={1} ta={"center"}>Unprofessional Reviews</Title>
        </Flex>

        <Flex h={"100%"} align={"center"} justify={"center"}>
          <Text fz={30} ta={"center"}>That Give You the Reel Information</Text>
        </Flex>

        <Flex justify={"center"}>
          <Flex w={{ base: "100%", sm: "75%" }} align={"center"} justify={"center"}>
            <HomeSearchBar
              onSearchAction={(value) => handleSearch(value)}
            />
          </Flex>
        </Flex>
      </Stack>

      <Grid gap={"xl"} my={64}>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <AspectRatio ratio={16 / 9}>
            <Flex justify={"center"} align={{ base: "center", md: "start"}}>
              <Paper shadow={"md"} maw={640} mah={360}>
                <Image
                  maw={640}
                  mah={360}
                  src={"https://placehold.co/640x360"}
                  alt={"Image Failed to Load"}
                />
              </Paper>
            </Flex>
          </AspectRatio>
        </Grid.Col>

        <Grid.Col span={{base: 12, md: 6}}>
          <Flex direction={"column"}>
            <Title order={2}>Welcome</Title>

            <p>
              Welcome to the UnReel Take; unprofessional reviews that give you reel information. What do we mean by that?
              We think everyone should have access to movie reviews and ratings by people who are passionate about all
              genres of film, and don’t have an agenda. If you are anything like us, you check what other people had to say
              about a movie before selecting it to watch. We’ve been let down too many times whether it be from spoilers,
              boring critic reviews with fanciful language, or inaccurate casual viewers who rate a movie badly because it
              didn’t have enough nudity, or didn’t align with their political views.
            </p>

          </Flex>
        </Grid.Col>

        <Grid.Col span={12}>

          <Title order={2}>Who we are and what we do</Title>
          <p>
            We watch TONS of movies, and our mission is to provide you with all of the the information you need when
            you go to select your next movie to watch, whether it be date night, family movie night, or a “netflix and
            chill” situation. To aid our mission, we developed the UnReel Method. We review movies based off of the quality
            of the overall viewing experience, not the movie itself. The movie might be bad, but that doesn’t always mean
            it was a bad movie-watching experience.
          </p>

        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <AspectRatio ratio={16 / 9}>
            <Flex justify={"center"} align={{ base: "center", md: "start"}}>
              <Paper shadow={"md"} maw={640} mah={360}>
                <Image
                  maw={640}
                  mah={360}
                  src={"https://placehold.co/640x360"}
                  alt={"Image Failed to Load"}
                />
              </Paper>
            </Flex>
          </AspectRatio>
        </Grid.Col>

        <Grid.Col span={{base: 12, lg: 6}}>
          <Flex direction={"column"}>
            <Title order={2}>The Unreel Method</Title>
            <p>
              We’ve been let down too many times whether it be from spoilers,
              boring critic reviews with fanciful language,
              or casual viewers who rate a movie badly because it didn’t have enough nudity.
              With everything we review, we&#39;ll give you quick rundown of our take and the experience you can expect to have.
            </p>

            <p>We strive to make the movie selection process easier.
              We don’t know about you, but we constantly come across movies whose primary category
              couldn’t be further from the truth; whether it’s a drama that was clearly an action,
              or horror that was actually comedy. We came up with our own categories we think better
              match the movie. </p>

          </Flex>
        </Grid.Col>

        <Grid.Col span={12}>
          <Center>
            <Stack gap={"xs"} align={"center"}>
              <Title size={"h3"}>Never Miss a Review</Title>
              <Text>Signup For Our Newsletter</Text>
              <Group>
                <TextInput placeholder="you@example.com" radius="md" type="email"/>
                <Button radius={"md"} type={"submit"} color={"#2C2E33"}>Submit</Button>
              </Group>
            </Stack>
          </Center>
        </Grid.Col>

        <Grid.Col span={12}>
          <Center>
            <Stack maw={"300"} justify={"center"}>
              <Center>
                <Text>Now apart of Angry Fitz Media!</Text>
              </Center>
              <Image src={"/img/AFM.webp"} alt={"Angry Fitz Media"}/>
              <Button fullWidth component={"a"} href={"https://www.angryfitzmedia.com/"}>Go there!</Button>
            </Stack>
          </Center>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
