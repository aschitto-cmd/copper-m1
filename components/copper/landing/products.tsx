import Image from "next/image";
import {
  CUTOUT_ALT,
  IMAGE_SIZE,
  SWATCH,
} from "@/components/copper/landing/images";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { formatUsd, getProducts } from "@/lib/copper/catalog";

export function Products() {
  const products = getProducts();
  return (
    <section
      id="products"
      data-testid="products"
      className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-16 md:py-24"
    >
      <div className="mb-10 max-w-2xl">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Two ways to meet Copper
        </h2>
        <p className="text-muted-foreground mt-3 text-lg">
          One listens for your household. One listens for your meetings. Both
          answer to &ldquo;Hey Copper.&rdquo;
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {products.map((product) => (
          <Card
            key={product.id}
            data-testid="product-card"
            data-product={product.id}
            className="gap-6 py-0"
          >
            <div className="bg-secondary flex flex-col items-center gap-4 px-6 pt-8 pb-6">
              <Image
                src={product.cutout}
                alt={CUTOUT_ALT[product.cutout] ?? product.name}
                {...IMAGE_SIZE.cutout}
                sizes="(min-width: 768px) 300px, 70vw"
                className="h-auto w-3/4 max-w-72"
              />
              <ul className="flex gap-3" aria-label={`${product.name} colors`}>
                {product.colors.map((color) => (
                  <li key={color} className="flex items-center gap-1.5 text-xs">
                    <span
                      aria-hidden
                      className={`ring-foreground/20 size-4 rounded-full ring-1 ${SWATCH[color] ?? "bg-muted"}`}
                    />
                    {color}
                  </li>
                ))}
              </ul>
            </div>

            <CardHeader className="gap-1">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-2xl font-bold">{product.name}</h3>
                <p className="text-primary text-2xl font-bold">
                  {formatUsd(product.priceUsd)}
                </p>
              </div>
              <p className="text-muted-foreground">{product.type}</p>
            </CardHeader>

            <CardContent className="pb-8">
              <ul className="flex flex-col gap-4">
                {product.features.map((feature) => (
                  <li key={feature.name} className="flex gap-3">
                    <span
                      aria-hidden
                      className="bg-accent mt-2 size-2 shrink-0 rounded-full"
                    />
                    <div>
                      <p className="font-semibold">{feature.name}</p>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
