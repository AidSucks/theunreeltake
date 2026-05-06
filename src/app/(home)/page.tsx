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
  Container,
  Paper
} from "@mantine/core";
import {HomeSearchBar} from "@/app/ui/home/HomeSearchBar";
import { useRouter } from "next/navigation";

export default function HomePage() {

  const router = useRouter();

  const handleSearch = (value: string) => {

    const urlParams = new URLSearchParams();

    urlParams.set("search", value);

    router.push(`/catalog?${urlParams.toString()}`);
  };

  return (
    <Container size={"lg"}>

      <Stack mt={48}>

        <Flex h={"100%"} align={"center"} justify={"center"}>
          <Title order={1} ta={"center"} fz={{ base: 40, xs: 45, sm: 50, md: 55, lg: 60}}>Unprofessional Reviews</Title>
        </Flex>

        <Flex h={"100%"} align={"center"} justify={"center"}>
          <Text ta={"center"} fz={{ base: 20, xs: 22, sm: 24, md: 28, lg: 30}}>That Give You <Text inherit span fs={"italic"}>Reel</Text> Information</Text>
        </Flex>

        <Flex justify={"center"}>
          <Flex w={{ base: "100%", sm: "75%" }} align={"center"} justify={"center"}>
            <HomeSearchBar
              onSearchAction={(value) => handleSearch(value)}
            />
          </Flex>
        </Flex>
      </Stack>

      <Grid gap={"xl"} my={{ base: 32, lg: 64 }}>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <AspectRatio ratio={16 / 9}>
            <Flex justify={"center"} align={{ base: "center", md: "start"}}>
              <Paper shadow={"md"} maw={640} mah={360} bdrs={0}>
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

            <Title order={2} mb={"xs"}>Welcome</Title>

            <Text>
              Welcome to the UnReel Take; unprofessional reviews that give you reel information. What do we mean by that?
              We think everyone should have access to movie reviews and ratings by people who are passionate about all
              genres of film, and don&#39;t have an agenda. If you are anything like us, you check what other people had to say
              about a movie before selecting it to watch. We&#39;ve been let down too many times whether it be from spoilers,
              boring critic reviews with fanciful language, or inaccurate casual viewers who rate a movie badly because it
              didn&#39;t have enough nudity, or didn&#39;t align with their political views.
            </Text>

          </Flex>
        </Grid.Col>

        <Grid.Col span={12}>

          <Title order={2} mb={"xs"}>Who We Are And What We Do</Title>
          <Text>
            We watch TONS of movies, and our mission is to provide you with all of the the information you need when
            you go to select your next movie to watch, whether it be date night, family movie night, or a &#34;netflix and
            chill&#34; situation. To aid our mission, we developed the UnReel Method. We review movies based off of the quality
            of the overall viewing experience, not the movie itself. The movie might be bad, but that doesn&#39;t always mean
            it was a bad movie-watching experience.
          </Text>

        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <AspectRatio ratio={16 / 9}>
            <Flex justify={"center"} align={{ base: "center", md: "start"}}>
              <Paper shadow={"md"} maw={640} mah={360} bdrs={0}>
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

            <Title order={2} mb={"xs"}>The Unreel Method</Title>

            <Text>
              We&#39;ve been let down too many times whether it be from spoilers,
              boring critic reviews with fanciful language,
              or casual viewers who rate a movie badly because it didn&#39;t have enough nudity.
              With everything we review, we&#39;ll give you quick rundown of our take and the experience you can expect to have.
            </Text>

            <Text>
              We strive to make the movie selection process easier.
              We don&#39;t know about you, but we constantly come across movies whose primary category
              couldn&#39;t be further from the truth; whether it&#39;s a drama that was clearly an action,
              or horror that was actually comedy. We came up with our own categories we think better
              match the movie.
            </Text>

          </Flex>
        </Grid.Col>

        <Grid.Col span={{ base: 12, xs: 6 }} align={"center"}>
          <Stack gap={"xs"} ta={"center"} mx={"md"}>
            <Title order={2}>Never Miss a Review</Title>
            <Text>Signup For Our Newsletter</Text>
            <Flex w={"100%"} justify={"center"}>
              <TextInput placeholder="you@example.com" radius="md" type="email" maw={300} w={"100%"}/>
            </Flex>
            <Flex w={"100%"} justify={"center"}>
              <Button radius={"md"} type={"submit"} w={"100%"} maw={128} color={"dark"}>Submit</Button>
            </Flex>
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, xs: 6 }}>
          <Center>
            <Stack maw={225} justify={"center"}>
              <Center>
                <Text fw={"bolder"} ta={"center"}>Checkout Angry Fitz Media!</Text>
              </Center>
              <Image src={"/img/AFM.webp"} w={225} h={225} alt={"Angry Fitz Media"}/>
              <Flex w={"100%"} justify={"center"}>
                <Button component={"a"} color={"dark"} maw={128} w={"100%"} href={"https://www.angryfitzmedia.com/"}>Go there!</Button>
              </Flex>
            </Stack>
          </Center>
        </Grid.Col>

      </Grid>
    </Container>
  );
}
