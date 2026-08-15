import type { Metadata } from "next";
import Link from "next/link";
import { dict, getLang } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLang();
  const t = dict(lang).getInvolved;
  return { title: t.metaTitle, description: t.metaDescription };
}

export default async function GetInvolvedPage() {
  const lang = await getLang();
  const t = dict(lang).getInvolved;

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <span className="text-sm font-bold uppercase tracking-wide text-spark">
        {t.badge}
      </span>
      <h1 className="mt-3 font-display text-4xl font-extrabold text-ink sm:text-5xl">
        {t.title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
        {t.intro}
      </p>

      <div className="mt-12 space-y-5">
        {t.ways.map((way) => (
          <div
            key={way.title}
            className="flex flex-col gap-4 rounded-2xl border border-ink/10 bg-cream-dark/60 p-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <h2 className="font-display text-lg font-bold text-ink">
                {way.title}
              </h2>
              <p className="mt-1 text-sm text-ink-soft">{way.body}</p>
            </div>
            <Link
              href="/contact"
              className="whitespace-nowrap rounded-full bg-spark px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-spark-deep"
            >
              {way.cta}
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-dashed border-ink/20 bg-cream p-5 text-sm text-ink-soft">
        {t.note}
      </div>

      <p className="mt-8 text-center text-ink-soft">
        {t.contactLine}{" "}
        <Link href="/contact" className="font-bold text-spark">
          {t.contactCta}
        </Link>
      </p>
    </div>
  );
}
