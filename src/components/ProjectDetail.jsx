
import Pill from "./ui/Pill";
import Card from "./ui/Card";
import { ArrowLeft, ChevronRight, Github, ExternalLink } from "lucide-react";

export default function ProjectDetail({ project }) {
  if (!project) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-sm text-muted-foreground">Project not found.</p>
      </div>
    );
  }

  const images = Array.isArray(project.images) ? project.images : [];
  const mainImage = images.length > 0 ? images[0] : "";
  const gridImages = images.length > 1 ? images.slice(1) : [];

  const techList = Array.isArray(project.tech) ? project.tech : [];
  const longDescription = Array.isArray(project.longDescription)
    ? project.longDescription
    : [];
  const highlights = Array.isArray(project.highlights) ? project.highlights : [];
  const hasDemo = project.demo && project.demo !== "#";

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <a
        href="#/projects"
        className="inline-flex items-center gap-2 text-sm mb-6 hover:underline"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Projects
      </a>

      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <div className="aspect-video w-full overflow-hidden rounded-2xl border bg-gray-50 dark:bg-neutral-900">
            {mainImage ? (
              <img
                src={mainImage}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            ) : null}
          </div>

          {gridImages.length > 0 ? (
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              {gridImages.map((src, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-xl border bg-gray-50 dark:bg-neutral-900"
                >
                  <img
                    src={src}
                    alt={project.title + "-" + i}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <div className="lg:col-span-2">
          <h1 className="text-2xl font-semibold">{project.title}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{project.blurb}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {techList.map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-neutral-800"
            >
              <Github className="h-4 w-4" /> Repository
            </a>
            {hasDemo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-neutral-800"
              >
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
            ) : null}
          </div>

          <div className="mt-6 space-y-5">
            {longDescription.map((sec, i) => (
              <div key={i}>
                <h3 className="font-medium">{sec.heading}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {sec.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h3 className="font-medium mb-2">Highlights</h3>
            <ul className="space-y-1 text-sm">
              {highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 mt-0.5" /> {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
