import {Box, Flex, ActionIcon, TextInput, Title} from '@mantine/core';
import {HomeBurgerMenu} from "@/app/ui/home/HomeBurgerMenu";
import {SocialMediaLinks} from "@/app/ui/home/SocialMediaLinks";
import {WebNavLinks} from "@/app/ui/home/WebNavLinks";
import {HomeHeaderButtons} from "@/app/ui/home/HomeHeaderButtons";
import {ArrowRight, Bootstrap, Search} from "react-bootstrap-icons";

export function HomeHeader() {

  return (
    <Flex h={"100%"} w={"100%"} p={"xs"} align={"flex-end"} direction={"column"}>

      <Flex h={"50%"} w={"inherit"} visibleFrom={"sm"}>

        <Box bg={"grape.2"} w={"25%"} h={"100%"}>
          <Flex h={"100%"} w={"100%"} align={"center"} justify={"flex-start"} pl={{ base: "none", md: "md"}} columnGap={8}>
            <Bootstrap size={30}/>
            <Title order={4} textWrap={"nowrap"}>The UnReel Take</Title>
          </Flex>
        </Box>

        <Box bg={"grape.3"} w={"50%"} h={"100%"}>
          <Flex h={"100%"} w={"100%"} align={"center"} justify={"center"} px={"xs"}>
            <TextInput
              radius={"xl"}
              size={"md"}
              inputSize={"40"}
              placeholder={"Search"}
              rightSectionWidth={42}
              leftSection={<Search size={18}/>}
              rightSection={
                <ActionIcon size={28} radius="xl" variant="filled">
                  <ArrowRight size={18}/>
                </ActionIcon>
              }
            />
          </Flex>
        </Box>

        <Box bg={"grape.2"} w={"25%"} h={"100%"}>
          <SocialMediaLinks/>
        </Box>

      </Flex>

      <Flex h={{ base: "100%", sm: "50%"}} w={"inherit"}>

        <Box bg={"red.5"} w={{ base: "40%", sm: "25%" }} h={"100%"}>
          <HomeBurgerMenu/>
        </Box>

        <Box bg={"blue.5"} w={"50%"} h={"100%"} visibleFrom={"sm"}>
          <WebNavLinks/>
        </Box>

        <Box bg={"green.5"} w={{ base: "60%", sm: "25%" }} h={"100%"}>
          <HomeHeaderButtons/>
        </Box>

      </Flex>

    </Flex>
  );
}