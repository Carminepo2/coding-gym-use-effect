import { Link } from "react-router-dom";

export function Container({
  children,
  title,
  nextLink,
}: {
  children: React.ReactNode;
  title: string;
  nextLink?: string;
}) {
  return (
    <main className="h-screen w-full flex items-center justify-center bg-slate-50">
      <div className="min-w-96">
        <h1 className="text-xs text-slate-400 ml-2 mb-1">{title}</h1>
        <div className="bg-white p-5 rounded-xl">{children}</div>
        {nextLink && (
          <div className="flex text-xs items-end justify-end">
            <Link to={nextLink} className="text-slate-400 mr-2 mt-1">
              Next
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
