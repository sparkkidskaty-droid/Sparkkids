import type { Metadata } from "next";
import InterestForm from "@/components/InterestForm";

export const metadata: Metadata = {
  title: "Contact | Spark Kids",
  description:
    "Sign your kid up for a camp, ask about financial assistance, or get in touch with Spark Kids.",
};

// Placeholder — swap in the real WeChat ID before launch.
const WECHAT_ID = "spark-kids-wechat";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <span className="text-sm font-bold uppercase tracking-wide text-spark">
        Get in touch
      </span>
      <h1 className="mt-3 font-display text-4xl font-extrabold text-ink sm:text-5xl">
        Sign up or say hello.
      </h1>
      <p className="mt-6 leading-relaxed text-ink-soft">
        Fill this out to sign your kid up for a camp, ask about financial
        assistance, volunteer to coach, or just get in touch. We read every
        submission and follow up by email.
      </p>

      <div className="mt-6 flex items-center gap-4 rounded-2xl border border-ink/10 bg-cream-dark/40 p-5">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
          className="h-8 w-8 flex-none text-court-deep"
        >
          <path d="M8.5 3.5c-4.4 0-8 2.9-8 6.6 0 2.1 1.2 4 3.1 5.3l-.8 2.4 2.8-1.4c.9.2 1.9.4 2.9.4h.2c-.2-.6-.3-1.2-.3-1.9 0-3.6 3.4-6.5 7.6-6.5h.2C15.6 5.5 12.4 3.5 8.5 3.5Zm-2.7 3.9a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm5.4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
          <path d="M16.3 10.4c-3.6 0-6.5 2.4-6.5 5.4s2.9 5.4 6.5 5.4c.8 0 1.5-.1 2.2-.3l2.3 1.2-.6-2c1.6-1.1 2.6-2.6 2.6-4.3 0-3-2.9-5.4-6.5-5.4Zm-2.3 3.1a.85.85 0 1 1 0 1.7.85.85 0 0 1 0-1.7Zm4.6 0a.85.85 0 1 1 0 1.7.85.85 0 0 1 0-1.7Z" />
        </svg>
        <div>
          <p className="text-sm font-bold text-ink">Prefer WeChat?</p>
          <p className="text-sm text-ink-soft">
            Add us at{" "}
            <span className="font-mono font-semibold text-ink">
              {WECHAT_ID}
            </span>
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-3xl border border-ink/10 bg-cream-dark/40 p-6 sm:p-8">
        <InterestForm />
      </div>
    </div>
  );
}
