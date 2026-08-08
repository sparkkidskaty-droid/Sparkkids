import Link from "next/link";

const PROBLEMS = [
  {
    title: "Classes are expensive",
    body: "Private lessons and club fees put sports out of reach for a lot of families before a kid ever picks up a racket.",
  },
  {
    title: "Kids just want to try it",
    body: "Most kids don't know if they'll love a sport — they shouldn't have to pay full price to find out.",
  },
  {
    title: "Not available everywhere",
    body: "Quality coaching for every age group isn't offered in every neighborhood.",
  },
  {
    title: "Equipment adds up",
    body: "Shoes, rackets, and balls are one more cost on top of registration — and often the reason a kid sits out.",
  },
];

const GOALS = [
  "Run free and low-cost camps so trying a sport never costs a family more than they can afford.",
  "Raise funds to buy equipment — shoes, rackets, and balls — for kids who need it.",
  "Teach real skills that help kids grow into confident young athletes.",
  "Give every kid a chance to compete, no matter their starting skill level.",
];

const SCHEDULE = [
  {
    time: "8:00 – 9:00 AM",
    title: "Tennis & running",
    body: "Campers warm up with jump ropes, then split into groups for tennis and running — swapping sports each day.",
  },
  {
    time: "9:15 AM – 12:00 PM",
    title: "Classes",
    body: "We drive campers to our classroom, where they rotate through Chinese folktales, book club, and science.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-court/30 px-4 py-1.5 text-sm font-bold text-court-deep">
              2 camps hosted and counting
            </span>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-ink sm:text-6xl">
              Every kid deserves a shot at{" "}
              <span className="text-spark">sport</span>.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              Spark Kids runs affordable tennis and running camps so kids can
              try a sport, build real skills, and find out what they love —
              without their family taking on a big cost to find out.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-spark px-7 py-3.5 font-bold text-white shadow-sm transition-colors hover:bg-spark-deep"
              >
                Sign up for a camp
              </Link>
              <Link
                href="/get-involved"
                className="rounded-full border-2 border-ink/15 px-7 py-3.5 font-bold text-ink transition-colors hover:border-ink/30"
              >
                Support the mission
              </Link>
            </div>
          </div>
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 top-10 h-72 w-72 rounded-full bg-court/40 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-4 top-40 h-24 w-24 animate-float-slow rounded-full border-8 border-spark/30"
        />
      </section>

      {/* Problem */}
      <section className="border-y border-ink/10 bg-cream-dark">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-3xl font-extrabold text-ink">
            Why we started Spark Kids
          </h2>
          <p className="mt-3 max-w-2xl text-ink-soft">
            When kids are small, parents want them to try different sports —
            but figuring out what a kid loves shouldn&apos;t cost a fortune.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {PROBLEMS.map((p) => (
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
          What we&apos;re working toward
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {GOALS.map((goal) => (
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
            A day at camp
          </h2>
          <p className="mt-3 max-w-2xl text-cream/70">
            Right now our flagship format pairs tennis with classroom
            learning.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {SCHEDULE.map((step) => (
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
            See full program details &rarr;
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <h2 className="font-display text-3xl font-extrabold text-ink">
          Help us reach more kids
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-ink-soft">
          Every donation goes toward camp scholarships and equipment — shoes,
          rackets, and balls — for kids who need it.
        </p>
        <Link
          href="/get-involved"
          className="mt-8 inline-block rounded-full bg-spark px-8 py-3.5 font-bold text-white shadow-sm transition-colors hover:bg-spark-deep"
        >
          Get involved
        </Link>
      </section>
    </div>
  );
}
