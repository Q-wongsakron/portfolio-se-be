import SectionTitle from "./ui/SectionTitle";
import Card from "./ui/Card";
import { Award, ExternalLink } from "lucide-react";

export default function Certificates({ items }) {
  const list = Array.isArray(items) ? items : [];
  return (
    <section id="certificates" className="py-14 scroll-mt-20">
      <SectionTitle
        icon={Award}
        title="Certificates"
        subtitle="Selected certifications and courses"
      />
      <div className="grid md:grid-cols-2 gap-5">
        {list.map((c, i) => (
          <Card key={i}>
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold">{c.title}</h3>
              <p className="text-sm text-muted-foreground">
                {c.issuer} {c.date ? `· ${c.date}` : ""}
              </p>
              {c.link ? (
                <a
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm mt-2 rounded-xl border px-3 py-2 hover:bg-gray-50 dark:hover:bg-neutral-800 w-fit"
                >
                  <ExternalLink className="h-4 w-4" /> View Certificate
                </a>
              ) : null}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

