import {Button, Flex, Group} from "@mantine/core";


export function HomeHeaderButtons() {

  return(
    <Flex h={"100%"} w={"100%"} px={{ base: "none", md: "md"}}>
      <Group w={"100%"} gap={"xs"} justify={"flex-end"}>

        <Button h={"80%"}>
          Sign Up
        </Button>

        <Button h={"80%"}>
          Login
        </Button>

      </Group>
    </Flex>
  );
}