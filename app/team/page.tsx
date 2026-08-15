import type { Metadata } from "next";
import { dict, getLang } from "@/lib/i18n";

const TEAM = ["Benson", "William", "Alex", "Mathew", "Daniel"];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLang();
  const t = dict(lang).team;
  return { title: t.metaTitle, description: t.metaDescription };
}

export default async function TeamPage() {
  const lang = await getLang();
  const t = dict(lang).team;

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <span className="text-sm font-bold uppercase tracking-wide text-spark">
        {t.badge}
      </span>
      <h1 className="mt-3 font-display text-4xl font-extrabold text-ink sm:text-5xl">
        {t.title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
        {t.intro}
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM.map((member) => (
          <div
            key={member}
            className="rounded-2xl border border-ink/10 bg-cream-dark/60 p-6 text-center"
          >
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-spark/15 font-display text-xl font-bold text-spark-deep">
              {initials(member)}
            </div>
            <h2 className="mt-4 font-display font-bold text-ink">{member}</h2>
            <p className="text-sm font-semibold text-spark-deep">{t.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
