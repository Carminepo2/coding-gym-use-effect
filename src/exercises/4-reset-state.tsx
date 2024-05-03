import React from "react";
import { Container } from "../components/Container";
import { TextInput } from "../components/TextInput";

type Post = { id: number; title: string; content: string };

const posts: Array<Post> = [
  { id: 1, title: "Post 1", content: "Hello, world!" },
  { id: 2, title: "Post 2", content: "This is a post." },
  { id: 3, title: "Post 3", content: "This is another post." },
];

export function ResetStateExercise4() {
  const [selectedPostId, setSelectedPostId] = React.useState<number | null>(
    null
  );

  return (
    <Container title="Reset state" nextLink="/exercise/5">
      <div>
        <h2 className="text-lg font-medium mb-2">Posts:</h2>
        <ul className="space-y-2">
          {posts.map((post) => (
            <li key={post.id}>
              <button
                className="px-4 py-1 bg-slate-100 rounded-xl hover:bg-slate-200 w-full"
                onClick={() => setSelectedPostId(post.id)}
              >
                Show {post.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Post key={selectedPostId} postId={selectedPostId} />
    </Container>
  );
}

function Post({ postId }: { postId: number | null }) {
  const [comment, setComment] = React.useState<string>();

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return null;
  }

  return (
    <>
      <hr className="my-4" />
      <div>
        <h3>title: {post.title}</h3>
        <p>content: {post.content}</p>
        <form className="mt-4">
          <label htmlFor="comment">comment:</label>
          <TextInput
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </form>
      </div>
    </>
  );
}
