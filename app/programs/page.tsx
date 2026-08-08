import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programs | Spark Kids",
  description:
    "Spark Kids Summer 2026: a week of morning tennis, running, and classes in Katy, Texas.",
};

const CLASSES = [
  {
    title: "Chinese Folktales & Traditions",
    zh: "中国民间故事与传统文化",
  },
  {
    title: "Book Club",
    zh: "读书会",
  },
  {
    title: "Science",
    zh: "科学",
  },
];

export default function ProgramsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <span className="text-sm font-bold uppercase tracking-wide text-spark">
        Summer 2026
      </span>
      <h1 className="mt-3 font-display text-4xl font-extrabold text-ink sm:text-5xl">
        One week of sports, learning, and fun.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
        Every weekday morning, campers start with tennis and running, then
        rotate through classes — no prior experience required in anything.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-ink/10 bg-cream-dark/60 p-5">
          <p className="text-xs font-bold uppercase tracking-wide text-spark">
            Dates
          </p>
          <p className="mt-1 font-display text-lg font-bold text-ink">
            June 29 – July 3
          </p>
        </div>
        <div className="rounded-2xl border border-ink/10 bg-cream-dark/60 p-5">
          <p className="text-xs font-bold uppercase tracking-wide text-spark">
            Time
          </p>
          <p className="mt-1 font-display text-lg font-bold text-ink">
            8:00 AM – 12:00 PM, every weekday
          </p>
        </div>
        <div className="rounded-2xl border border-ink/10 bg-cream-dark/60 p-5">
          <p className="text-xs font-bold uppercase tracking-wide text-spark">
            Material fee
          </p>
          <p className="mt-1 font-display text-lg font-bold text-ink">
            $50 per camper
          </p>
        </div>
      </div>

      <h2 className="mt-16 font-display text-2xl font-bold text-ink">
        Morning sports · 8:00 – 9:00 AM
      </h2>
      <p className="mt-3 max-w-2xl text-ink-soft">
        Campers warm up with jump ropes, then split into two groups — one
        plays tennis, one runs. The groups swap sports each day, so every
        camper gets time in both.
      </p>
      <p className="mt-2 text-sm font-semibold text-ink-soft">
        Sports location: Beck Junior High School
      </p>

      <h2 className="mt-12 font-display text-2xl font-bold text-ink">
        Classes · 9:15 AM – 12:00 PM
      </h2>
      <p className="mt-3 max-w-2xl text-ink-soft">
        After sports, campers rotate through three 45-minute classes, so
        every camper experiences all three by the end of the morning.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {CLASSES.map((c, i) => (
          <div
            key={c.title}
            className="rounded-2xl border border-ink/10 bg-cream-dark/60 p-6"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-spark text-sm font-bold text-white">
              {i + 1}
            </span>
            <h3 className="mt-3 font-display font-bold text-ink">
              {c.title}
            </h3>
            <p className="text-sm text-ink-soft">{c.zh}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-sm font-semibold text-ink-soft">
        Class location: 26717 Westheimer Parkway, Suite 403, Katy, Texas
        77494
      </p>

      <div className="mt-16 rounded-2xl bg-ink p-8 text-center sm:p-10">
        <p className="font-display text-xl font-bold text-cream">
          Want your kid to join?
        </p>
        <p className="mt-2 text-cream/70">
          $50 covers all class supplies and equipment for the week.
        </p>
        <Link
          href="/contact"
          className="mt-5 inline-block rounded-full bg-spark px-7 py-3 font-bold text-white transition-colors hover:bg-spark-deep"
        >
          Sign up now
        </Link>
      </div>
    </div>
  );
}
