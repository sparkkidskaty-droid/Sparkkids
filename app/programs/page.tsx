import type { Metadata } from "next";
import Link from "next/link";
import { dict, getLang } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLang();
  const t = dict(lang).programs;
  return { title: t.metaTitle, description: t.metaDescription };
}

export default async function ProgramsPage() {
  const lang = await getLang();
  const t = dict(lang).programs;

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

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-ink/10 bg-cream-dark/60 p-5">
          <p className="text-xs font-bold uppercase tracking-wide text-spark">
            {t.dates}
          </p>
          <p className="mt-1 font-display text-lg font-bold text-ink">
            {t.datesValue}
          </p>
        </div>
        <div className="rounded-2xl border border-ink/10 bg-cream-dark/60 p-5">
          <p className="text-xs font-bold uppercase tracking-wide text-spark">
            {t.time}
          </p>
          <p className="mt-1 font-display text-lg font-bold text-ink">
            {t.timeValue}
          </p>
        </div>
        <div className="rounded-2xl border border-ink/10 bg-cream-dark/60 p-5">
          <p className="text-xs font-bold uppercase tracking-wide text-spark">
            {t.fee}
          </p>
          <p className="mt-1 font-display text-lg font-bold text-ink">
            {t.feeValue}
          </p>
        </div>
      </div>

      <h2 className="mt-16 font-display text-2xl font-bold text-ink">
        {t.sportsTitle}
      </h2>
      <p className="mt-3 max-w-2xl text-ink-soft">{t.sportsBody}</p>
      <p className="mt-2 text-sm font-semibold text-ink-soft">
        {t.sportsLocation}
      </p>

      <h2 className="mt-12 font-display text-2xl font-bold text-ink">
        {t.classesTitle}
      </h2>
      <p className="mt-3 max-w-2xl text-ink-soft">{t.classesBody}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {t.classes.map((c, i) => (
          <div
            key={c.title}
            className="rounded-2xl border border-ink/10 bg-cream-dark/60 p-6"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-spark text-sm font-bold text-white">
              {i + 1}
            </span>
            <h3 className="mt-3 font-display font-bold text-ink">{c.title}</h3>
            <p className="text-sm text-ink-soft">{c.sub}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-sm font-semibold text-ink-soft">
        {t.classLocation}
      </p>

      <div className="mt-16 rounded-2xl bg-ink p-8 text-center sm:p-10">
        <p className="font-display text-xl font-bold text-cream">
          {t.joinTitle}
        </p>
        <p className="mt-2 text-cream/70">{t.joinBody}</p>
        <Link
          href="/contact"
          className="mt-5 inline-block rounded-full bg-spark px-7 py-3 font-bold text-white transition-colors hover:bg-spark-deep"
        >
          {t.joinCta}
        </Link>
      </div>
    </div>
  );
}
