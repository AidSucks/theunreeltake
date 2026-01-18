"use client";

import {useForm} from "@mantine/form";
import {zod4Resolver} from "mantine-form-zod-resolver";
import {ChangePasswordForm, ChangePasswordSchema} from "@/lib/schemas";
import {authClient} from "@/lib/auth-client";
import {useState} from "react";
import {Box, Button, Group, PasswordInput, Stack, Text, Title} from "@mantine/core";

export function ChangePassword() {

  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const changePasswordForm = useForm({
    mode: "uncontrolled",
    initialValues: {
      currentPassword: "",
      newPassword: ""
    },
    validate: zod4Resolver(ChangePasswordSchema)
  });

  const handleChangePassword = async (formData: ChangePasswordForm) => {

    const { error } = await authClient.changePassword({...formData, revokeOtherSessions: true });

    if(error)
      setErrorMessage(error.message ?? "An Unknown Error Occurred");
    else
      setSuccess(true);
  }

  if(success) return (
    <Text size={"xl"}>Password Successfully Changed!</Text>
  );

  return (
    <Box maw={300} p={"lg"}>

      <Title order={3} mb={"sm"}>Change Your Password</Title>

      {errorMessage ? <Text c={"red"}>{errorMessage}</Text> : null }

      <form onSubmit={changePasswordForm.onSubmit(handleChangePassword)}>

        <Stack gap={"xs"}>
          <PasswordInput
            label={"Current Password"}
            key={"currentPassword"}
            {...changePasswordForm.getInputProps("currentPassword")}
          />

          <PasswordInput
            label={"New Password"}
            key={"newPassword"}
            {...changePasswordForm.getInputProps("newPassword")}
          />

          <Group justify={"center"}>
            <Button type={"submit"} w={"50%"} loading={changePasswordForm.submitting}>
              Submit
            </Button>
          </Group>
        </Stack>

      </form>
    </Box>
  );

}