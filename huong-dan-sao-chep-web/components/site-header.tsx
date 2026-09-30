"use client"

import { useState } from "react"
import { GraduationCap, Menu, Moon, Sun, X } from "lucide-react"
import type { Dict, Lang } from "@/lib/i18n"
import { cn } from "@/lib/utils"

type Props = {
  t: Dict
  lang: Lang
  setLang: (l: Lang) => void
  theme: "light" | "dark"
  toggleTheme: () => void
}

export function SiteHeader({ t, lang, setLang, theme, toggleTheme }: Props) {
  const [open, setOpen] = useState(false)

  const links = [
    { key: "home", label: t.nav.home, href: "#" },
    { key: "profile", label: t.nav.profile, href: "#" },
    { key: "research", label: t.nav.research, href: "#" },
    { key: "publications", label: t.nav.publications, href: "#" },
    { key: "supervision", label: t.nav.supervision, href: "#supervision", active: true },
    { key: "teaching", label: t.nav.teaching, href: "#" },
    { key: "quizzes", label: t.nav.quizzes, href: "#quizzes" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:px-6">
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <GraduationCap className="size-5" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight">{t.brandName}</span>
            <span className="text-[11px] text-muted-foreground">{t.brandTagline}</span>
          </span>
        </a>

        <nav className="mx-auto hidden items-center gap-1 lg:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.key}
              href={l.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
                l.active && "text-foreground",
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <div
            className="flex items-center rounded-md border border-border p-0.5"
            role="group"
            aria-label="Language"
          >
            {(["en", "vi"] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={cn(
                  "rounded px-2 py-1 text-xs font-semibold transition-colors",
                  lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={t.changeTheme}
            className="flex size-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={t.openNav}
            aria-expanded={open}
            className="flex size-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 py-2 lg:hidden" aria-label="Mobile navigation">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.key}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
                    l.active && "text-foreground",
                  )}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
