import React from "react";
import { Container } from "../components/Container";
import { TextInput } from "../components/TextInput";

export function InitializeStateValueExercise3() {
  // You can use a function to initialize the state value,
  // this function will be called only once when the component is mounted.
  const [input, setInput] = React.useState(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const value = searchParams.get("value");
    return value ?? "";
  });

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
