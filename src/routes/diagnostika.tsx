import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { Input } from "@/components/ui/input";

type Question = {
  q: string;
  options: string[];
};

const QUESTIONS: Question[] = [
  {
    q: "Какая выручка у вашего бизнеса в месяц?",
    options: ["До 500 тыс ₽", "500 тыс – 2 млн ₽", "2 – 10 млн ₽", "Больше 10 млн ₽"],
  },
  {
    q: "Сколько часов в неделю вы тратите на операционку?",
    options: ["Меньше 20", "20 – 40", "40 – 60", "Больше 60 — живу в бизнесе"],
  },
  {
    q: "Что больше всего буксует прямо сейчас?",
    options: ["Продажи и маркетинг", "Команда и найм", "Финансы и прибыль", "Я сам — выгораю и теряю фокус"],
  },
  {
    q: "Платите ли вы себе фиксированную зарплату собственника?",
    options: ["Да, как любому сотруднику", "Беру по остатку, когда есть", "Не плачу — всё в бизнесе"],
  },
  {
    q: "Знаете ли вы точку безубыточности и реальную маржу по продуктам?",
    options: ["Да, считаю каждый месяц", "Примерно — по ощущениям", "Нет, всё в голове"],
  },
  {
    q: "Что для вас важнее получить от школы?",
    options: [
      "Рост выручки и прибыли",
      "Систему, которая работает без меня",
      "Свободное время и фокус",
      "Понимание, куда двигаться дальше",
    ],
  },
  {
    q: "Когда готовы начать менять бизнес?",
    options: ["В ближайший месяц", "В течение квартала", "Пока просто изучаю"],
  },
];

export const Route = createFileRoute("/diagnostika")({
  head: () => ({
    meta: [
      { title: "Диагностика собственника — Бизнес-школа Елены Кремневой" },
      { name: "description", content: "Короткий квиз. Поймёте, где у вас невидимые источники дохода, и получите бронь на бесплатный подбор стратегии." },
    ],
  }),
  component: DiagnostikaPage,
});

