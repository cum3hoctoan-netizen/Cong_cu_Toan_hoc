"use client"

import { useMemo, useState } from "react"
import { ChevronDown, RotateCcw } from "lucide-react"
import {
  type ResearchField,
  type SupervisionStatus,
  type SupervisionType,
  type Topic,
  fieldMeta,
  topics,
  typeMeta,
} from "@/lib/data"
import type { Dict, Lang } from "@/lib/i18n"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const TYPE_ORDER: SupervisionType[] = ["master", "bachelor", "essay", "student-research"]

export function SupervisionExplorer({ t, lang }: { t: Dict; lang: Lang }) {
  const [query, setQuery] = useState("")
  const [year, setYear] = useState("")
  const [type, setType] = useState<SupervisionType | "all">("all")
  const [field, setField] = useState<ResearchField | "all">("all")
  const [statuses, setStatuses] = useState<Record<SupervisionStatus, boolean>>({
    "in-progress": true,
    completed: true,
  })

  const filtered = useMemo(() => {
    return topics.filter((topic) => {
      if (!statuses[topic.status]) return false
      if (type !== "all" && topic.type !== type) return false
      if (field !== "all" && topic.field !== field) return false
      if (year.trim() && String(topic.year) !== year.trim()) return false
      if (query.trim()) {
        const q = query.trim().toLowerCase()
        if (!topic.title.toLowerCase().includes(q) && !topic.student.toLowerCase().includes(q)) {
          return false
        }
      }
      return true
    })
  }, [query, year, type, field, statuses])

  const grouped = useMemo(() => {
    const map = new Map<SupervisionType, Topic[]>()
    for (const ty of TYPE_ORDER) map.set(ty, [])
    for (const topic of filtered) map.get(topic.type)!.push(topic)
    return TYPE_ORDER.map((ty) => ({ type: ty, items: map.get(ty)! })).filter((g) => g.items.length > 0)
  }, [filtered])

  const clearFilters = () => {
    setQuery("")
    setYear("")
    setType("all")
    setField("all")
    setStatuses({ "in-progress": true, completed: true })
  }

  const labelFor = (m: { vi: string; en: string }) => (lang === "vi" ? m.vi : m.en)

  const selectClass =
    "h-10 w-full rounded-md border border-input bg-card px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
  const fieldLabelClass = "text-[11px] font-semibold tracking-[0.15em] text-muted-foreground"

  return (
    <section id="supervision" aria-labelledby="supervision-heading" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h2 id="supervision-heading" className="sr-only">
        {t.nav.supervision}
      </h2>

      {/* Filters */}
      <div className="rounded-xl border border-border bg-card p-4 shadow-sm sm:p-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <label className="flex flex-col gap-1.5">
            <span className={fieldLabelClass}>{t.filters.search}</span>
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.filters.searchPlaceholder}
              className="bg-card"
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className={fieldLabelClass}>{t.filters.year}</span>
            <Input
              value={year}
              onChange={(e) => setYear(e.target.value.replace(/[^\d]/g, ""))}
              placeholder={t.filters.yearPlaceholder}
              inputMode="numeric"
              className="bg-card"
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className={fieldLabelClass}>{t.filters.type}</span>
            <select
              className={selectClass}
              value={type}
              onChange={(e) => setType(e.target.value as SupervisionType | "all")}
            >
              <option value="all">{t.filters.allTypes}</option>
              {TYPE_ORDER.map((ty) => (
                <option key={ty} value={ty}>
                  {labelFor(typeMeta[ty])}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-1.5">
            <span className={fieldLabelClass}>{t.filters.field}</span>
            <select
              className={selectClass}
              value={field}
              onChange={(e) => setField(e.target.value as ResearchField | "all")}
            >
              <option value="all">{t.filters.allFields}</option>
              {(Object.keys(fieldMeta) as ResearchField[]).map((f) => (
                <option key={f} value={f}>
                  {labelFor(fieldMeta[f])}
                </option>
              ))}
            </select>
          </label>
        </div>

        <fieldset className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
          <legend className="sr-only">{t.filters.status}</legend>
          {(["in-progress", "completed"] as SupervisionStatus[]).map((s) => (
            <label key={s} className="flex cursor-pointer items-center gap-2 text-sm">
              <Checkbox
                checked={statuses[s]}
                onCheckedChange={(v) => setStatuses((prev) => ({ ...prev, [s]: Boolean(v) }))}
              />
              {s === "in-progress" ? t.filters.inProgress : t.filters.completed}
            </label>
          ))}
        </fieldset>
      </div>

      {/* Result meta */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">
          <strong className="text-2xl font-bold text-foreground">{filtered.length}</strong>{" "}
          {t.filters.resultCount(filtered.length).replace(/^\d+\s/, "")}
        </p>
        <button
          type="button"
          onClick={clearFilters}
          className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <RotateCcw className="size-4" />
          {t.filters.clear}
        </button>
      </div>

      {/* Quick group nav */}
      {grouped.length > 0 && (
        <nav aria-label="Supervision groups" className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {grouped.map((g) => (
            <a
              key={g.type}
              href={`#group-${g.type}`}
              className="flex items-center gap-3 rounded-lg border border-border bg-card p-3 transition-colors hover:border-primary/50 hover:bg-accent"
            >
              <span className="text-lg font-bold text-primary tabular-nums">{typeMeta[g.type].order}</span>
              <span className="text-sm font-semibold leading-snug">{labelFor(typeMeta[g.type])}</span>
            </a>
          ))}
        </nav>
      )}

      {/* Groups */}
      <div className="mt-8 space-y-10">
        {grouped.length === 0 && (
          <p className="rounded-lg border border-dashed border-border bg-card p-8 text-center text-sm text-muted-foreground">
            {t.filters.empty}
          </p>
        )}

        {grouped.map((g) => (
          <section key={g.type} id={`group-${g.type}`} aria-labelledby={`group-heading-${g.type}`}>
            <div className="mb-4 flex items-center gap-3 border-b border-border pb-3">
              <span className="text-2xl font-bold text-primary tabular-nums">{typeMeta[g.type].order}</span>
              <h3 id={`group-heading-${g.type}`} className="text-xl font-bold tracking-tight">
                {labelFor(typeMeta[g.type])}
              </h3>
              <Badge variant="secondary" className="ml-auto rounded-full">
                {g.items.length}
              </Badge>
            </div>

            <Accordion type="multiple" className="space-y-2">
              {g.items.map((topic) => (
                <AccordionItem
                  key={topic.id}
                  value={topic.id}
                  className="rounded-lg border border-border bg-card px-4"
                >
                  <AccordionTrigger className="py-4 hover:no-underline [&>svg]:hidden">
                    <div className="flex w-full items-start gap-3 text-left">
                      <div className="flex-1">
                        <div className="mb-1.5 flex flex-wrap items-center gap-2">
                          <StatusPill status={topic.status} t={t} />
                          <span className="text-[10px] font-semibold tracking-wider text-muted-foreground">
                            {topic.level}
                          </span>
                        </div>
                        <p className="text-pretty text-base font-semibold leading-snug">{topic.title}</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {topic.student}
                          {topic.cohort ? ` · ${t.labels.cohort} ${topic.cohort}` : ""} ·{" "}
                          {topic.expected ? `${t.labels.expected} ${topic.year}` : topic.year}
                        </p>
                      </div>
                      <ChevronDown className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform duration-200" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <div className="rounded-md bg-muted/50 p-3">
                      <p className="mb-1 text-[11px] font-semibold tracking-[0.15em] text-muted-foreground">
                        {t.labels.abstract.toUpperCase()}
                      </p>
                      <p className="text-sm leading-relaxed text-foreground/90">{topic.abstract}</p>
                      <p className="mt-3 text-xs text-muted-foreground">
                        {labelFor(fieldMeta[topic.field])}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        ))}
      </div>
    </section>
  )
}

function StatusPill({ status, t }: { status: SupervisionStatus; t: Dict }) {
  const isDone = status === "completed"
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-semibold",
        isDone ? "bg-primary/12 text-primary" : "bg-chart-5/15 text-chart-5",
      )}
    >
      <span className={cn("size-1.5 rounded-full", isDone ? "bg-primary" : "bg-chart-5")} />
      {isDone ? t.filters.completed : t.filters.inProgress}
    </span>
  )
}
