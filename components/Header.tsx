import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/gallery", label: "Gallery" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
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
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-cream/70 transition-colors hover:text-cream"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/get-involved"
          className="rounded-full bg-spark px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-spark-deep"
        >
          Donate
        </Link>
      </div>

      <nav className="flex items-center gap-5 overflow-x-auto border-t border-cream/10 px-6 py-2 md:hidden">
        {NAV_LINKS.map((link) => (
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
