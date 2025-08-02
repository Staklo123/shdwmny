
export function Button({ children, className }) {
  return <button className={`rounded-xl px-4 py-2 text-white ${className}`}>{children}</button>;
}
