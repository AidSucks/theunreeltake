import {Button, Flex, Group} from "@mantine/core";
import ThemeToggleButton from "@/app/ui/home/ThemeToggleButton";


export function HomeHeaderButtons() {

  return(
    <Flex h={"100%"} w={"100%"} px={{ base: "none", md: "md"}}>
      <Group w={"100%"} gap={"xs"} justify={"flex-end"}>

        <ThemeToggleButton/>

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