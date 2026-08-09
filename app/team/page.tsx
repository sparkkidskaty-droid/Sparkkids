import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team | Spark Kids",
  description: "Meet the people behind Spark Kids.",
};

// Placeholder roster — swap in real names, roles, bios, and photos.
const TEAM = [
  {
    name: "Your Name Here",
    role: "Founder & Head Coach",
    bio: "A sentence or two on their background and why they started Spark Kids.",
  },
  {
    name: "Coach Name",
    role: "Program Director",
    bio: "A sentence or two on what they run day-to-day.",
  },
  {
    name: "Teacher Name",
    role: "Classroom Lead",
    bio: "A sentence or two on the classes they teach.",
  },
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
        Coaches, teachers, and volunteers who show up every camp day to make
        sports and learning affordable for local kids.
      </p>

      <div className="mt-6 rounded-2xl border border-dashed border-ink/20 bg-cream-dark/40 p-5 text-sm text-ink-soft">
        This roster is a placeholder — swap in real names, roles, bios, and
        photos in the <span className="font-mono">TEAM</span> array in{" "}
        <span className="font-mono">app/team/page.tsx</span>.
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
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
            <p className="mt-2 text-sm text-ink-soft">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
