'use client';

import {Search, X} from "react-bootstrap-icons";
import {ActionIcon, TextInput} from "@mantine/core";
import React, {useState} from "react";
import {useDebouncedCallback} from "@mantine/hooks";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

export function HomeSearchBar() {

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [search, setSearch] = useState(searchParams.get("search") ?? "");

  const handleKeyUp =
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if(event.key === 'Enter') handleSearch();
    }

  const handleSearch =
    useDebouncedCallback(() => {

      const newParams = new URLSearchParams(searchParams);

      if(!search)
        newParams.delete("search");
      else
        newParams.set("search", search);

      router.push(`${pathname}?${newParams}`)

    }, 25);

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