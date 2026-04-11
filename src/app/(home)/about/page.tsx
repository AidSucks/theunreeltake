"use client";
import { AspectRatio, Flex, Grid, Image, Paper, Stack, Text, Title, Badge, Group, Container } from "@mantine/core";

// Temporary team member's data (could be 4 +- of how many members would be on the team)
const TEAM_MEMBERS = [
  {
    name: "Member Name",
    role: "Role Type",
    email: "johndoe@example.com",
    image: "https://placehold.co/180x180?text=Member+1",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestiae, laboriosam placeat pariatur harum animi ut quibusdam voluptas laudantium."
  },
  {
    name: "Member Name",
    role: "Role Type",
    email: "johndoe@example.com",
    image: "https://placehold.co/180x180?text=Member+2",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestiae, laboriosam placeat pariatur harum animi ut quibusdam voluptas laudantium."
  },
  {
    name: "Member Name",
    role: "Role Type",
    email: "johndoe@example.com",
    image: "https://placehold.co/180x180?text=Member+3",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestiae, laboriosam placeat pariatur harum animi ut quibusdam voluptas laudantium."
  },
  {
    name: "Member Name",
    role: "Role Type",
    email: "johndoe@example.com",
    image: "https://placehold.co/180x180?text=Member+4",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestiae, laboriosam placeat pariatur harum animi ut quibusdam voluptas laudantium."
  }
];

export default function AboutPage() {
  return (
    <Container size="lg" py="xl">
      <Grid columns={12} gap={"xl"}>
        {/*About Section*/}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Title order={1}>About The Unreel Take</Title>
          <Text c="dimmed" mb="md" fw={500}>The subheading goes here</Text>
          <Text size="sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur soluta eos dolores, incidunt sunt laudantium delectus repellat maxime aliquam, similique enim illum velit quae facilis.
          </Text>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Image
            radius="md"
            src="https://placehold.co/600x400?text=About+Us"
            alt="About Us"
          />
        </Grid.Col>

        {/*Meet the Team Section*/}
        <Grid.Col span={12} mt="xl">
          <Title order={2} mb="lg">Meet the UnReel Team</Title>
          
          <Stack gap="md">
            {TEAM_MEMBERS.map((member, index) => (
              <Paper key={index} withBorder p="md" radius="md">
                <Flex 
                  direction={{ base: 'column', sm: 'row' }} 
                  gap="md" 
                  align="flex-start"
                >
                  {/* Image Container */}
                  <Paper bg="gray.1" radius="md" w={{ base: '100%', sm: 180 }} style={{ overflow: 'hidden' }}>
                    <AspectRatio ratio={1}>
                      <Image
                        src={member.image}
                        alt={member.name}
                      />
                    </AspectRatio>
                  </Paper>

                  {/* Details Container */}
                  <Stack gap={4} flex={1}>
                    <Group justify="space-between" align="center">
                      <Text fw={700} size="xl">{member.name}</Text>
                      <Badge variant="light" color="blue" size="xl">
                        {member.role}
                      </Badge>
                    </Group>
                    
                    <Text size="sm" c="dimmed" fw={500}>
                      {member.email}
                    </Text>

                    <Text size="sm" c="gray.7" mt="xs">
                      {member.bio}
                    </Text>
                  </Stack>
                </Flex>
              </Paper>
            ))}
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
}