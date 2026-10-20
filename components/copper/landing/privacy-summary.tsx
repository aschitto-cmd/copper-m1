import Image from "next/image";
import { IMAGE_SIZE } from "@/components/copper/landing/images";
import { getPrivacySummary } from "@/lib/copper/catalog";

export function PrivacySummary() {
  const privacy = getPrivacySummary();
  return (
    <section
      id="privacy"
      data-testid="privacy-summary"
      className="bg-accent text-accent-foreground scroll-mt-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-3 md:py-24">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold sm:text-4xl">
            How Copper handles your recordings
          </h2>
          <p className="mt-3 text-lg">
            Plain answers, from our {privacy.policy} privacy policy.
          </p>
          <ul className="mt-8 flex flex-col gap-4">
            {privacy.points.map((point) => (
              <li
                key={point}
                className="bg-background/15 rounded-xl px-5 py-4 text-lg leading-relaxed"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src="/assets/brand/copper-mascot.png"
          alt="The Copper robot mascot in a yellow hard hat, waving and holding a checklist"
          {...IMAGE_SIZE.cutout}
          sizes="(min-width: 768px) 30vw, 60vw"
          className="mx-auto h-auto w-2/3 max-w-xs md:w-full"
        />
      </div>
    </section>
  );
}
