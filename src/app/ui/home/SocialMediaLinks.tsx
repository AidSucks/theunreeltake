import {Facebook, Instagram, TwitterX, Youtube} from "react-bootstrap-icons";
import {ActionIcon, Flex, Group} from "@mantine/core";

const socialMediaLinks = [
  {label: "Youtube", icon: Youtube, link: "https://www.youtube.com"},
  {label: "TwitterX", icon: TwitterX, link: "https://www.x.com"},
  {label: "Instagram", icon: Instagram, link: "https://www.instagram.com"},
  {label: "Facebook", icon: Facebook, link: "https://www.facebook.com"},
];

export function SocialMediaLinks() {

  const socialMediaIcons =
    socialMediaLinks.map((item) => {
      const Icon = item.icon;

      return (
        <ActionIcon
          key={item.label}
          component={"a"}
          href={item.link}
          target={"_blank"}
          variant={"filled"}
          size={"lg"}
          radius={"md"}
          aria-label={item.label}>

          <Icon size={20}/>
        </ActionIcon>
      );
    });

  return (
    <Flex h={"100%"} w={"100%"} align={"center"} justify={"flex-end"} pr={{ base: "none", md: "md"}} wrap={"nowrap"}>
      <Group gap={"sm"}>
        {socialMediaIcons}
      </Group>
    </Flex>
  );
}