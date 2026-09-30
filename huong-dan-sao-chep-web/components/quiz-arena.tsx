"use client"

import { useMemo, useState } from "react"
import { ArrowLeft, Award, CheckCircle2, Clock, ListChecks, RefreshCw, XCircle } from "lucide-react"
import { type Quiz, fieldMeta, quizzes } from "@/lib/data"
import type { Dict, Lang } from "@/lib/i18n"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

type Result = { correct: number; total: number; answers: number[] }

export function QuizArena({ t, lang }: { t: Dict; lang: Lang }) {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [best, setBest] = useState<Record<string, number>>({})
  const [lastResult, setLastResult] = useState<Record<string, Result>>({})

  const activeQuiz = quizzes.find((q) => q.id === activeId) ?? null
  const labelFor = (m: { vi: string; en: string }) => (lang === "vi" ? m.vi : m.en)

  const handleFinish = (quiz: Quiz, result: Result) => {
    const ratio = result.correct / result.total
    setBest((prev) => ({ ...prev, [quiz.id]: Math.max(prev[quiz.id] ?? 0, ratio) }))
    setLastResult((prev) => ({ ...prev, [quiz.id]: result }))
  }

  return (
    <section id="quizzes" aria-labelledby="quizzes-heading" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="text-xs font-semibold tracking-[0.2em] text-primary">{t.quiz.eyebrow}</p>
        <h2 id="quizzes-heading" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          {t.quiz.title}
        </h2>
        <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">{t.quiz.subtitle}</p>

        <div className="mt-8">
          {activeQuiz ? (
            <QuizRunner
              quiz={activeQuiz}
              t={t}
              lang={lang}
              lastResult={lastResult[activeQuiz.id]}
              onExit={() => setActiveId(null)}
              onFinish={(r) => handleFinish(activeQuiz, r)}
            />
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {quizzes.map((quiz) => {
                const bestRatio = best[quiz.id]
                return (
                  <article
                    key={quiz.id}
                    className="flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm"
                  >
                    <div className="flex items-center gap-2">
                      <Badge className="rounded-full bg-primary/12 text-primary hover:bg-primary/12">
                        {t.quiz.periodic} · {quiz.period}
                      </Badge>
                    </div>
                    <h3 className="mt-3 text-lg font-bold leading-snug">{quiz.title}</h3>
                    <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">{quiz.description}</p>

                    <dl className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <ListChecks className="size-4" />
                        {quiz.questions.length} {t.quiz.questions}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="size-4" />
                        {quiz.minutes} {t.quiz.minutes}
                      </div>
                    </dl>

                    <p className="mt-3 text-xs text-muted-foreground">{labelFor(fieldMeta[quiz.field])}</p>

                    <div className="mt-4 flex items-center justify-between gap-3 border-t border-border pt-4">
                      <span className="flex items-center gap-1.5 text-xs font-medium">
                        <Award className={cn("size-4", bestRatio != null ? "text-primary" : "text-muted-foreground")} />
                        {bestRatio != null ? (
                          <span className="text-foreground">
                            {t.quiz.best}: {Math.round(bestRatio * 100)}%
                          </span>
                        ) : (
                          <span className="text-muted-foreground">{t.quiz.notTaken}</span>
                        )}
                      </span>
                      <button
                        type="button"
                        onClick={() => setActiveId(quiz.id)}
                        className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3.5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                      >
                        {bestRatio != null ? (
                          <>
                            <RefreshCw className="size-4" />
                            {t.quiz.retake}
                          </>
                        ) : (
                          t.quiz.start
                        )}
                      </button>
                    </div>
                  </article>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function QuizRunner({
  quiz,
  t,
  lang,
  lastResult,
  onExit,
  onFinish,
}: {
  quiz: Quiz
  t: Dict
  lang: Lang
  lastResult?: Result
  onExit: () => void
  onFinish: (r: Result) => void
}) {
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<number[]>(Array(quiz.questions.length).fill(-1))
  const [selected, setSelected] = useState<number>(-1)
  const [showPrompt, setShowPrompt] = useState(false)
  const [finished, setFinished] = useState(false)

  const question = quiz.questions[index]
  const total = quiz.questions.length
  const isLast = index === total - 1

  const result = useMemo<Result>(() => {
    const correct = answers.reduce((acc, a, i) => acc + (a === quiz.questions[i].answerIndex ? 1 : 0), 0)
    return { correct, total, answers }
  }, [answers, quiz.questions, total])

  const goNext = () => {
    if (selected < 0) {
      setShowPrompt(true)
      return
    }
    const nextAnswers = [...answers]
    nextAnswers[index] = selected
    setAnswers(nextAnswers)
    setShowPrompt(false)

    if (isLast) {
      const correct = nextAnswers.reduce(
        (acc, a, i) => acc + (a === quiz.questions[i].answerIndex ? 1 : 0),
        0,
      )
      onFinish({ correct, total, answers: nextAnswers })
      setFinished(true)
    } else {
      const next = index + 1
      setIndex(next)
      setSelected(nextAnswers[next])
    }
  }

  const restart = () => {
    setIndex(0)
    setAnswers(Array(total).fill(-1))
    setSelected(-1)
    setShowPrompt(false)
    setFinished(false)
  }

  if (finished) {
    const pct = Math.round((result.correct / total) * 100)
    const message =
      pct >= 80 ? t.quiz.excellent : pct >= 50 ? t.quiz.good : t.quiz.keepGoing
    return (
      <div className="mx-auto max-w-2xl rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <div className="text-center">
          <span className="inline-flex size-16 items-center justify-center rounded-full bg-primary/12 text-primary">
            <Award className="size-8" />
          </span>
          <h3 className="mt-4 text-2xl font-bold">{t.quiz.resultTitle}</h3>
          <p className="mt-1 text-4xl font-bold tabular-nums text-primary">{pct}%</p>
          <p className="mt-1 text-sm text-muted-foreground">{t.quiz.score(result.correct, total)}</p>
          <p className="mt-3 text-pretty text-sm text-foreground/90">{message}</p>
        </div>

        <ol className="mt-6 space-y-3">
          {quiz.questions.map((q, i) => {
            const chosen = result.answers[i]
            const correct = chosen === q.answerIndex
            return (
              <li key={q.id} className="rounded-lg border border-border p-3">
                <div className="flex items-start gap-2">
                  {correct ? (
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  ) : (
                    <XCircle className="mt-0.5 size-4 shrink-0 text-destructive" />
                  )}
                  <div className="flex-1">
                    <p className="text-sm font-medium">{q.prompt}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {t.quiz.yourAnswer}: <span className={correct ? "text-primary" : "text-destructive"}>
                        {chosen >= 0 ? q.options[chosen] : "—"}
                      </span>
                    </p>
                    {!correct && (
                      <p className="text-xs text-muted-foreground">
                        {t.quiz.correctAnswer}: <span className="text-primary">{q.options[q.answerIndex]}</span>
                      </p>
                    )}
                  </div>
                </div>
              </li>
            )
          })}
        </ol>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={restart}
            className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <RefreshCw className="size-4" />
            {t.quiz.retake}
          </button>
          <button
            type="button"
            onClick={onExit}
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
          >
            <ArrowLeft className="size-4" />
            {t.quiz.back}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={onExit}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          {t.quiz.back}
        </button>
        <span className="text-sm font-medium text-muted-foreground">{t.quiz.progress(index + 1, total)}</span>
      </div>

      <Progress value={((index + 1) / total) * 100} className="mt-4" />

      <div className="mt-6">
        <p className="text-xs font-semibold tracking-[0.15em] text-primary">{quiz.title}</p>
        <h3 className="mt-2 text-pretty text-xl font-bold leading-snug">{question.prompt}</h3>

        <fieldset className="mt-5 space-y-2.5">
          <legend className="sr-only">{question.prompt}</legend>
          {question.options.map((option, i) => {
            const active = selected === i
            return (
              <label
                key={i}
                className={cn(
                  "flex cursor-pointer items-center gap-3 rounded-lg border p-3.5 text-sm transition-colors",
                  active
                    ? "border-primary bg-primary/8 ring-1 ring-primary"
                    : "border-border bg-card hover:border-primary/40 hover:bg-accent/50",
                )}
              >
                <input
                  type="radio"
                  name={`q-${question.id}`}
                  checked={active}
                  onChange={() => {
                    setSelected(i)
                    setShowPrompt(false)
                  }}
                  className="sr-only"
                />
                <span
                  className={cn(
                    "flex size-6 shrink-0 items-center justify-center rounded-full border text-xs font-semibold",
                    active ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground",
                  )}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="text-pretty">{option}</span>
              </label>
            )
          })}
        </fieldset>

        {showPrompt && <p className="mt-3 text-sm text-destructive">{t.quiz.selectPrompt}</p>}

        <button
          type="button"
          onClick={goNext}
          className="mt-6 inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          {isLast ? t.quiz.finish : t.quiz.next}
        </button>
      </div>
    </div>
  )
}
