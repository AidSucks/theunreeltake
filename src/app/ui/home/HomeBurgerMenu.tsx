'use client';

import {Burger, Flex, Drawer} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import {MobileNavLinks} from "@/app/ui/home/MobileNavLinks";

export function HomeBurgerMenu() {

  const [opened, { toggle }] = useDisclosure();

  return (
    <>
      <Flex h={"100%"} px={{ base: "none", md: "md"}}>
        <Burger opened={opened} onClick={toggle} aria-label={"Toggle Navigation Menu"} color={"gray.0"}/>
      </Flex>

      <Drawer
        opened={opened}
        onClose={toggle}
        size={"100%"}
        closeButtonProps={{ c: "white" }}
        styles={{
          header: {
            backgroundColor: "var(--mantine-color-dark-filled)"
          },
          content: {
            backgroundColor: "var(--mantine-color-dark-filled)"
          }
        }}
      >
        <MobileNavLinks/>
      </Drawer>
    </>
  );
}