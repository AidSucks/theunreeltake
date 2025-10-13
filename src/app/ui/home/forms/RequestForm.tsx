'use client';

import {Button, Fieldset, Flex, Group, NativeSelect, rem, Textarea, TextInput, Title} from "@mantine/core";
import z from "zod";
import {useForm, zodResolver} from "@mantine/form";
import {testRequestForm} from "@/app/lib/actions";
import {useState} from "react";

const maxMessageLength = 250;
const maxNameLength = 75;
const maxTitleLength = 100;

const mediaTypes: Readonly<[string, ...string[]]> = ["Movie", "Book"];

const requestSchema = z.object({
  name: z.string().max(maxNameLength).optional(),
  email: z.string().email({ message: "Invalid Email"}).nonempty({ message: "This field is required" }),
  title: z.string().max(maxTitleLength).nonempty({ message: "This field is required"}),
  mediaType: z.enum(mediaTypes),
  message: z.string().max(maxMessageLength).optional()
});

export type RequestSchema = z.infer<typeof requestSchema>;

export function RequestForm() {

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      email: "",
      title: "",
      mediaType: mediaTypes[0],
      message: ""
    },
    validate: zodResolver(requestSchema)
  });

  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (values: typeof form.values) => {
    await testRequestForm(values);
    setCompleted(true);
  }

  if(completed) {
    return (
      <Title order={2}>Thank you for your request!</Title>
    );
  }

  return(

    <>
    <Title order={2}>Send us your request:</Title>

    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Flex
        justify={"center"}
        my={"sm"}
        gap={"sm"}
        direction={{ base: "column", sm: "row"}}
        mih={"250px"}>

        <Fieldset legend={"Your Information"} w={{ base: "100%", sm: "50%"}}>
          <TextInput
            label={"Name"}
            placeholder={"Your Name"}
            maxLength={maxNameLength}
            key={form.key("name")}
            {...form.getInputProps("name")}
          />

          <TextInput
            label={"Email"}
            placeholder={"Your Email"}
            mt={"md"}
            withAsterisk
            key={form.key("email")}
            {...form.getInputProps("email")}
          />

        </Fieldset>

        <Fieldset legend={"Request Information"} w={{ base: "100%", sm: "50%" }}>
          <TextInput
            label={"Title"}
            placeholder={"Title"}
            maxLength={maxTitleLength}
            description={"The title of the movie/book you're making this request for"}
            withAsterisk
            key={form.key("title")}
            {...form.getInputProps("title")}
          />

          <NativeSelect
            maw={rem(150)}
            label={"Type"}
            data={mediaTypes}
            key={form.key("mediaType")}
            {...form.getInputProps("mediaType")}
          />

          <Textarea
            label={"Message"}
            description={"Why you're requesting a review and/or any extra information you want us to know"}
            placeholder={"Message"}
            autosize
            maxLength={maxMessageLength}
            minRows={3}
            key={form.key("message")}
            {...form.getInputProps("message")}
          />

        </Fieldset>

      </Flex>

      <Group justify={"flex-start"} w={{ base: "100%", sm: "50%" }} align={"center"} style={{justifyContent: "center"}}>
        <Button w={"50%"} type={"submit"} loading={form.submitting}>Submit</Button>
      </Group>
    </form>
    </>
  );
}