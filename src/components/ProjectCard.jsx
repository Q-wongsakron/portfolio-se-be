
import Card from "./ui/Card";
import Pill from "./ui/Pill";
import { ChevronRight, Image as ImageIcon, Github, ExternalLink } from "lucide-react";

export default function ProjectCard({ p }) {
  const images = Array.isArray(p.images) ? p.images : [];
  const mainImage = images.length > 0 ? images[0] : "";
  const highlights = Array.isArray(p.highlights) ? p.highlights : [];
  const techList = Array.isArray(p.tech) ? p.tech : [];
  const hasDemo = p.demo && p.demo !== "#";

  return (
    <div>
      <Card>
        <div className="flex flex-col gap-4">
          <div className="aspect-video w-full overflow-hidden rounded-xl border bg-gray-50 dark:bg-neutral-900">
            {mainImage ? (
              <img src={mainImage} alt={p.title} className="h-full w-full object-cover" />
            ) : null}
          </div>

          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.blurb}</p>
            </div>
          </div>

          <ul className="space-y-1 text-sm">
            {highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2">
                <ChevronRight className="h-4 w-4 mt-0.5 shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {techList.map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-1">
            <a
              href={`#/projects/${p.slug}`}
              className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-neutral-800"
            >
              <ImageIcon className="h-4 w-4" /> View Details
            </a>
            <a
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-neutral-800"
            >
              <Github className="h-4 w-4" /> Repo
            </a>
            {hasDemo ? (
              <a
                href={p.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-neutral-800"
              >
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
            ) : null}
          </div>
        </div>
      </Card>
    </div>
  );
}
