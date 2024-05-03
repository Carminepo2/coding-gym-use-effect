import { Container } from "./components/Container";
import { Link } from "react-router-dom";

type LinkItem = { label: string; to: string };

const examples: Array<LinkItem> = [
  { label: "Browser api", to: "/example/1" },
  { label: "External System", to: "/example/2" },
  { label: "External Store", to: "/example/3" },
  { label: "Analytics", to: "/example/4" },
];

const exercises: Array<LinkItem> = [
  { label: "Sync States", to: "/exercise/1" },
  { label: "Expensive Calculations", to: "/exercise/2" },
  { label: "Initialize State Value", to: "/exercise/3" },
  { label: "Reset State", to: "/exercise/4" },
  { label: "Subscribe External Store", to: "/exercise/5" },
];

export function HomePage() {
  return (
    <Container title="Home">
      <div className=" space-y-4">
        <LinkList title="Examples" links={examples} />
        <LinkList title="Exercises" links={exercises} />
      </div>
    </Container>
  );
}

// Componente ListItem
const LinkItem = ({ label, to }: LinkItem) => (
  <li>
    <Link className="text-blue-500 hover:underline" to={to}>
      {label}
    </Link>
  </li>
);

// Componente List
const LinkList = ({
  title,
  links,
}: {
  title: string;
  links: Array<LinkItem>;
}) => (
  <div>
    <h2 className="text-lg">{title}</h2>
    <ul className="list-decimal ml-8">
      {links.map((link) => (
        <LinkItem key={link.label} {...link} />
      ))}
    </ul>
  </div>
);
