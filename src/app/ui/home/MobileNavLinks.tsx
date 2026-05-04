import {NavLink} from "@mantine/core";
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
          variant={"filled"}
          key={item.label}
          href={item.href}
          active={path === item.href}
          label={item.label}
          leftSection={<Icon size={16}/>}
          color={"dark.8"}
          c={"white"}
        />
      );
    });

  return (
    <>
      {mobileNavLinks}
    </>
  );
}