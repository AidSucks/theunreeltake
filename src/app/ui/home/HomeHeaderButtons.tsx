import {Button, Flex, Group} from "@mantine/core";
import Link from "next/link";

export function HomeHeaderButtons() {

  return(
    <Flex h={"100%"} w={"100%"} px={{ base: "none", md: "md"}}>
      <Group w={"100%"} gap={"xs"} justify={"flex-end"}>

        <Button component={Link} href={"/login"} prefetch={false} size={"sm"} radius={"md"} color={"#2C2E33"}>
          Login
        </Button>

      </Group>
    </Flex>
  );
}