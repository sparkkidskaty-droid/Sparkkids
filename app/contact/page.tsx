import type { Metadata } from "next";
import Image from "next/image";
import InterestForm from "@/components/InterestForm";
import { dict, getLang } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLang();
  const t = dict(lang).contact;
  return { title: t.metaTitle, description: t.metaDescription };
}

export default async function ContactPage() {
  const lang = await getLang();
  const t = dict(lang).contact;

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <span className="text-sm font-bold uppercase tracking-wide text-spark">
        {t.badge}
      </span>
      <h1 className="mt-3 font-display text-4xl font-extrabold text-ink sm:text-5xl">
        {t.title}
      </h1>
      <p className="mt-6 leading-relaxed text-ink-soft">{t.intro}</p>

      <div className="mt-6 flex items-center gap-5 rounded-2xl border border-ink/10 bg-cream-dark/40 p-5">
        <Image
          src="/brand/wechat-qr.png"
          alt={t.wechatBody}
          width={308}
          height={308}
          className="h-20 w-20 flex-none rounded-lg border border-ink/10 bg-white"
        />
        <div>
          <p className="text-sm font-bold text-ink">{t.wechatTitle}</p>
          <p className="text-sm text-ink-soft">{t.wechatBody}</p>
        </div>
      </div>

      <div className="mt-6 rounded-3xl border border-ink/10 bg-cream-dark/40 p-6 sm:p-8">
        <InterestForm lang={lang} />
      </div>
    </div>
  );
}
