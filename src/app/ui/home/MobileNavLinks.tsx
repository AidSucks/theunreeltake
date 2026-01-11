import {NavLink, Paper} from "@mantine/core";
import {usePathname} from "next/navigation";

import {publicRouteMetadata} from "@/lib/constants";

export function MobileNavLinks() {

  const path = usePathname();

  const mobileNavLinks =
    publicRouteMetadata.map((item) => {

      if(item.disabled) return;

      const Icon = item.icon;

      return(
        <NavLink
          key={item.label}
          href={item.href}
          active={path === item.href}
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