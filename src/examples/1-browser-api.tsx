import React from "react";
import { Container } from "../components/Container";

export function BrowserApiExample1() {
  const [hasReachedEnd, setHasReacedEnd] = React.useState<boolean>(false);

  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;

    const callback = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        scrollContainerRef.current!;
      const isAtEnd = scrollTop + clientHeight >= scrollHeight;
      setHasReacedEnd(isAtEnd);
    };

    container.addEventListener("scroll", callback);

    return () => {
      container.removeEventListener("scroll", callback);
    };
  }, []);

  return (
    <Container title="Browser API" nextLink="/example/2">
      <div className="w-60 flex flex-col">
        <div className="mb-4">
          {!hasReachedEnd && <>Scroll more!</>}
          {hasReachedEnd && <>You reached the end!</>}
        </div>
        <div ref={scrollContainerRef} className="h-20 overflow-y-scroll">
          <div className="h-96 bg-red-50 "></div>
        </div>
      </div>
    </Container>
  );
}
