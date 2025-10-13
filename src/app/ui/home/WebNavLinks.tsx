import {Anchor, Flex, Group} from "@mantine/core";
import Link from "next/link";
import {usePathname} from "next/navigation";

const navLinkInfo = [
  {label: "Home", link: "/", disabled: false},
  {label: "Catalog", link: "/catalog", disabled: false},
  {label: "Requests", link: "/requests", disabled: false}
];

export function WebNavLinks() {

  const path = usePathname();

  const webNavLinks = navLinkInfo.map((item) => {

    if(item.disabled) return;

    return (
      <Anchor
        key={item.label}
        component={Link}
        style={{ textDecoration: path === item.link ? "underline" : undefined }}
        underline={"hover"}
        size={"lg"}
        c={"white"}
        href={item.link}>

        {item.label}
      </Anchor>
    );
  });

  return(
    <Flex h={"100%"} w={"100%"} align={"center"} justify={"flex-end"} px={"md"}>
      <Group gap={"xl"} wrap={"nowrap"}>
        {webNavLinks}
      </Group>
    </Flex>
  );
}