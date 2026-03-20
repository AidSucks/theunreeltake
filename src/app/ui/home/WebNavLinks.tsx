import {Anchor, Flex, Group} from "@mantine/core";
import Link from "next/link";
import {usePathname} from "next/navigation";

import {publicRouteMetadata} from "@/lib/constants";

export function WebNavLinks() {

  const path = usePathname();

  const webNavLinks = publicRouteMetadata.map((item) => {

    if(item.disabled) return;

    return (
      <Anchor
        component={Link}
        prefetch={item.prefetch}
        key={item.label}
        style={{ textDecorationColor: path === item.href ? "color" : "blue", 
        textDecorationLine: path === item.href ? "underline" : undefined,
        'borderStyle': 'hidden hidden solid hidden', 'borderWidth': '3px', padding: '5px', color: 'black',
        borderColor: 'gray'}}
       
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