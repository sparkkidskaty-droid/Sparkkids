import type { Metadata } from "next";
import Image from "next/image";
import InterestForm from "@/components/InterestForm";

export const metadata: Metadata = {
  title: "Contact | Spark Kids",
  description: "Sign your kid up for a camp or get in touch with Spark Kids.",
};

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
        Fill this out to sign your kid up for a camp, volunteer to coach, or
        just get in touch. We read every submission and follow up by email.
      </p>

      <div className="mt-6 flex items-center gap-5 rounded-2xl border border-ink/10 bg-cream-dark/40 p-5">
        <Image
          src="/brand/wechat-qr.png"
          alt="Scan to join the Spark Kids WeChat group"
          width={308}
          height={308}
          className="h-20 w-20 flex-none rounded-lg border border-ink/10 bg-white"
        />
        <div>
          <p className="text-sm font-bold text-ink">Prefer WeChat?</p>
          <p className="text-sm text-ink-soft">
            Scan to join our WeChat group — 扫码加入微信群
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-3xl border border-ink/10 bg-cream-dark/40 p-6 sm:p-8">
        <InterestForm />
      </div>
    </div>
  );
}
