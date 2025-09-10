
import SectionTitle from "./ui/SectionTitle";
import Card from "./ui/Card";
import { Braces, Boxes, Server, Database, LockKeyhole } from "lucide-react";
const ICONS = { Languages: Braces, Frameworks: Boxes, Architecture: Server, Databases: Database, Tools: LockKeyhole };
export default function Skills({ skills }) {
  return (
    <section id="skills" className="py-14 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle icon={Braces} title="Skills" subtitle="Core technologies I use to ship reliable backend systems." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(skills).map(([k, list]) => {
            const Icon = ICONS[k] || Boxes;
            return (
              <Card key={k}>
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="h-5 w-5" />
                  <h3 className="font-semibold">{k}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {list.map((s) => <span key={s} className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-sm bg-white/40 dark:bg-black/20">{s}</span>)}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
