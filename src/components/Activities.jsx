import SectionTitle from "./ui/SectionTitle";
import Card from "./ui/Card";
import { Trophy, ExternalLink } from "lucide-react";

export default function Activities({ items }) {
  const list = Array.isArray(items) ? items : [];
  return (
    <section id="activities" className="py-14 scroll-mt-20">
      <SectionTitle
        icon={Trophy}
        title="Competitions & Activities"
        subtitle="Hackathons, competitions, and community involvement"
      />
      <div className="grid md:grid-cols-2 gap-5">
        {list.map((a, i) => (
          <Card key={i}>
            <div className="flex flex-col gap-3">
              {Array.isArray(a.images) && a.images.length > 0 ? (
                a.images.length === 1 ? (
                  <div className="aspect-video w-full overflow-hidden rounded-xl border bg-gray-50 dark:bg-neutral-900">
                    <img src={a.images[0]} alt={a.title} className="h-full w-full object-cover" />
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    {a.images.slice(0, 2).map((src, idx) => (
                      <div key={idx} className="aspect-video w-full overflow-hidden rounded-xl border bg-gray-50 dark:bg-neutral-900">
                        <img src={src} alt={a.title + "-" + idx} className="h-full w-full object-cover" />
                      </div>
                    ))}
                  </div>
                )
              ) : null}
              <h3 className="font-semibold">{a.title}</h3>
              <p className="text-sm text-muted-foreground">
                {a.org} {a.role ? `· ${a.role}` : ""} {a.date ? `· ${a.date}` : ""}
              </p>
              {a.desc ? (
                <p className="text-sm text-muted-foreground mt-1">{a.desc}</p>
              ) : null}
              {a.link ? (
                <a
                  href={a.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm mt-2 rounded-xl border px-3 py-2 hover:bg-gray-50 dark:hover:bg-neutral-800 w-fit"
                >
                  <ExternalLink className="h-4 w-4" /> View Details
                </a>
              ) : null}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
