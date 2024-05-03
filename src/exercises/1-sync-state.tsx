import React from "react";
import { Container } from "../components/Container";
import { Button } from "../components/Button";

export function SyncStatesExercise1() {
  const [count, setCount] = React.useState(0);
  const [isEven, setIsEven] = React.useState(count % 2 === 0);

  React.useEffect(() => {
    setIsEven(count % 2 === 0);
  }, [count]);

  return (
    <Container title="Sync state" nextLink="/exercise/2">
      <p>Count: {count}</p>
      <p>Is even: {isEven.toString()}</p>
      <div className="space-x-2 mt-4">
        <Button onClick={() => setCount((prev) => prev - 1)}>Decrement</Button>
        <Button onClick={() => setCount((prev) => prev + 1)}>Increment</Button>
      </div>
    </Container>
  );
}
