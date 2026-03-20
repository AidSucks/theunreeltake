import {Box, Flex, Title} from '@mantine/core';
import {HomeBurgerMenu} from "@/app/ui/home/HomeBurgerMenu";
import {SocialMediaLinks} from "@/app/ui/home/SocialMediaLinks";
import {WebNavLinks} from "@/app/ui/home/WebNavLinks";
import {HomeHeaderButtons} from "@/app/ui/home/HomeHeaderButtons";
import {Bootstrap} from "react-bootstrap-icons";

export function HomeHeader() {

  return (
    <Flex h={"100%"} w={"100%"} p={"xs"} align={"flex-end"} direction={"column"}>

      <Flex h={"50%"} w={"inherit"} visibleFrom={"sm"}>

        <Box w={"25%"} h={"100%"}>
          <Flex h={"100%"} w={"100%"} align={"center"} justify={"flex-start"} pl={{ base: "none", md: "md"}} columnGap={8}>
            <Bootstrap size={30}/>
            <Title order={4} textWrap={"nowrap"}>The UnReel Take</Title>
          </Flex>
        </Box>

        <Box w={"50%"} h={"100%"}>
          <Flex h={"100%"} w={"100%"} align={"center"} justify={"center"} px={"xs"}>
            {/**Center Media**/}
          </Flex>
        </Box>

        

      </Flex>

      <Flex h={{ base: "100%", sm: "50%"}} w={"inherit"}>

        <Box w={{ base: "40%", sm: "25%" }} h={"100%"}>
          <HomeBurgerMenu/>
        </Box>

        <Box w={"50%"} h={"100%"} visibleFrom={"sm"}>
          <WebNavLinks/>
        </Box>

        <Box w={{ base: "60%", sm: "25%" }} h={"100%"}>
          <HomeHeaderButtons/>
        </Box>

      </Flex>

    </Flex>
  );
}