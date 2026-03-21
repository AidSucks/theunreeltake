'use client';

import {AspectRatio, Button, Center, Flex, Grid, Image, Stack, Text, Title, TextInput, Group} from "@mantine/core";

export default function HomePage() {

  return (
    <div style={{ padding: "0 40px" }}>
      <Grid
        w="100%"
        columns={12}
        type={"container"}
        breakpoints={{ xs: '425px', sm: '500px', md: '850px', lg: '900px', xl: '1024' }}
        m={{ base: "md", md: "xl"}}
        gutter={"xl"}>
  
        <Grid.Col span={12}>
          <Flex h={"100%"} align={"center"} justify={"center"}>
            <Title fz={50} order={1} ta={"center"}>Unprofessional Reviews</Title>
          </Flex>
        </Grid.Col>
  
        <Grid.Col span={12}>
          <Flex h={"100%"} align={"center"} justify={"center"}>
            <Text fz={30} ta={"center"}>That Give You the Reel Information</Text>
          </Flex>
        </Grid.Col>
  
        <Grid.Col span={12}>
                  <Flex h={"100%"} align={"center"} justify={"center"}>
            <TextInput w={400} size="md" radius="lg" placeholder="Find what you're looking for" mb="xl" />
          </Flex>
        </Grid.Col>
        
        <Grid.Col span={{ base: 12, lg: 6 }}>
          <Flex direction="column">
            <AspectRatio ratio={1}>
              <Image
                radius="md"
                height={500}
                src={"https://placehold.co/600x800?text=Placeholder"}
                alt={"Image Failed to Load"}/>
            </AspectRatio>
          </Flex>
        </Grid.Col>
        
        <Grid.Col span={{base: 12, lg: 6}}>
          <Flex direction={"column"}>
            <Title order={1}>Welcome</Title>
            <Title order={2} fw={200}>Who we are and what we do:</Title>
            <p>
              Welcome to the UnReel Take; unprofessional reviews that give you reel information. What do we mean by that?
              We think everyone should have access to movie reviews and ratings by people who are passionate about all
              genres of film, and don’t have an agenda. If you are anything like us, you check what other people had to say
              about a movie before selecting it to watch. We’ve been let down too many times whether it be from spoilers,
              boring critic reviews with fanciful language, or inaccurate casual viewers who rate a movie badly because it
              didn’t have enough nudity, or didn’t align with their political views.
            </p>
  
            <p>
              We watch TONS of movies, and our mission is to provide you with all of the the information you need when
              you go to select your next movie to watch, whether it be date night, family movie night, or a “netflix and
              chill” situation. To aid our mission, we developed the UnReel Method. We review movies based off of the quality
              of the overall viewing experience, not the movie itself. The movie might be bad, but that doesn’t always mean
              it was a bad movie-watching experience.
            </p>
          </Flex>
        </Grid.Col>
  
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Flex direction="column">
            <AspectRatio ratio={1}>
              <Image
                radius="md"
                height={400}
                width={400}
                src={"https://placehold.co/600x400?text=Placeholder"}
                alt={"Image Failed to Load"}/>
            </AspectRatio>
          </Flex>
        </Grid.Col>
  
        <Grid.Col span={{base: 12, lg: 6}}>
          <Flex direction={"column"}>
            <Title order={1}>The UnReel Method</Title>
            <Title order={2} fw={200}>Everything you need to know:</Title>
  
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
    </div>
  );
}
