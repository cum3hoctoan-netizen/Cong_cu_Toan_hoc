"use client"

import { useEffect, useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { SupervisionExplorer } from "@/components/supervision-explorer"
import { QuizArena } from "@/components/quiz-arena"
import { dict, type Lang } from "@/lib/i18n"

export default function Page() {
  const [lang, setLang] = useState<Lang>("vi")
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    document.documentElement.classList.toggle("light", theme === "light")
  }, [theme])

  const t = dict[lang]

  return (
    <>
      <a
        href="#supervision"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        {t.skipToContent}
      </a>
      <SiteHeader
        t={t}
        lang={lang}
        setLang={setLang}
        theme={theme}
        toggleTheme={() => setTheme((p) => (p === "dark" ? "light" : "dark"))}
      />
      <main>
        <Hero t={t} />
        <SupervisionExplorer t={t} lang={lang} />
        <QuizArena t={t} lang={lang} />
      </main>
      <footer className="border-t border-border bg-background">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground sm:px-6">
          {t.footer(new Date().getFullYear())}
        </div>
      </footer>
    </>
  )
}
