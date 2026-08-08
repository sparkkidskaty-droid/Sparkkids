import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Spark Kids",
  description:
    "Why Spark Kids exists: the cost barrier keeping kids out of sports and enrichment classes, and what we're doing about it.",
};

const PROBLEMS = [
  "Classes are expensive — private lessons, club sports, and enrichment programs price a lot of families out.",
  "Kids just want to try it out. Committing to a season or a subject shouldn't be the only way to find out if it clicks.",
  "Coaching and enrichment classes aren't available everywhere, for every age.",
  "Materials — shoes, rackets, class supplies — are one more cost stacked on top of registration.",
];

const GOALS = [
  {
    title: "Free and low-cost camps",
    body: "We're building a program where trying a sport or a new subject doesn't come with a big price tag attached.",
  },
  {
    title: "An equipment & materials fund",
    body: "Every dollar we raise goes toward gear and class supplies for kids whose families can't cover it.",
  },
  {
    title: "Real skill development",
    body: "This isn't just supervised play. Camps are built around actual coaching and classes that help kids grow — athletically and academically.",
  },
  {
    title: "A fair shot to compete and learn",
    body: "Every camper gets the chance to compete, improve, and discover a new interest, regardless of the skill level they walk in with.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <span className="text-sm font-bold uppercase tracking-wide text-spark">
        Our story
      </span>
      <h1 className="mt-3 font-display text-4xl font-extrabold text-ink sm:text-5xl">
        Trying something new shouldn&apos;t cost a fortune.
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-ink-soft">
        When kids are small, parents want to let them try different sports
        and subjects — tennis, running, science, storytelling, whatever
        catches their interest — before deciding what to stick with. But
        real coaching and enrichment classes are expensive, and most kids
        haven&apos;t even decided what they like before their family has
        already paid full price to find out. We started Spark Kids to close
        that gap.
      </p>

      <h2 className="mt-14 font-display text-2xl font-bold text-ink">
        The problem
      </h2>
      <ul className="mt-6 space-y-4">
        {PROBLEMS.map((problem) => (
          <li key={problem} className="flex gap-3 text-ink-soft">
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-spark" />
            {problem}
          </li>
        ))}
      </ul>

      <h2 className="mt-14 font-display text-2xl font-bold text-ink">
        Our goals
      </h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {GOALS.map((goal) => (
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
        <p className="font-display text-xl font-bold text-cream">
          We&apos;ve already run 2 camps — and we&apos;re just getting started.
        </p>
        <p className="mt-2 text-cream/70">
          Every camp we run teaches us more about how to reach kids who
          wouldn&apos;t otherwise get the chance.
        </p>
      </div>
    </div>
  );
}
