import {Button, Flex, Group} from "@mantine/core";

export function HomeHeaderButtons() {

  return(
    <Flex h={"100%"} w={"100%"} px={{ base: "none", md: "md"}}>
      <Group w={"100%"} gap={"xs"} justify={"flex-end"}>

        <Button size={"sm"}>
          Sign Up
        </Button>

        <Button size={"sm"}>
          Login
        </Button>

      </Group>
    </Flex>
  );
}