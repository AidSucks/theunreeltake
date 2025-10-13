import {NavLink, Paper} from "@mantine/core";
import {usePathname} from "next/navigation";
import {Film, House, Send} from "react-bootstrap-icons";

const navLinkInfo = [
  {label: "Home", icon: House, link: "/", disabled: false},
  {label: "Catalog", icon: Film, link: "/catalog", disabled: false},
  {label: "Requests", icon: Send, link: "/requests", disabled: false}
];

export function MobileNavLinks() {

  const path = usePathname();

  const mobileNavLinks =
    navLinkInfo.map((item) => {

      if(item.disabled) return;

      const Icon = item.icon;

      return(
        <NavLink
          key={item.label}
          href={item.link}
          active={path === item.link}
          label={item.label}
          leftSection={<Icon size={16}/>}
        />
      );
    });

  return (
    <Paper shadow={"xs"}>
      {mobileNavLinks}
    </Paper>
  );
}