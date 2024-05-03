export function Button({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="py-1 px-4 bg-slate-200 rounded-md hover:bg-slate-300 text-slate-700"
      {...props}
    >
      {children}
    </button>
  );
}
