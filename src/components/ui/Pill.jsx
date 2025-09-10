
export default function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-sm bg-white/40 dark:bg-black/20">
      {children}
    </span>
  );
}
