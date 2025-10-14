'use client';

import {Burger, Flex, Collapse} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import {MobileNavLinks} from "@/app/ui/home/MobileNavLinks";

export function HomeBurgerMenu() {

  const [opened, { toggle }] = useDisclosure();

  return (
    <>
      <Flex h={"100%"} w={"100%"} align={"center"} justify={"center"} hiddenFrom={"sm"} direction={"column"}>
        <Burger opened={opened} onClick={toggle} aria-label={"Toggle Navigation Menu"}/>
      </Flex>

      <Collapse in={opened} hiddenFrom={"sm"}>
        <MobileNavLinks/>
      </Collapse>
    </>
  );
}