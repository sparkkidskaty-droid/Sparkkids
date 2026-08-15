import type { Metadata } from "next";
import { dict, getLang } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLang();
  const t = dict(lang).about;
  return { title: t.metaTitle, description: t.metaDescription };
}

export default async function AboutPage() {
  const lang = await getLang();
  const t = dict(lang).about;

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <span className="text-sm font-bold uppercase tracking-wide text-spark">
        {t.badge}
      </span>
      <h1 className="mt-3 font-display text-4xl font-extrabold text-ink sm:text-5xl">
        {t.title}
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-ink-soft">{t.intro}</p>

      <h2 className="mt-14 font-display text-2xl font-bold text-ink">
        {t.problemTitle}
      </h2>
      <ul className="mt-6 space-y-4">
        {t.problems.map((problem) => (
          <li key={problem} className="flex gap-3 text-ink-soft">
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-spark" />
            {problem}
          </li>
        ))}
      </ul>

      <h2 className="mt-14 font-display text-2xl font-bold text-ink">
        {t.goalsTitle}
      </h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {t.goals.map((goal) => (
          <div
            key={goal.title}
            className="rounded-2xl border border-ink/10 bg-cream-dark/60 p-6"
          >
            <h3 className="font-display font-bold text-ink">{goal.title}</h3>
            <p className="mt-2 text-sm text-ink-soft">{goal.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 rounded-2xl bg-ink p-8 text-center sm:p-10">
        <p className="font-display text-xl font-bold text-cream">{t.banner}</p>
        <p className="mt-2 text-cream/70">{t.bannerSub}</p>
      </div>
    </div>
  );
}
