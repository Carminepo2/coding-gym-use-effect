import React from "react";
import { Container } from "../components/Container";

export function ExternalStoreExample3() {
  const [store, setStore] = React.useState({});

  React.useEffect(() => {
    const callback = () => {
      setStore({ ...externalStore });
    };
    subscribe(callback);
    return () => unsubscribe(callback);
  }, []);

  return (
    <Container title="Esempio external store" nextLink="/example/4">
      {JSON.stringify(store)}
    </Container>
  );
}

const externalStore: Record<string, string> = {};
const listener: (() => void)[] = [];

// window.addEventListener
function subscribe(callback: () => void) {
  listener.push(callback);
}

// window.removeEventLister
function unsubscribe(callback: () => void) {
  listener.filter((l) => l !== callback);
}

function updateExternalStore(key: string, value: string) {
  externalStore[key] = value;
  listener.forEach((l) => l());
}

window.setInterval(() => {
  updateExternalStore("test", Math.random().toString());
}, 1000);