function DiagnostikaPage() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [step, setStep] = useState(0);
  const [showLead, setShowLead] = useState(false);

  const answered = Object.keys(answers).length;
  const progress = useMemo(
    () => Math.round(((showLead ? QUESTIONS.length : Math.min(step, QUESTIONS.length)) / QUESTIONS.length) * 100),
    [step, showLead],
  );

  const pick = (idx: number) => {
    setAnswers((p) => ({ ...p, [step]: idx }));
    setTimeout(() => {
      if (step + 1 < QUESTIONS.length) setStep(step + 1);
      else setShowLead(true);
    }, 180);
  };

  if (showLead) {
    return <LeadStep answers={answers} />;
  }

  const q = QUESTIONS[step];
  const picked = answers[step];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#04140f] via-[#0a2e22] to-[#0d4d3a] py-12 text-white">
      <div className="mx-auto max-w-2xl px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white">
          <ArrowLeft className="h-4 w-4" /> На главную
        </Link>

        <div className="mt-8">
          <span className="inline-block rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]">
            Диагностика собственника
          </span>
          <h1 className="mt-6 text-3xl font-black leading-[1.1] tracking-tight md:text-4xl">
            Какой вы собственник и где ваши невидимые источники дохода?
          </h1>
          <p className="mt-4 text-base text-white/75 md:text-lg">
            7 коротких вопросов. В конце — бронь на бесплатный подбор стратегии под вашу личность,
            возможности и конъюнктуру региона.
          </p>
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
            <span>Вопрос {step + 1} из {QUESTIONS.length}</span>
            <span>{answered} отвечено</span>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full bg-gradient-to-r from-emerald-300 to-teal-300 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur md:p-8">
          <h2 className="text-xl font-bold leading-snug md:text-2xl">{q.q}</h2>
          <div className="mt-6 space-y-3">
            {q.options.map((opt, i) => {
              const active = picked === i;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => pick(i)}
                  className={`flex w-full items-center gap-3 rounded-xl border p-4 text-left transition-all ${
                    active
                      ? "border-emerald-300 bg-emerald-400/20"
                      : "border-white/10 bg-white/[0.03] hover:border-white/30 hover:bg-white/[0.07]"
                  }`}
                >
                  <span
                    className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                      active ? "bg-emerald-300 text-[#04140f]" : "bg-white/10 text-white/70"
                    }`}
                  >
                    {active ? <Check className="h-3.5 w-3.5" /> : i + 1}
                  </span>
                  <span className="text-[15px] leading-relaxed text-white/90">{opt}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setStep(Math.max(0, step - 1))}
            disabled={step === 0}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ArrowLeft className="h-4 w-4" /> Назад
          </button>
        </div>
      </div>
    </main>
  );
}

function LeadStep({ answers }: { answers: Record<number, number> }) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [channel, setChannel] = useState<"telegram" | "max" | "phone" | "vk">("telegram");
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const { sendLead } = await import("@/lib/send-lead.functions");
      const answersText = QUESTIONS.map(
        (q, i) => `${i + 1}. ${q.q}\n   → ${q.options[answers[i]] ?? "—"}`,
      ).join("\n\n");
      await sendLead({
        data: {
          name,
          phone: channel === "phone" ? contact : "",
          messenger: channel !== "phone" ? `${channel.toUpperCase()}: ${contact}` : "",
          contact: channel,
          source: "Квиз — диагностика собственника",
          answers: answersText,
        },
      });
      setSent(true);
    } catch (err) {
      console.error(err);
      setError("Не удалось отправить. Попробуйте ещё раз.");
    } finally {
      setSubmitting(false);
    }
  };

  const channels: { id: typeof channel; label: string; placeholder: string }[] = [
    { id: "telegram", label: "Telegram", placeholder: "@username" },
    { id: "max", label: "MAX", placeholder: "Номер или ник в MAX" },
    { id: "phone", label: "Телефон", placeholder: "+7 (___) ___-__-__" },
    { id: "vk", label: "ВКонтакте", placeholder: "Ссылка на профиль" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#04140f] via-[#0a2e22] to-[#0d4d3a] py-12 text-white">
      <div className="mx-auto max-w-2xl px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white">
          <ArrowLeft className="h-4 w-4" /> На главную
        </Link>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:p-10">
          {sent ? (
            <div className="py-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-300 text-[#04140f]">
                <Check className="h-7 w-7" />
              </div>
              <h2 className="mt-6 text-3xl font-black md:text-4xl">Готово, бронь зафиксировали</h2>
              <p className="mt-4 text-white/80">
                Свяжемся с вами в ближайшее время и пришлём приглашение на бесплатный подбор стратегии.
              </p>
              <Link
                to="/"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#04140f] hover:bg-emerald-200"
              >
                На главную <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ) : (
            <>
              <div className="inline-flex items-center gap-2 rounded-full border border-red-400/40 bg-red-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-red-200">
                <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-red-400" />
                На этой неделе осталось 1 место
              </div>
              <h2 className="mt-5 text-3xl font-black leading-tight md:text-4xl">
                Куда прислать приглашение на бесплатную диагностику?
              </h2>
              <p className="mt-4 text-white/80">
                На диагностике разберём ваши ответы и соберём стратегию под вашу личность, возможности
                и конъюнктуру региона.
              </p>

              <form onSubmit={submit} className="mt-8 space-y-5">
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/70">
                    Ваше имя
                  </label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Имя"
                    className="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/70">
                    Где удобно получить приглашение?
                  </label>
                  <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                    {channels.map((c) => {
                      const active = channel === c.id;
                      return (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => setChannel(c.id)}
                          className={`rounded-md border px-3 py-2 text-sm font-semibold transition-colors ${
                            active
                              ? "border-emerald-300 bg-emerald-400 text-emerald-950"
                              : "border-white/20 bg-white/5 text-white hover:bg-white/10"
                          }`}
                        >
                          {c.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/70">
                    {channels.find((c) => c.id === channel)?.label}
                  </label>
                  <Input
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    required
                    placeholder={channels.find((c) => c.id === channel)?.placeholder}
                    className="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                    type={channel === "phone" ? "tel" : "text"}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#04140f] transition-colors hover:bg-emerald-200 disabled:opacity-60"
                >
                  {submitting ? "Отправляем…" : "Забронировать место"} <ArrowRight className="h-4 w-4" />
                </button>
                {error && (
                  <p className="rounded-xl border border-red-400/30 bg-red-500/10 p-3 text-center text-sm text-red-200">
                    {error}
                  </p>
                )}
              </form>
            </>
          )}
        </div>
      </div>
    </main>
  );
}