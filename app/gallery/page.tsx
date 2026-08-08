import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Spark Kids",
  description: "Photos from Spark Kids camps.",
};

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <span className="text-sm font-bold uppercase tracking-wide text-spark">
        Gallery
      </span>
      <h1 className="mt-3 font-display text-4xl font-extrabold text-ink sm:text-5xl">
        Moments from camp.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
        Photos from our first two camps are coming soon.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="flex aspect-square items-center justify-center rounded-2xl border-2 border-dashed border-ink/15 bg-cream-dark/40 text-sm font-medium text-ink-soft"
          >
            Photo coming soon
          </div>
        ))}
      </div>
    </div>
  );
}
