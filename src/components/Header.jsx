
import { Github, Linkedin } from "lucide-react";
export default function Header({ name, role, contacts }) {
  return (
    <header className="sticky top-0 z-40 border-b backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-black/20 bg-white/60 dark:bg-black/10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-14 items-center justify-between">
          <a href="#/" className="font-semibold tracking-tight">
            {name.split(" ")[0]} <span className="text-muted-foreground">• {role}</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#/projects" className="hover:underline">Projects</a>
            <a href="#/internship" className="hover:underline">Internship</a>
            <a href="#/skills" className="hover:underline">Skills</a>
            <a href="#/contact" className="hover:underline">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href={contacts.github} target="_blank" rel="noreferrer" className="rounded-xl border px-3 py-1.5 text-sm inline-flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-neutral-800">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href={contacts.linkedin} target="_blank" rel="noreferrer" className="rounded-xl border px-3 py-1.5 text-sm inline-flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-neutral-800">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
