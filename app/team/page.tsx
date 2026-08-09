import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team | Spark Kids",
  description: "Meet the co-founders behind Spark Kids.",
};

const TEAM = [
  { name: "Daniel", role: "Co-Founder" },
  { name: "Benson", role: "Co-Founder" },
  { name: "Mathew", role: "Co-Founder" },
  { name: "Alex", role: "Co-Founder" },
  { name: "William", role: "Co-Founder" },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function TeamPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <span className="text-sm font-bold uppercase tracking-wide text-spark">
        Our team
      </span>
      <h1 className="mt-3 font-display text-4xl font-extrabold text-ink sm:text-5xl">
        The people behind Spark Kids.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
        Five co-founders who coach, teach, and run every camp day together.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM.map((member) => (
          <div
            key={member.name}
            className="rounded-2xl border border-ink/10 bg-cream-dark/60 p-6 text-center"
          >
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-spark/15 font-display text-xl font-bold text-spark-deep">
              {initials(member.name)}
            </div>
            <h2 className="mt-4 font-display font-bold text-ink">
              {member.name}
            </h2>
            <p className="text-sm font-semibold text-spark-deep">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
