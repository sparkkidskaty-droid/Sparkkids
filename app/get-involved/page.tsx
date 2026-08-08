import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get Involved | Spark Kids",
  description:
    "Donate, sponsor a camper, or volunteer to coach with Spark Kids.",
};

const WAYS_TO_HELP = [
  {
    title: "Donate to the equipment & materials fund",
    body: "Your gift buys shoes, rackets, and class supplies so no kid has to sit out because of gear or materials they don't have.",
    cta: "Donate",
  },
  {
    title: "Sponsor a camper",
    body: "Cover the cost of a camp spot for a kid whose family couldn't otherwise afford it.",
    cta: "Sponsor a spot",
  },
  {
    title: "Volunteer to coach or teach",
    body: "Have tennis, running, or classroom teaching experience? We're always looking for volunteers on camp days — on the court or in the classroom.",
    cta: "Ask about volunteering",
  },
];

export default function GetInvolvedPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <span className="text-sm font-bold uppercase tracking-wide text-spark">
        Get involved
      </span>
      <h1 className="mt-3 font-display text-4xl font-extrabold text-ink sm:text-5xl">
        Help us reach more kids.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
        Spark Kids runs on donations and volunteer coaches and teachers.
        Every bit of support goes toward lowering the cost of camp and
        putting real gear and class materials in kids&apos; hands.
      </p>

      <div className="mt-12 space-y-5">
        {WAYS_TO_HELP.map((way) => (
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
        Online payment (e.g. a donate button linked to PayPal, Venmo, or a
        giving platform) isn&apos;t wired up yet — for now, donation and
        sponsorship inquiries route through the contact form below.
      </div>

      <p className="mt-8 text-center text-ink-soft">
        Prefer to reach out directly?{" "}
        <Link href="/contact" className="font-bold text-spark">
          Contact us
        </Link>
      </p>
    </div>
  );
}
