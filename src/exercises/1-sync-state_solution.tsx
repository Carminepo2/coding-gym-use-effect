import React from "react";
import { Container } from "../components/Container";
import { Button } from "../components/Button";

export function SyncStatesExercise1() {
  const [count, setCount] = React.useState(0);

  // Don't use useEffect sync two different states.
  // Derive the information from the state if possible.
  // Before creating a new state think if you can derive the information from the existing state.
  const isEven = count % 2 === 0;

  return (
    <Container title="Sync state" nextLink="/exercise/2">
      <p>Count: {count}</p>
      <p>Is even: {isEven}</p>
      <div className="space-x-2 mt-4">
        <Button onClick={() => setCount((prev) => prev - 1)}>Decrement</Button>
        <Button onClick={() => setCount((prev) => prev + 1)}>Increment</Button>
      </div>
    </Container>
  );
}
