
import { useState } from "react";
import SectionTitle from "./ui/SectionTitle";
import ProjectCard from "./ProjectCard";
import { Rocket } from "lucide-react";
const TAGS = [
  { key: "all", label: "All" },
  { key: "backend", label: "Backend" },
  { key: "microservices", label: "Microservices" },
  { key: "security", label: "Security" },
  { key: "full-stack", label: "Full‑stack" },
  { key: "data", label: "Data" },
];
export default function ProjectsList({ projects }) {
  const [active, setActive] = useState("all");
  const filtered = active === "all"
    ? projects
    : projects.filter((p) => Array.isArray(p.tags) && p.tags.includes(active));
  return (
    <section id="projects" className="py-14 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle icon={Rocket} title="Projects" subtitle="Selected work: production-minded, tested, and documented." />
        <div className="mb-6 flex flex-wrap gap-2">
          {TAGS.map((t) => (
            <button key={t.key} onClick={() => setActive(t.key)} className={`inline-flex items-center rounded-full border px-4 py-1.5 text-sm transition ${active === t.key ? "bg-black text-white dark:bg-white dark:text-black" : "hover:bg-gray-50 dark:hover:bg-neutral-800"}`}>
              {t.label}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((p) => <ProjectCard key={p.slug} p={p} />)}
        </div>
      </div>
    </section>
  );
}
