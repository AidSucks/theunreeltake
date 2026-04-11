'use client';

import {Burger, Flex, Collapse} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import {MobileNavLinks} from "@/app/ui/home/MobileNavLinks";
import ThemeToggleButton from "@/app/ui/home/ThemeToggleButton";

export function HomeBurgerMenu() {

  const [opened, { toggle }] = useDisclosure();

  return (
    <>
      <Flex h={"100%"} align={"center"} gap={"sm"} px={{ base: "none", md: "md"}}>
        <Burger opened={opened} onClick={toggle} aria-label={"Toggle Navigation Menu"} hiddenFrom={"sm"}/>
        <ThemeToggleButton/>
      </Flex>

      <Collapse expanded={opened} hiddenFrom={"sm"}>
        <MobileNavLinks/>
      </Collapse>
    </>
  );
}