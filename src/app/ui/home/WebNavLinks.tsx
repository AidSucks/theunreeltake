import {Anchor, Flex, Group} from "@mantine/core";
import Link from "next/link";
import {usePathname} from "next/navigation";

import {publicRouteMetadata} from "@/app/lib/constants";

export function WebNavLinks() {

  const path = usePathname();

  const webNavLinks = publicRouteMetadata.map((item) => {

    if(item.disabled) return;

    return (
      <Anchor
        component={Link}
        prefetch={item.prefetch}
        key={item.label}
        style={{ textDecoration: path === item.href ? "underline" : undefined }}
        underline={"hover"}
        size={"lg"}
        href={item.href}>

        {item.label}
      </Anchor>
    );
  });

  return(
    <Flex h={"100%"} w={"100%"} align={"center"} justify={"center"} px={"md"}>
      <Group gap={"xl"} wrap={"nowrap"}>
        {webNavLinks}
      </Group>
    </Flex>
  );
}