import {Box, NavLink} from "@mantine/core";
import {usePathname} from "next/navigation";
import {Book, Film, House, Send} from "react-bootstrap-icons";

const navLinkInfo = [
  {label: "Home", icon: House, link: "/", disabled: false},
  {label: "Movies", icon: Film, link: "/movies", disabled: false},
  {label: "Books", icon: Book, link: "/books", disabled: false},
  {label: "Requests", icon: Send, link: "/requests", disabled: false}
];

export function MobileNavLinks() {

  const path = usePathname();

  const mobileNavLinks =
    navLinkInfo.map((item) => {

      if(item.disabled) return;

      const Icon = item.icon;

      return(
        <Box key={item.label} bg={"gray.1"}>
          <NavLink
            href={item.link}
            active={path === item.link}
            label={item.label}
            leftSection={<Icon size={16}/>}
          />
        </Box>
      );
    });

  return <>{mobileNavLinks}</>;
}