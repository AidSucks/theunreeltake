import {Button, Flex, Group} from "@mantine/core";
import Link from "next/link";

export function HomeHeaderButtons() {

  return(
    <Flex h={"100%"} w={"100%"} px={{ base: "none", md: "md"}}>
      <Group w={"100%"} gap={"xs"} justify={"flex-end"}>

        <Button component={Link} href={"/login"} prefetch={false} size={"lg"} radius={"md"} variant = "outline" 
            style={{ borderColor: "white", color: "rgba(255,255,255,0.75)", backgroundColor: "#7952b3", transition: "0.2s ease" }}
                onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = "white";
                    e.currentTarget.style.color = "black";
                    e.currentTarget.style.borderColor = "white";
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = "#7952b3";
                    e.currentTarget.style.color = "rgba(255,255,255,0.75)";
                    e.currentTarget.style.borderColor = "white";
                }}>
          Login
        </Button>

      </Group>
    </Flex>
  );
}