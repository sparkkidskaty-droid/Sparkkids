import type { Metadata } from "next";
import Image from "next/image";
import { dict, getLang } from "@/lib/i18n";

// Row-major order in a 3-column grid.
const PHOTOS = [
  "/gallery/IMG_7450.jpeg",
  "/gallery/IMG_7382.jpeg",
  "/gallery/IMG_7498.jpeg",
  "/gallery/IMG_7518.jpeg",
  "/gallery/IMG_8717-web.jpeg",
  "/gallery/IMG_7535.jpeg",
  "/gallery/IMG_8601.jpeg",
  "/gallery/IMG_7543.jpeg",
  "/gallery/IMG_8602.jpeg",
  "/gallery/IMG_8595-rot.jpeg",
  "/gallery/IMG_8640.jpeg",
  "/gallery/IMG_7449.jpeg",
];

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLang();
  const t = dict(lang).gallery;
  return { title: t.metaTitle, description: t.metaDescription };
}

export default async function GalleryPage() {
  const lang = await getLang();
  const t = dict(lang).gallery;

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <span className="text-sm font-bold uppercase tracking-wide text-spark">
        {t.badge}
      </span>
      <h1 className="mt-3 font-display text-4xl font-extrabold text-ink sm:text-5xl">
        {t.title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
        {t.intro}
      </p>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PHOTOS.map((src) => (
          <div
            key={src}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-ink/10 bg-cream-dark/40"
          >
            <Image
              src={src}
              alt={t.photoAlt}
              fill
              loading="eager"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
