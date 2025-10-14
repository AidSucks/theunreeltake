'use client';

import {ActionIcon, Menu, Text, Tooltip} from "@mantine/core";
import {Funnel} from "react-bootstrap-icons";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {Suspense} from "react";

export default function CatalogActionButtons() {

  return(
    <Suspense>
      <SortByButton/>
    </Suspense>
  );

}

function SortByButton() {

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const applySortBy = (value: string) => {

    const params = new URLSearchParams(searchParams);

    if(!value)
      params.delete("sort");
    else
      params.set("sort", value);

    router.push(`${pathname}?${params}`);
  }

  return (

    <Menu
      transitionProps={{transition: "pop-top-left"}}
      position={"bottom-start"}>

      <Menu.Target>
        <Tooltip label={"Sort By"}>
          <ActionIcon
            size={"lg"}
            variant={"outline"}>
              <Funnel size={22}/>
          </ActionIcon>
        </Tooltip>
      </Menu.Target>

      <Menu.Dropdown>

        <Menu.Item onClick={() => applySortBy("rating")}>
          <Text>Rating</Text>
        </Menu.Item>

        <Menu.Item onClick={() => applySortBy("")}>
          <Text>Clear</Text>
        </Menu.Item>

      </Menu.Dropdown>

    </Menu>
  );
}