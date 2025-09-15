import { Rocket, Mail, Server, ChevronRight } from "lucide-react";
import Card from "./ui/Card";

export default function Hero({ name, role, summary, location, contacts }) {
  return (
    <section className="relative py-16">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-gray-100 dark:to-neutral-900" />
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">{name}</h1>
            <p className="mt-2 text-lg text-muted-foreground">{role} — {location}</p>
            <p className="mt-6 text-base md:text-lg max-w-2xl">{summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#/projects" className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-medium hover:bg-gray-50 dark:hover:bg-neutral-800">
                <Rocket className="h-4 w-4" /> View Projects
              </a>
              <a href={`mailto:${contacts.email}`} className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-medium hover:bg-gray-50 dark:hover:bg-neutral-800">
                <Mail className="h-4 w-4" /> Contact
              </a>
            </div>
          </div>
          <div className="md:col-span-2">
            <Card>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <Server className="h-5 w-5" />
                  <h3 className="font-semibold">What I build</h3>
                </div>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5"/> Clean, testable REST APIs</li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5"/> Microservices with observability</li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5"/> Security-first auth flows</li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5"/> CI/CD pipelines & containers</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

