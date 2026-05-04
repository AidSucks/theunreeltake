'use client';

import {Search, X} from "react-bootstrap-icons";
import {ActionIcon, TextInput} from "@mantine/core";
import React, {useState} from "react";
import {useDebouncedCallback} from "@mantine/hooks";

export function HomeSearchBar(
  {
    initialValue,
    onSearchAction
  }: {
    initialValue?: string,
    onSearchAction: (value: string) => void
  }
) {

  const [search, setSearch] = useState(initialValue ?? "");

  const handleKeyUp =
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if(event.key === 'Enter') handleSearch();
    }

  const handleSearch =
    useDebouncedCallback(() => onSearchAction(search), 25);

  const handleChange =
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
    }

  return (
    <TextInput
      mx={"lg"}
      w={{base: "100%"}}
      value={search}
      onChange={handleChange}
      onKeyUp={handleKeyUp}
      radius={"xl"}
      size={"md"}
      placeholder={"Search"}
      rightSectionWidth={42}
      leftSection={<Search size={18}/>}
      rightSection={ search ?
        <ActionIcon
          onClick={() => {
            setSearch("");
            handleSearch();
          }}
          size={28}
          radius="xl"
          variant="filled"
          >
          <X size={18}/>
        </ActionIcon>
        : null
      }
    />
  );
}