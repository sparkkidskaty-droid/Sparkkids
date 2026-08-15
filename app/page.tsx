import Link from "next/link";
import { dict, getLang } from "@/lib/i18n";

export default async function Home() {
  const lang = await getLang();
  const t = dict(lang).home;

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-court/30 px-4 py-1.5 text-sm font-bold text-court-deep">
              {t.badge}
            </span>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-ink sm:text-6xl">
              {t.titleBefore}
              <span className="text-spark">{t.titleSports}</span>
              {t.titleAnd}
              <span className="text-spark">{t.titleLearning}</span>
              {t.titleAfter}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              {t.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-spark px-7 py-3.5 font-bold text-white shadow-sm transition-colors hover:bg-spark-deep"
              >
                {t.signup}
              </Link>
              <Link
                href="/get-involved"
                className="rounded-full border-2 border-ink/15 px-7 py-3.5 font-bold text-ink transition-colors hover:border-ink/30"
              >
                {t.support}
              </Link>
            </div>
          </div>
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute -right-4 top-40 h-24 w-24 animate-float-slow rounded-full border-8 border-spark/30"
        />
      </section>

      {/* Problem */}
      <section className="border-y border-ink/10 bg-cream-dark">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-3xl font-extrabold text-ink">
            {t.whyTitle}
          </h2>
          <p className="mt-3 max-w-2xl text-ink-soft">{t.whyIntro}</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {t.problems.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-ink/10 bg-cream p-6"
              >
                <h3 className="font-display text-lg font-bold text-ink">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-ink-soft">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-3xl font-extrabold text-ink">
          {t.goalsTitle}
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {t.goals.map((goal) => (
            <li
              key={goal}
              className="flex items-start gap-3 rounded-2xl bg-court/15 p-5"
            >
              <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-court-deep text-xs font-bold text-white">
                &#10003;
              </span>
              <span className="text-sm font-medium text-ink">{goal}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* How a camp day works */}
      <section className="border-t border-ink/10 bg-ink">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-3xl font-extrabold text-cream">
            {t.dayTitle}
          </h2>
          <p className="mt-3 max-w-2xl text-cream/70">{t.dayIntro}</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {t.schedule.map((step) => (
              <div
                key={step.title}
                className="rounded-2xl border border-cream/15 p-6"
              >
                <span className="text-xs font-bold uppercase tracking-wide text-spark">
                  {step.time}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold text-cream">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-cream/70">{step.body}</p>
              </div>
            ))}
          </div>
          <Link
            href="/programs"
            className="mt-8 inline-block font-bold text-spark hover:text-spark/80"
          >
            {t.seePrograms} &rarr;
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <h2 className="font-display text-3xl font-extrabold text-ink">
          {t.ctaTitle}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-ink-soft">{t.ctaBody}</p>
        <Link
          href="/get-involved"
          className="mt-8 inline-block rounded-full bg-spark px-8 py-3.5 font-bold text-white shadow-sm transition-colors hover:bg-spark-deep"
        >
          {t.ctaButton}
        </Link>
      </section>
    </div>
  );
}
