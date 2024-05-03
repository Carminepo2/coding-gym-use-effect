export function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="text"
      className="py-1 px-2 border border-slate-200 rounded-md w-full"
      {...props}
    />
  );
}
