import type { Dict } from "@/lib/i18n"

export function Hero({ t }: { t: Dict }) {
  return (
    <section
      aria-labelledby="hero-title"
      className="border-b border-border bg-gradient-to-b from-secondary/60 to-background"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="text-xs font-semibold tracking-[0.2em] text-primary">{t.hero.eyebrow}</p>
        <h1 id="hero-title" className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          {t.hero.title}
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {t.hero.subtitle}
        </p>
      </div>
    </section>
  )
}
