import Link from "next/link";
import Image from "next/image";
import { dict, getLang } from "@/lib/i18n";

export default async function Footer() {
  const lang = await getLang();
  const t = dict(lang);

  return (
    <footer className="border-t border-ink/10 bg-cream-dark">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Image
            src="/brand/spark_kids_horizontal.png"
            alt="Spark Kids"
            width={2562}
            height={636}
            className="h-7 w-auto"
          />
          <p className="mt-3 max-w-xs text-sm text-ink-soft">{t.footer.tagline}</p>
        </div>

        <div className="flex gap-12 text-sm">
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-ink">{t.footer.explore}</span>
            <Link href="/about" className="text-ink-soft hover:text-ink">
              {t.nav.about}
            </Link>
            <Link href="/team" className="text-ink-soft hover:text-ink">
              {t.nav.team}
            </Link>
            <Link href="/programs" className="text-ink-soft hover:text-ink">
              {t.nav.programs}
            </Link>
            <Link href="/gallery" className="text-ink-soft hover:text-ink">
              {t.nav.gallery}
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-ink">{t.footer.getInvolved}</span>
            <Link
              href="/get-involved"
              className="text-ink-soft hover:text-ink"
            >
              {t.footer.donate}
            </Link>
            <Link href="/contact" className="text-ink-soft hover:text-ink">
              {t.footer.contact}
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-ink/10 px-6 py-4 text-center text-xs text-ink-soft">
        &copy; {new Date().getFullYear()} {t.footer.copyright}
      </div>
    </footer>
  );
}
