import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gallery | Spark Kids",
  description: "Photos from Spark Kids camps.",
};

// Row-major order in a 3-column grid:
//   [ 1 ][ 2 ][ 3 ]
//   [ 4 ][ 5 ][ 6 ]
//   [ 7 ][ 8 ][ 9 ]
//   [10 ][11 ][12 ]
const PHOTOS = [
  { src: "/gallery/IMG_7450.jpeg", alt: "Spark Kids classroom, June 29" },
  { src: "/gallery/IMG_7382.jpeg", alt: "Spark Kids camp, June 29" },
  { src: "/gallery/IMG_7498.jpeg", alt: "Spark Kids camp, July 1" },
  { src: "/gallery/IMG_7518.jpeg", alt: "Spark Kids camp, July 2" },
  { src: "/gallery/IMG_8717-web.jpeg", alt: "Spark Kids camp, August 11" },
  { src: "/gallery/IMG_7535.jpeg", alt: "Spark Kids classroom, July 2" },
  { src: "/gallery/IMG_8601.jpeg", alt: "Spark Kids classroom, August 8" },
  { src: "/gallery/IMG_7543.jpeg", alt: "Spark Kids camp, July 3" },
  { src: "/gallery/IMG_8602.jpeg", alt: "Spark Kids group, August 8" },
  { src: "/gallery/IMG_8595-rot.jpeg", alt: "Spark Kids camp, August 8" },
  { src: "/gallery/IMG_8640.jpeg", alt: "Spark Kids camp, August 9" },
  { src: "/gallery/IMG_7449.jpeg", alt: "Spark Kids classroom, June 29" },
];

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
        A few of our favorite moments from camp days — on the court and in the
        classroom.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PHOTOS.map((photo) => (
          <div
            key={photo.src}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-ink/10 bg-cream-dark/40"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
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
