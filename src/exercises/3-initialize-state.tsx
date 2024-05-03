import React from "react";
import { Container } from "../components/Container";
import { TextInput } from "../components/TextInput";

export function InitializeStateValueExercise3() {
  const [input, setInput] = React.useState("");

  React.useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const value = searchParams.get("value");
    if (value) {
      setInput(value);
    }
  }, []);

  React.useEffect(() => {
    window.history.replaceState({}, "", `?value=${input}`);
  }, [input]);

  return (
    <Container title="Initialize state value" nextLink="/exercise/4">
      <TextInput
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
    </Container>
  );
}
