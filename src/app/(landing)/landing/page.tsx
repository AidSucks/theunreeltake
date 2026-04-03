"use client";

import {
  ActionIcon,
  Button,
  Center,
  Container,
  Stack, Text,
  TextInput,
  Title, Tooltip
} from "@mantine/core";

import {useForm} from "@mantine/form";
import {useState} from "react";
import Link from "next/link";
import {XCircle} from "react-bootstrap-icons";
import {createTriviaCookie} from "@/lib/actions";

const MAX_ATTEMPTS = 3;

// TODO Query Database
const TEST_QUESTION = "What film won best picture in 2020?";
const TEST_ANSWER = "Parasite";

export default function LandingPage() {

  const [attempts, setAttempts] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = async (formData: typeof triviaForm.values) => {

    const userAnswer = formData.answer.trim().toLowerCase();
    const answer = TEST_ANSWER.trim().toLowerCase();

    if(userAnswer === answer) {
      setIsCorrect(true);
      await createTriviaCookie();
      return;
    }

    triviaForm.reset();
    setAttempts(attempts + 1);

    if((attempts + 1) >= MAX_ATTEMPTS)
      await createTriviaCookie();
  }

  const triviaForm = useForm({
    mode: "controlled",
    initialValues: {
      answer: ""
    },
    validate: {
      answer: (value) =>
        (value.length < 3 || value.length > 128) ? "Your answer must be between 3 & 128 characters" : null
    }
  });

  if(attempts >= MAX_ATTEMPTS || isCorrect) {

    return (
      <Container>

        <Center mih={"100vh"}>

          <Stack>

            <Text>
              {isCorrect ? "Correct! You got it!" : "Thanks for trying!"}
            </Text>

            <Link href={"/"}>Click Here to go to Home</Link>

          </Stack>

        </Center>

      </Container>
    );
  }

  return (
    <Container>

      <Center mih={"100vh"}>

        <Stack>

          <Title ta={"center"}>{TEST_QUESTION}</Title>

          <form onSubmit={triviaForm.onSubmit(handleSubmit)}>

            <Stack align={"center"}>

              <TextInput
                label={`You have ${MAX_ATTEMPTS - attempts} guesses left`}
                placeholder={"Your Answer"}
                w={"100%"}
                rightSection={
                  triviaForm.values.answer !== "" ?
                    <Tooltip label={"Clear answer"}><ActionIcon variant={"transparent"} onClick={triviaForm.reset}><XCircle/></ActionIcon></Tooltip>
                    : null
                }
                {...triviaForm.getInputProps("answer")}
              />

              <Button w={"50%"} type={"submit"} loading={triviaForm.submitting}>
                Guess
              </Button>

            </Stack>

          </form>

        </Stack>

      </Center>

    </Container>
  );
}