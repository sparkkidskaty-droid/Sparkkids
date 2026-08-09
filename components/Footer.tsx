import Link from "next/link";
import Image from "next/image";

export default function Footer() {
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
          <p className="mt-3 max-w-xs text-sm text-ink-soft">
            A nonprofit giving every kid an affordable first shot at sports
            and learning — no matter their budget or skill level.
          </p>
        </div>

        <div className="flex gap-12 text-sm">
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-ink">Explore</span>
            <Link href="/about" className="text-ink-soft hover:text-ink">
              About
            </Link>
            <Link href="/team" className="text-ink-soft hover:text-ink">
              Team
            </Link>
            <Link href="/programs" className="text-ink-soft hover:text-ink">
              Programs
            </Link>
            <Link href="/gallery" className="text-ink-soft hover:text-ink">
              Gallery
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-ink">Get Involved</span>
            <Link
              href="/get-involved"
              className="text-ink-soft hover:text-ink"
            >
              Donate
            </Link>
            <Link href="/contact" className="text-ink-soft hover:text-ink">
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-ink/10 px-6 py-4 text-center text-xs text-ink-soft">
        &copy; {new Date().getFullYear()} Spark Kids. A registered nonprofit
        organization.
      </div>
    </footer>
  );
}
