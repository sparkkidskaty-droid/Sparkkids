import Link from "next/link";
import Image from "next/image";
import { dict, getLang } from "@/lib/i18n";
import LanguageToggle from "./LanguageToggle";

export default async function Header() {
  const lang = await getLang();
  const t = dict(lang);

  const navLinks = [
    { href: "/about", label: t.nav.about },
    { href: "/team", label: t.nav.team },
    { href: "/programs", label: t.nav.programs },
    { href: "/gallery", label: t.nav.gallery },
    { href: "/get-involved", label: t.nav.getInvolved },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 bg-ink">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/brand/spark_kids_horizontal_white.png"
            alt="Spark Kids"
            width={2562}
            height={636}
            priority
            className="h-8 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-cream/70 transition-colors hover:text-cream"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageToggle lang={lang} />
          <Link
            href="/get-involved"
            className="rounded-full bg-spark px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-spark-deep"
          >
            {t.nav.donate}
          </Link>
        </div>
      </div>

      <nav className="flex items-center gap-5 overflow-x-auto border-t border-cream/10 px-6 py-2 md:hidden">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="whitespace-nowrap text-sm font-semibold text-cream/70"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
