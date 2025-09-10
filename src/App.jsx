import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import ProjectsList from "./components/ProjectsList";
import Internship from "./components/Internship";
import Contact from "./components/Contact";
import ProjectDetail from "./components/ProjectDetail";
import { useHashRoute } from "./components/Router";
import { DATA } from "./data/data";
import React from "react";
function HomePage() {
  return (
    <>
      <Hero
        name={DATA.name}
        role={DATA.role}
        summary={DATA.summary}
        location={DATA.location}
        contacts={DATA.contacts}
      />
      <div className="mx-auto max-w-6xl px-4">
        <Skills skills={DATA.skills} />
      </div>

      <Internship internship={DATA.internship} />
      <ProjectsList projects={DATA.projects} />

      <Contact contacts={DATA.contacts} />
    </>
  );
}
function ProjectsPage() {
  return <ProjectsList projects={DATA.projects} />;
}
function ProjectDetailPage({ slug }) {
  const project = DATA.projects.find((p) => p.slug === slug);
  return <ProjectDetail project={project} />;
}
function NotFoundPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-2xl font-semibold">404</h1>
      <p className="text-sm text-muted-foreground mt-2">Page not found.</p>
      <a
        href="#/"
        className="inline-flex items-center gap-2 mt-4 text-sm hover:underline"
      >
        ← Back home
      </a>
    </div>
  );
}
export default function App() {
  const { match, hash } = useHashRoute();

  function getSectionId(h) {
    if (h === "#/projects") return "projects";
    if (h === "#/skills") return "skills";
    if (h === "#/internship") return "internship";
    if (h === "#/contact") return "contact";
    return "";
  }

  const detailMatch = match("#/projects/:slug");
  const isProjectDetail = Boolean(detailMatch);
  const sectionId = getSectionId(hash);

  const page = isProjectDetail ? (
    <ProjectDetailPage slug={detailMatch.slug} />
  ) : (
    <HomePage />
  );

  React.useEffect(() => {
    if (isProjectDetail) return; // do not scroll on detail page
    if (!sectionId) return;
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash, isProjectDetail, sectionId]);
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-neutral-950 dark:text-neutral-100">
      <Header name={DATA.name} role={DATA.role} contacts={DATA.contacts} />
      <main>{page}</main>
      <footer className="border-t py-8 text-sm text-center text-muted-foreground">
        <div className="mx-auto max-w-6xl px-4">
          wongsakron — {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
}
