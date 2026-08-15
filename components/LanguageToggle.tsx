"use client";

import { useRouter } from "next/navigation";
import type { Lang } from "@/lib/i18n";

export default function LanguageToggle({ lang }: { lang: Lang }) {
  const router = useRouter();
  const next = lang === "en" ? "zh" : "en";
  const label = lang === "en" ? "中文" : "EN";

  return (
    <button
      type="button"
      aria-label="Switch language"
      onClick={() => {
        document.cookie = `lang=${next}; path=/; max-age=31536000; samesite=lax`;
        router.refresh();
      }}
      className="rounded-full border border-cream/25 px-4 py-2 text-sm font-bold text-cream transition-colors hover:border-cream/60 hover:text-white"
    >
      {label}
    </button>
  );
}
