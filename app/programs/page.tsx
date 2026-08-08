import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programs | Spark Kids",
  description: "Tennis and running camps from Spark Kids.",
};

const PROGRAMS = [
  {
    name: "Tennis Camp",
    color: "spark",
    blurb:
      "Hands-on court time every morning — footwork, strokes, rallies, and mini matches, coached in small groups.",
    includes: [
      "Small-group coaching, all skill levels welcome",
      "Loaner rackets and balls for kids who need them",
      "Friendly mini-matches to build real match experience",
    ],
  },
  {
    name: "Running Camp",
    color: "sky",
    blurb:
      "Fun, coached running sessions focused on building endurance, form, and confidence at a kid's own pace.",
    includes: [
      "Age-appropriate distances and pacing",
      "Games and drills that make running fun, not a chore",
      "Loaner shoes for kids who need them",
    ],
  },
];

export default function ProgramsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <span className="text-sm font-bold uppercase tracking-wide text-spark">
        What we offer
      </span>
      <h1 className="mt-3 font-display text-4xl font-extrabold text-ink sm:text-5xl">
        Camps built to get kids moving.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
        We currently run two camps. Both are designed as a low-cost first
        step into a sport — no prior experience required.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {PROGRAMS.map((program) => (
          <div
            key={program.name}
            className="rounded-3xl border border-ink/10 bg-cream-dark/60 p-8"
          >
            <h2 className="font-display text-2xl font-extrabold text-ink">
              {program.name}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              {program.blurb}
            </p>
            <ul className="mt-5 space-y-2">
              {program.includes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-ink"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-ink/40" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-dashed border-ink/20 bg-cream p-5 text-sm text-ink-soft">
        Ages, dates, and pricing for the next session go here once they&apos;re
        set — this section is a placeholder ready for that info.
      </div>

      <h2 className="mt-16 font-display text-2xl font-bold text-ink">
        A typical camp day
      </h2>
      <ol className="mt-6 space-y-6 border-l-2 border-ink/10 pl-6">
        <li>
          <span className="text-xs font-bold uppercase tracking-wide text-spark">
            Morning
          </span>
          <h3 className="font-display font-bold text-ink">
            Tennis on the court
          </h3>
          <p className="mt-1 text-sm text-ink-soft">
            Campers start the day with coached tennis instruction and
            games.
          </p>
        </li>
        <li>
          <span className="text-xs font-bold uppercase tracking-wide text-spark">
            Midday
          </span>
          <h3 className="font-display font-bold text-ink">
            Drive to the classroom
          </h3>
          <p className="mt-1 text-sm text-ink-soft">
            We drive campers to our classroom space for coached activities
            and skill-building lessons.
          </p>
        </li>
        <li>
          <span className="text-xs font-bold uppercase tracking-wide text-spark">
            ~12:30 PM
          </span>
          <h3 className="font-display font-bold text-ink">Pickup</h3>
          <p className="mt-1 text-sm text-ink-soft">
            Camp wraps up and kids are ready for pickup.
          </p>
        </li>
      </ol>

      <div className="mt-16 rounded-2xl bg-ink p-8 text-center sm:p-10">
        <p className="font-display text-xl font-bold text-cream">
          Want your kid to join the next camp?
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
