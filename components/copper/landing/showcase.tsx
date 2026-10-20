import Image from "next/image";
import { IMAGE_SIZE, LIFESTYLE } from "@/components/copper/landing/images";
import { getProducts } from "@/lib/copper/catalog";
import { cn } from "@/lib/utils";

export function Showcase() {
  const photos = getProducts().flatMap((product) =>
    product.lifestyle.map((src) => ({ src, product: product.name })),
  );
  return (
    <section
      id="showcase"
      data-testid="showcase"
      className="bg-secondary text-secondary-foreground scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <h2 className="mb-12 text-3xl font-bold sm:text-4xl">
          Made for life under the Arizona sun
        </h2>
        <div className="flex flex-col gap-12 md:gap-16">
          {photos.map((photo, i) => {
            const info = LIFESTYLE[photo.src];
            return (
              <figure
                key={photo.src}
                className="grid items-center gap-6 md:grid-cols-5 md:gap-10"
              >
                <Image
                  src={photo.src}
                  alt={info?.alt ?? `${photo.product} at home in Arizona`}
                  {...IMAGE_SIZE.lifestyle}
                  sizes="(min-width: 768px) 60vw, 100vw"
                  className={cn(
                    "aspect-video h-auto w-full rounded-2xl object-cover shadow-lg md:col-span-3",
                    i % 2 === 1 && "md:order-last",
                  )}
                />
                <figcaption className="md:col-span-2">
                  <p className="text-primary text-sm font-semibold tracking-widest uppercase">
                    {photo.product}
                  </p>
                  <p className="mt-2 text-2xl leading-snug font-semibold">
                    {info?.caption ?? photo.product}
                  </p>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
