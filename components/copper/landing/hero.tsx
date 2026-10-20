import Image from "next/image";
import { CUTOUT_ALT, IMAGE_SIZE } from "@/components/copper/landing/images";
import { Button } from "@/components/ui/button";
import { getProducts } from "@/lib/copper/catalog";

export function Hero() {
  const [home, notes] = getProducts();
  return (
    <section
      id="top"
      data-testid="hero"
      className="bg-secondary text-secondary-foreground overflow-hidden"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 md:grid-cols-2 md:gap-10 md:py-24">
        <div className="flex flex-col items-start gap-6">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase">
            Copper State Labs
          </p>
          <h1 className="text-4xl leading-tight font-bold text-balance sm:text-5xl lg:text-6xl">
            Smart help for Arizona homes and busy minds.
          </h1>
          <p className="text-xl font-medium sm:text-2xl">
            From raw ideas to refined answers.
          </p>
          <p className="text-muted-foreground max-w-md text-lg">
            Meet {home.name}, the {home.type} for your household, and{" "}
            {notes.name}, the {notes.type} that takes the notes for you.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-11 px-6 text-base">
              <a href="#products">See products</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-11 px-6 text-base"
            >
              <a href="#plus">Compare plans</a>
            </Button>
          </div>
        </div>

        {/* Products first on phones, so they're the first thing you see. */}
        <div className="relative order-first mx-auto w-full max-w-72 sm:max-w-md md:order-none md:max-w-none">
          <Image
            src={home.cutout}
            alt={CUTOUT_ALT[home.cutout] ?? home.name}
            {...IMAGE_SIZE.cutout}
            loading="eager"
            fetchPriority="high"
            sizes="(min-width: 768px) 40vw, 80vw"
            className="h-auto w-[85%] drop-shadow-2xl"
          />
          <Image
            src={notes.cutout}
            alt={CUTOUT_ALT[notes.cutout] ?? notes.name}
            {...IMAGE_SIZE.cutout}
            loading="eager"
            sizes="(min-width: 768px) 20vw, 40vw"
            className="absolute right-0 bottom-0 h-auto w-[42%] drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
