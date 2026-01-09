'use client';

import {ActionIcon, Menu, Text, Tooltip} from "@mantine/core";
import {CardText, Funnel} from "react-bootstrap-icons";
import {allowedPostsPerPage} from "@/app/lib/constants";

export default function CatalogActionButtons(
  {
    onSortByAction,
    onPostsCountAction
  }: {
    onSortByAction: (value: string) => void
    onPostsCountAction: (value: number) => void
  }
) {

  return (

    <>

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

        <Menu.Label>Sort By</Menu.Label>

        <Menu.Item onClick={() => onSortByAction("rating")}>
          <Text>Rating</Text>
        </Menu.Item>

        <Menu.Item onClick={() => onSortByAction("")}>
          <Text>Clear</Text>
        </Menu.Item>

      </Menu.Dropdown>

    </Menu>

    <Menu
      transitionProps={{transition: "pop-top-left"}}
      position={"bottom-start"}>

      <Menu.Target>
        <Tooltip label={"Posts Per Page"}>
          <ActionIcon
            size={"lg"}
            variant={"outline"}>
            <CardText size={22}/>
          </ActionIcon>
        </Tooltip>
      </Menu.Target>

      <Menu.Dropdown>

        <Menu.Label>Count</Menu.Label>

        {allowedPostsPerPage.map((value, index) => {
          return (
            <Menu.Item key={index} onClick={() => onPostsCountAction(value)}>
              <Text>{value.toString()}</Text>
            </Menu.Item>
          )
        })}

      </Menu.Dropdown>

    </Menu>

    </>
  );

}