
import SectionTitle from "./ui/SectionTitle";
import Card from "./ui/Card";
import { Boxes, ChevronRight } from "lucide-react";
export default function Internship({ internship }) {
  const { title, period, summary, bullets, tech } = internship;
  return (
    <section id="internship" className="py-14 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle icon={Boxes} title="Internship" subtitle="Real-world experience that shaped my engineering approach." />
        <Card>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h3 className="text-lg font-semibold">{title}</h3>
              <span className="text-sm text-muted-foreground">{period}</span>
            </div>
            <p className="text-sm text-muted-foreground">{summary}</p>
            <ul className="mt-2 text-sm space-y-2">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex flex-wrap gap-2">
              {tech.map((t) => <span key={t} className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-sm bg-white/40 dark:bg-black/20">{t}</span>)}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
