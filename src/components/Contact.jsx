
import SectionTitle from "./ui/SectionTitle";
import Card from "./ui/Card";
import { Mail, Github, Linkedin } from "lucide-react";
export default function Contact({ contacts }) {
  return (
    <section id="contact" className="py-14 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle icon={Mail} title="Contact" subtitle="Open to backend roles, internships, and interesting collaborations." />
        <Card>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="font-semibold">Let’s build something robust.</h3>
              <p className="text-sm text-muted-foreground">Email me or connect on LinkedIn.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={`mailto:${contacts.email}`} className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-neutral-800">
                <Mail className="h-4 w-4" /> {contacts.email}
              </a>
              <a href={contacts.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-neutral-800">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href={contacts.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-neutral-800">
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
