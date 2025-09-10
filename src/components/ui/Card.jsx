
export default function Card({ children }) {
  return (
    <div className="group rounded-2xl border shadow-sm hover:shadow-md transition-shadow bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-5">
      {children}
    </div>
  );
}
