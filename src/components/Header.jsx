import { useState } from "react";
import { Github, Menu, X } from "lucide-react";

export default function Header({ name, role, contacts }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);
  return (
    <header className="sticky top-0 z-40 border-b backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-black/20 bg-white/60 dark:bg-black/10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-14 items-center justify-between">
          <a href="#/" className="font-semibold tracking-tight">
            {name.split(" ")[0]} <span className="text-muted-foreground">— {role}</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#/projects" className="hover:underline">Projects</a>
            <a href="#/internship" className="hover:underline">Internship</a>
            <a href="#/skills" className="hover:underline">Skills</a>
            <a href="#/certificates" className="hover:underline">Certificates</a>
            <a href="#/activities" className="hover:underline">Activities</a>
            <a href="#/contact" className="hover:underline">Contact</a>
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <a
              href={contacts.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border px-3 py-1.5 text-sm inline-flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-neutral-800"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
          <button
            className="md:hidden inline-flex items-center justify-center rounded-xl border px-2.5 py-2 hover:bg-gray-50 dark:hover:bg-neutral-800"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={toggle}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open ? (
          <div className="md:hidden pb-3">
            <nav className="grid gap-1 text-sm mt-2">
              <a onClick={() => setOpen(false)} href="#/projects" className="rounded-lg px-3 py-2 hover:bg-gray-50 dark:hover:bg-neutral-800">Projects</a>
              <a onClick={() => setOpen(false)} href="#/internship" className="rounded-lg px-3 py-2 hover:bg-gray-50 dark:hover:bg-neutral-800">Internship</a>
              <a onClick={() => setOpen(false)} href="#/skills" className="rounded-lg px-3 py-2 hover:bg-gray-50 dark:hover:bg-neutral-800">Skills</a>
              <a onClick={() => setOpen(false)} href="#/certificates" className="rounded-lg px-3 py-2 hover:bg-gray-50 dark:hover:bg-neutral-800">Certificates</a>
              <a onClick={() => setOpen(false)} href="#/activities" className="rounded-lg px-3 py-2 hover:bg-gray-50 dark:hover:bg-neutral-800">Activities</a>
              <a onClick={() => setOpen(false)} href="#/contact" className="rounded-lg px-3 py-2 hover:bg-gray-50 dark:hover:bg-neutral-800">Contact</a>
            </nav>
            <div className="mt-2 flex items-center gap-2">
              <a
                href={contacts.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center rounded-xl border px-3 py-2 text-sm inline-flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-neutral-800"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}

