"use client";

import {
  Anchor,
  Button,
  Container,
  Group, LoadingOverlay,
  Paper,
  PasswordInput,
  TextInput,
  Title,
  Text, Center
} from '@mantine/core';
import {useForm} from "@mantine/form";
import {zod4Resolver} from "mantine-form-zod-resolver";
import {LoginForm, LoginFormSchema} from "@/lib/schemas";
import {authClient} from "@/lib/auth-client";
import {useState} from "react";
import Link from "next/link";

export function AuthenticationTitle() {

  const [errorMessage, setErrorMessage] = useState("");

  const loginForm = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: ""
    },
    validate: zod4Resolver(LoginFormSchema)
  });

  const handleSignIn = async (formData: LoginForm) => {

    setErrorMessage("");

    const { error } = await authClient.signIn.email({...formData, rememberMe: true, callbackURL: "/dashboard"});

    if(error)
      setErrorMessage(error.message ?? "An unknown error occurred");

  }

  return (
    <Container size={420} my={40}>
      <Title ta="center">
        Welcome back!
      </Title>

      <Paper withBorder shadow="sm" p={22} mt={30} radius={"md"} pos={"relative"}>

        <LoadingOverlay visible={loginForm.submitting} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }}/>

        {errorMessage ? <Text c={"red"}>{errorMessage}</Text> : null }

        <form onSubmit={loginForm.onSubmit(handleSignIn)}>

          <TextInput
            label={"Email"}
            placeholder={"johndoe@example.com"}
            radius={"md"}
            key={"email"}
            {...loginForm.getInputProps("email")}
          />

          <PasswordInput
            label={"Password"}
            placeholder={"Your password"}
            mt={"md"}
            radius={"md"}
            key={"password"}
            {...loginForm.getInputProps("password")}
          />

          <Group justify="space-between" mt="lg">

            <Anchor
              size={"sm"}
              href={"/reset-password"}
            >
              Forgot password?
            </Anchor>

          </Group>

          <Button fullWidth mt={"xl"} radius={"md"} type={"submit"}>
            Sign in
          </Button>

        </form>
      </Paper>

      <Center m={"lg"}>
        <Anchor component={Link} href={"/"}>Back to Home</Anchor>
      </Center>
    </Container>
  );
}