'use client';

import {AspectRatio, Button, Center, Flex, Grid, Image, List, Space, Stack, Text, Title} from "@mantine/core";

export default function HomePage() {

  return (
    <Grid
      columns={12}
      type={"container"}
      breakpoints={{ xs: '425px', sm: '500px', md: '850px', lg: '900px', xl: '1024' }}
      m={{ base: "md", md: "xl"}}
      gutter={"xl"}>

      <Grid.Col span={{base: 12, lg: 6}}>
        <Flex h={"100%"} align={"center"} justify={"center"}>
          <Title order={1} ta={"center"}>Unprofessional reviews that give you <i>Reel</i> information</Title>
        </Flex>
      </Grid.Col>

      <Grid.Col span={{base: 12, lg: 6}}>
        <Flex direction={"column"}>
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

      <Grid.Col span={{base: 12, lg: 6}}>
        <Flex direction={"column"}>
          <h1>The UnReel Method</h1>

          <p>
            With each movie we review we will give you quick rundown of our take and what you can expect in the movie.
            Additionally, we will assign each movie an UnReel AR and an UnReel Category to help you narrow your search.
            Lastly, we are firm believers the right food and drink will enhance your viewing experience; we will leave
            suggestions for both.
          </p>

          <u>Terms you need to know:</u>

          <p>
            <strong>UnReel Arbitrary Rating (AR):</strong><br/>
            TheUnReel team maintains a list of all movies we watch, and we each rate them on a scale of 1-10. The AR is
            the resulting average of our ratings, but since we don’t consider ourselves the almighty Gods of cinema, we
            also think the
            ratings are arbitrary. Let’s face it, eventually there will be a movie experience we loved that you disliked,
            and vice versa. So take our AR with a grain of salt, and a shot of tequila.
          </p>

          <p>
            <strong>UnReel Category: </strong><br/>
            We strive to make the movie selection process easier. We don’t know about you, but we constantly come across
            movies whose primary category couldn’t be further from the truth; whether it’s a drama that was clearly an
            action, or horror that was actually comedy. We came up with our own categories we think better match the
            movie.
            Below are just a few examples:
          </p>

          <p>
            <em>Supernatural Thriller</em>:
            These are horror movies that deal with any matter of the supernatural, mainly ghosts, demons, etc…
          </p>

          <p>
            <em>Super Action</em>:
            These are action movies that feature Super Heroes. There are so many now we thought it warranted it’s own category.
          </p>

          <p>
            <em>Serial Suspense</em>:
            These movies involve serial killers or otherwise murderous plots. Don’t lie, we know you love these kind of movies.
          </p>

          <p>
            <em>Crime Time</em>:
            Think bank heist, mafia, gangs, undercover work. Anything with crime as the main plot.
          </p>

          <p>
            <em>Found Footage</em>:
            The handheld shaky camera sub-genre of horror movies that you either love or hate. …We love them, so we will help
            you sift through the good, bad, and oh dear God that is an hour and a half I will never get back.
          </p>
        </Flex>
      </Grid.Col>


      <Grid.Col span={{ base: 12, sm: 6 }}>
        <Flex h={"100%"} w={"100%"} align={"center"} justify={"center"}>
          <AspectRatio ratio={600 / 800}>
            <Image
              radius="md"
              src={"https://placehold.co/600x800?text=Placeholder"}
              alt={"Image Failed to Load"}/>
          </AspectRatio>
        </Flex>
      </Grid.Col>

      <Grid.Col span={{ base: 12, sm: 6 }}>
        <Flex h={"100%"} w={"100%"} align={"center"} justify={"center"}>
          <AspectRatio ratio={600 / 400}>
            <Image
              radius="md"
              src={"https://placehold.co/600x400?text=Placeholder"}
              alt={"Image Failed to Load"}/>
          </AspectRatio>
        </Flex>
      </Grid.Col>

      <Grid.Col span={{base: 12, lg: 6}}>
        <Flex direction={"column"} h={"100%"} w={"100%"} justify={"center"}>
          <Text>
            Now introducing, book reviews! We’ve applied the same methodology of reviewing the overall experience when it
            comes to reading a book. Book reviews can sometimes be even more unreliable than movies. Sometimes all it takes
            is a single character the reader doesn’t like to rate a book poorly. When you select a book to read, you are choosing
            to dedicate hours, days, weeks, or even months of your time to read that book. The way we figure it, there are 4
            key categories that  create a great reading experience:
          </Text>
          <Space h={"md"}/>
          <List ml={"lg"}>
            <List.Item>Story</List.Item>
            <List.Item>Writing</List.Item>
            <List.Item>Characters</List.Item>
            <List.Item>Setting</List.Item>
          </List>
          <Space h={"md"}/>
          <Text>
            We will give you a rating of each, along with our overall rating of the experience. Similar to our movie reviews,
            we wanted to provide a little bit of extra to go along with your experience, so we will also tell you what we think
            the ideal reading location is for the book, along with the appropriate drink to sip on to make your book reading
            experience even more immersive.
          </Text>
        </Flex>
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
  );
}
