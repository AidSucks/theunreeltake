'use client';

import {Button, Fieldset, Card, Flex, Divider, Anchor, Group, NativeSelect, Text, Textarea, TextInput, Title} from "@mantine/core";
import {useForm} from "@mantine/form";
import {zod4Resolver} from "mantine-form-zod-resolver";
import {useState} from "react";
import {RequestFormSchema} from "@/lib/schemas";
import {AllowedMediaType, maxTextAreaLength, maxTextInputLength} from "@/lib/constants";
import { submitRequestForm } from "@/lib/actions";


export function RequestForm() {

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      email: "",
      title: "",
      mediaType: AllowedMediaType.Movie,
      message: ""
    },
    validate: zod4Resolver(RequestFormSchema),
    validateInputOnChange: true,
  });

  const [completed, setCompleted] = useState(false);
  
  const handleSubmit = async (values: typeof form.values) => {
    try{
        await submitRequestForm(values);
        form.reset();
        setCompleted(true);
    }catch(e) {
        console.error(e);
    }
  }

  if(completed) {
    return (
      <Flex justify="center" align="center" direction="column" py="xl">
        <Card shadow="sm" padding="xl" w={{ base: "100%", sm: 500 }}>
          <Title order={2}  mb="md" style={{textAlign: "center"}}>
            Thank you for your request!
          </Title>
        </Card>
      </Flex>
    );
  }

  return(

    <Flex justify="center" py="xl">
      <Card shadow="sm" padding="xl" w={{ base: "100%", sm: 900 }}>
        <Title order={2} style={{textAlign: "center"}} mb="lg">
          Send us your request
        </Title>

        <Text c="dimmed" size="sm" mb="xl">
          Didn’t find the UnReel Take you were looking for? Request a movie for our review! 
          Leaving your name is optional, but please insert your email so we can notify you.
        </Text>

        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Flex
            direction={{ base: "column", sm: "row" }}
            gap="md"
            mb="md"
          >
            <Fieldset legend="Your Information" w={{ base: "100%", sm: "50%" }}>
              <TextInput
                label="Email"
                placeholder="your@email.com"
                withAsterisk
                mb="sm"
                key={form.key("email")}
                {...form.getInputProps("email")}
              />
              <TextInput
                label="Name (optional)"
                placeholder="Your Name"
                mb="sm"
                maxLength={maxTextInputLength}
                key={form.key("name")}
                {...form.getInputProps("name")}
              />
            </Fieldset>
            <Fieldset legend="Request Information" w={{ base: "100%", sm: "50%" }}>
              <TextInput
                label="Title"
                placeholder="Title of movie/book"
                withAsterisk
                mb="sm"
                maxLength={maxTextInputLength}
                key={form.key("title")}
                {...form.getInputProps("title")}
              />
              <NativeSelect
                label="Type"
                data={Object.values(AllowedMediaType)}
                mb="sm"
                key={form.key("mediaType")}
                {...form.getInputProps("mediaType")}
              />
              <Textarea
                label="Message (optional)"
                placeholder="Any extra info..."
                autosize
                minRows={3}
                maxLength={maxTextAreaLength}
                key={form.key("message")}
                {...form.getInputProps("message")}
              />
            </Fieldset>
          </Flex>

          <Divider my="xl" size="sm" color="rgba(0,0,0,0.1)" />
          <Text color="dimmed" size="sm" mb="md">
            By clicking the submit button, you agree to allow us to store and process
            the information above for contact purposes. Please read our {' '}
            <Anchor href="whereever our privacy policy is going to be" c="blue">
            privacy policy
            </Anchor>{' '}
          </Text>
          <Group justify="center" mt="md">
            <Button
              type="submit"
              w={{ base: "100%", sm: "50%" }}
              loading={form.submitting}
              radius="xl"
            >
              Submit Request
            </Button>
          </Group>
        </form>
      </Card>
    </Flex>
  );
}