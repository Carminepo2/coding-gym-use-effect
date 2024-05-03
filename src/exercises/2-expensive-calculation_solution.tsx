import React from "react";
import { Container } from "../components/Container";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";

export function ExpensiveCalculationsExercise2() {
  const [searchInput, setSearchInput] = React.useState("");
  const [filter, setFilter] = React.useState("");

  console.time("getFilteredTodos");

  // If the info to calculate during render is expensive, use useMemo to cache the result.
  // This way, the expensive calculation is only done when the dependency changes.
  const filteredTodos = React.useMemo(() => {
    return getFilteredTodos(filter);
  }, [filter]);

  console.timeEnd("getFilteredTodos");

  return (
    <Container title="Expensive calculations" nextLink="/exercise/3">
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setFilter(searchInput);
          }}
          className="flex space-x-1"
        >
          <TextInput
            placeholder="Search..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <Button type="submit">Filter</Button>
        </form>

        {filteredTodos.length === 0 && (
          <p className="mt-4 text-slate-400 text-sm">No todos found :(</p>
        )}

        {filteredTodos.length > 0 && (
          <ul className="mt-4 space-y-2 list-decimal ml-4">
            {filteredTodos.map((todo) => (
              <li key={todo.id}>{todo.title}</li>
            ))}
          </ul>
        )}
      </div>
    </Container>
  );
}

const todoMockList: Array<{ id: number; title: string }> = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Learn React" },
  { id: 3, title: "Go to the gym" },
  { id: 4, title: "Read a book" },
  { id: 5, title: "Write a blog post" },
  { id: 6, title: "Walk the dog" },
  { id: 7, title: "Cook dinner" },
  { id: 8, title: "Buy groceries" },
  { id: 9, title: "Clean the house" },
  { id: 10, title: "Do laundry" },
  { id: 11, title: "Take out the trash" },
  { id: 12, title: "Water the plants" },
  { id: 13, title: "Mow the lawn" },
  { id: 14, title: "Wash the car" },
  { id: 15, title: "Paint the fence" },
  { id: 16, title: "Fix the roof" },
  { id: 17, title: "Hang the picture" },
  { id: 18, title: "Change the lightbulb" },
  { id: 19, title: "Fix the leak" },
  { id: 20, title: "Install the shelves" },
];

function getFilteredTodos(filter: string) {
  // Mock expensive calculation
  for (let i = 0; i < 10_000_000; i++) {
    Math.random();
  }

  if (filter === "") return todoMockList;

  return todoMockList.filter((todo) =>
    todo.title.toLowerCase().includes(filter.toLowerCase())
  );
}
