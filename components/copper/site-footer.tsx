import { Logo } from "@/components/copper/logo";

// The footer is always Night Sky: the `dark` class switches the theme colors
// (and the logo's light wordmark) for this block in both modes.
export function SiteFooter() {
  return (
    <footer
      data-testid="site-footer"
      className="dark bg-background text-foreground border-t"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <Logo className="w-40" />
        <p className="text-muted-foreground text-sm">
          Fictional — for educational use.
        </p>
      </div>
    </footer>
  );
}
