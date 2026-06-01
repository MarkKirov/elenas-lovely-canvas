import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import ReactMarkdown from "react-markdown";

type Question = {
  q: string;
  options: { letter: "А" | "Б" | "В"; text: string }[];
};

const QUESTIONS: Question[] = [
  {
    q: "Какая мысль первой стреляет в голову, когда вы просыпаетесь в понедельник?",
    options: [
      { letter: "А", text: "Так, надо проверить чаты. Там сто процентов опять косяки, без меня всё развалится." },
      { letter: "Б", text: "Надо запустить новый проект или купить обучение, текущий бизнес уже тошно ковырять." },
      { letter: "В", text: "Сколько там на счету? Хватит ли закрыть обязательства или опять кассовый разрыв?" },
    ],
  },
  {
    q: "Представьте: вы полностью выключили телефон на 4 дня. Что произойдёт?",
    options: [
      { letter: "А", text: "Бизнес просто встанет, клиенты уйдут, сотрудники начнут саботировать всё." },
      { letter: "Б", text: "Всё будет работать как обычно, но компания перестанет развиваться и застрянет." },
      { letter: "В", text: "Вернусь к куче долгов и кадровому хаосу, который придётся разгребать месяц." },
    ],
  },
  {
    q: "На что уходят деньги, которые ваш бизнес должен зарабатывать лично для вас?",
    options: [
      { letter: "А", text: "Обратно в бизнес — бездумно заливаю в рекламу или аренду, а себе беру крошки." },
      { letter: "Б", text: "На тушение пожаров и кассовые разрывы, которые я вовремя не посчитал." },
      { letter: "В", text: "Мне на жизнь хватает, но бизнес даёт смешные 40–70 тысяч при стрессе на миллион." },
    ],
  },
  {
    q: "Как у вас обстоят дела с наймом в вашем городе?",
    options: [
      { letter: "А", text: "Жёсткий синдром «проще сделать самому». Нормальных кадров тут нет." },
      { letter: "Б", text: "Люди есть, но не тянут масштаб моих идей. Забираю задачи обратно." },
      { letter: "В", text: "Нанимаю по привычке кого придётся, контроля ноль, команда живёт своей жизнью." },
    ],
  },
  {
    q: "Что происходит, когда бизнесу нужно продавать дорого или масштабно?",
    options: [
      { letter: "А", text: "Психологический дискомфорт. Команде стыдно «впаривать», продажи буксуют." },
      { letter: "Б", text: "Продажи идут, но за счёт диких скидок, которые убивают рентабельность." },
      { letter: "В", text: "Продаём хорошо, но отдел продаж сливает заявки и не перезванивает." },
    ],
  },
  {
    q: "Проект откровенно не прёт. Ваши действия?",
    options: [
      { letter: "А", text: "Тащу до конца, нанимаю коучей — я уже вложил туда слишком много." },
      { letter: "Б", text: "Брошу на самотёк и переключусь на новую «гениальную» нишу." },
      { letter: "В", text: "Раздроблю на ещё пару ИП, надеясь, что юридически станет легче." },
    ],
  },
  {
    q: "Как выглядит ваша юридическая и налоговая структура?",
    options: [
      { letter: "А", text: "Куча ИП и самозанятых — «все в городе так дробятся и прокатывает»." },
      { letter: "Б", text: "Всё на мне одном, боюсь проверок, система стала неуправляемой." },
      { letter: "В", text: "Честно не лезу, всё на бухгалтере, надеюсь не накроют за старые схемы." },
    ],
  },
  {
    q: "Из-за чего в компании чаще всего случаются конфликты?",
    options: [
      { letter: "А", text: "Сотрудники косячат, а я срываюсь и ору, что они бестолковые." },
      { letter: "Б", text: "Я загораюсь идеей, требую бежать, команда саботирует и просит инструкции." },
      { letter: "В", text: "Из-за нехватки денег — вечные кассовые разрывы." },
    ],
  },
  {
    q: "Какими инструментами управления вы пользуетесь каждый день?",
    options: [
      { letter: "А", text: "Блокнот, интуиция и личные ощущения. Все цифры у меня в голове." },
      { letter: "Б", text: "Миллион разрозненных Excel и чатов в Телеге, от которых дёргается глаз." },
      { letter: "В", text: "Есть CRM и учёт, но настроены криво — управляю вслепую." },
    ],
  },
  {
    q: "Что для вас «предпринимательское одиночество»?",
    options: [
      { letter: "А", text: "Наверху реально одиноко. Не с кем обсудить проблемы без маски успеха." },
      { letter: "Б", text: "Это когда ты один пашешь, а команда сидит на окладе и ждёт 5 часов." },
      { letter: "В", text: "Это когда остаёшься один на один со страхом, что бизнес завтра накроется." },
    ],
  },
  {
    q: "Каковы ваши реальные отношения с собственным продуктом?",
    options: [
      { letter: "А", text: "Я фанат продукта, готов улучшать вечно, даже в убыток бизнесу." },
      { letter: "Б", text: "Бизнес давно претит, не бьётся с личностью, подсознательно саботирую рост." },
      { letter: "В", text: "Продукт нормальный, но я его не вижу за горой операционки и отчётов." },
    ],
  },
  {
    q: "Вам предложили стабильную работу в найме за 200 000 ₽/мес. Ваша реакция?",
    options: [
      { letter: "А", text: "С ума сошли? Я предприниматель, в найм не вернусь." },
      { letter: "Б", text: "А может согласиться? Выключил комп в 5 и спишь спокойно." },
      { letter: "В", text: "Пошёл бы, если бы мог быстро продать болото, которое построил." },
    ],
  },
  {
    q: "Решили сделать х2 в выручке за полгода. Каков ваш план?",
    options: [
      { letter: "А", text: "Фигачить в два раза больше, спать по 4 часа, жёстче пинать сотрудников." },
      { letter: "Б", text: "Бахнуть ещё больше денег в маркетинг — лиды придут, разберёмся." },
      { letter: "В", text: "Не знаю. Модель настолько хрупкая, что при росте лопнет по швам." },
    ],
  },
  {
    q: "Как ваша команда реагирует на новые задачи и цели?",
    options: [
      { letter: "А", text: "Включают защиту и саботируют. Мой внутренний саботаж заражает их." },
      { letter: "Б", text: "Кивают, но делают вид, пока я не проверю каждый шаг." },
      { letter: "В", text: "Рады бы делать, но нет структуры, регламентов и пути клиента." },
    ],
  },
  {
    q: "Каков ваш главный страх, связанный с деньгами в бизнесе прямо сейчас?",
    options: [
      { letter: "А", text: "Обнаружить огромный кассовый разрыв, когда уже поздно закрываться." },
      { letter: "Б", text: "Что нагрянет проверка и вскроет старые привычки дробить бизнес." },
      { letter: "В", text: "Страха нет, есть тупая усталость: зарабатываю меньше своих сотрудников." },
    ],
  },
];

export const Route = createFileRoute("/diagnostika")({
  head: () => ({
    meta: [
      { title: "Диагностика собственника — Бизнес-школа Елены Кремневой" },
      { name: "description", content: "15 вопросов. Узнайте свой архетип собственника и где спрятан невидимый источник дохода." },
    ],
  }),
  component: DiagnostikaPage,
});

function DiagnostikaPage() {
  const [answers, setAnswers] = useState<Record<number, "А" | "Б" | "В">>({});
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const answered = Object.keys(answers).length;
  const allAnswered = answered === QUESTIONS.length;
  const progress = useMemo(() => Math.round((answered / QUESTIONS.length) * 100), [answered]);

  const submit = async () => {
    if (!allAnswered || submitting) return;
    setSubmitting(true);
    setResult("");
    setError(null);
    setDone(false);

    const orderedAnswers = QUESTIONS.map((_, i) => answers[i]);

    try {
      const resp = await fetch("/api/diagnostika/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers: orderedAnswers }),
      });

      if (!resp.ok || !resp.body) {
        const data = await resp.json().catch(() => ({ error: "Ошибка запроса" }));
        setError(data.error || "Что-то пошло не так. Попробуйте ещё раз.");
        setSubmitting(false);
        return;
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let streamDone = false;
      let acc = "";

      while (!streamDone) {
        const { done: rdDone, value } = await reader.read();
        if (rdDone) break;
        buffer += decoder.decode(value, { stream: true });

        let nl: number;
        while ((nl = buffer.indexOf("\n")) !== -1) {
          let line = buffer.slice(0, nl);
          buffer = buffer.slice(nl + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (!line.startsWith("data: ")) continue;
          const json = line.slice(6).trim();
          if (json === "[DONE]") {
            streamDone = true;
            break;
          }
          try {
            const parsed = JSON.parse(json);
            const delta = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (delta) {
              acc += delta;
              setResult(acc);
            }
          } catch {
            buffer = line + "\n" + buffer;
            break;
          }
        }
      }
      setDone(true);
    } catch (e) {
      console.error(e);
      setError("Не удалось получить разбор. Попробуйте ещё раз.");
    } finally {
      setSubmitting(false);
    }
  };

  if (result || submitting) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-[#04140f] via-[#0a2e22] to-[#0d4d3a] py-16 text-white">
        <div className="mx-auto max-w-3xl px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> На главную
          </Link>

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:p-10">
            <div className="mb-6 flex items-center gap-2 text-emerald-300">
              <Sparkles className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                {submitting && !done ? "ИИ-анализ ваших ответов" : "Ваш разбор готов"}
              </span>
            </div>

            <article className="prose prose-invert prose-headings:font-black prose-h1:mt-0 prose-h1:bg-gradient-to-r prose-h1:from-emerald-200 prose-h1:via-emerald-300 prose-h1:to-teal-200 prose-h1:bg-clip-text prose-h1:text-transparent prose-h2:mt-8 prose-h2:text-emerald-200 prose-strong:text-white prose-li:marker:text-emerald-400 max-w-none">
              {result ? (
                <ReactMarkdown>{result}</ReactMarkdown>
              ) : (
                <p className="animate-pulse text-white/70">Запускаем анализ…</p>
              )}
              {submitting && !done && result && (
                <span className="inline-block h-4 w-2 animate-pulse bg-emerald-300 align-middle" />
              )}
            </article>

            {done && (
              <div className="mt-10 overflow-hidden rounded-2xl border border-emerald-300/30 bg-gradient-to-br from-emerald-400/20 via-teal-400/10 to-emerald-300/10 p-8">
                <h3 className="text-2xl font-black leading-tight md:text-3xl">
                  Хотите пошаговую стратегию под ваш тип?
                </h3>
                <p className="mt-3 text-white/85">
                  Запишитесь на бесплатный подбор стратегии — преподаватели школы соберут план под вашу личность,
                  город и конъюнктуру.
                </p>
                <a
                  href="#zapis"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#04140f] transition-colors hover:bg-emerald-200"
                >
                  Записаться на бесплатный подбор <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            )}

            {error && (
              <p className="mt-6 rounded-xl border border-red-400/30 bg-red-500/10 p-4 text-sm text-red-200">
                {error}
              </p>
            )}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#04140f] via-[#0a2e22] to-[#0d4d3a] py-12 text-white">
      <div className="mx-auto max-w-3xl px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white">
          <ArrowLeft className="h-4 w-4" /> На главную
        </Link>

        <div className="mt-8">
          <span className="inline-block rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]">
            Диагностика собственника
          </span>
          <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight md:text-5xl">
            15 вопросов, после которых вы поймёте,<br />
            где спрятан ваш невидимый доход
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            Отвечайте честно. После последнего вопроса ИИ-аналитик отнесёт вас к одному из 5 архетипов
             и выдаст персональный разбор: сильные стороны, слабые места, что с этим делать.
          </p>
        </div>

        <div className="sticky top-0 z-10 -mx-6 mt-8 bg-gradient-to-b from-[#04140f]/95 to-[#04140f]/80 px-6 py-3 backdrop-blur">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
            <span>{answered} / {QUESTIONS.length} ответов</span>
            <span>{progress}%</span>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full bg-gradient-to-r from-emerald-300 to-teal-300 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <ol className="mt-10 space-y-8">
          {QUESTIONS.map((q, i) => {
            const picked = answers[i];
            return (
              <li key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-400/20 text-xs font-bold text-emerald-200">
                    {i + 1}
                  </span>
                  <h2 className="text-lg font-bold leading-snug md:text-xl">{q.q}</h2>
                </div>
                <div className="mt-4 space-y-2 pl-10">
                  {q.options.map((opt) => {
                    const active = picked === opt.letter;
                    return (
                      <button
                        key={opt.letter}
                        type="button"
                        onClick={() => setAnswers((p) => ({ ...p, [i]: opt.letter }))}
                        className={`group flex w-full items-start gap-3 rounded-xl border p-4 text-left transition-all ${
                          active
                            ? "border-emerald-300 bg-emerald-400/20 shadow-[0_0_0_1px_rgba(110,231,183,0.4)]"
                            : "border-white/10 bg-white/[0.03] hover:border-white/30 hover:bg-white/[0.07]"
                        }`}
                      >
                        <span
                          className={`mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                            active ? "bg-emerald-300 text-[#04140f]" : "bg-white/10 text-white/70 group-hover:bg-white/20"
                          }`}
                        >
                          {opt.letter}
                        </span>
                        <span className="text-[15px] leading-relaxed text-white/90">{opt.text}</span>
                      </button>
                    );
                  })}
                </div>
              </li>
            );
          })}
        </ol>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
          <button
            type="button"
            onClick={submit}
            disabled={!allAnswered || submitting}
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#04140f] shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
          >
            {submitting ? "Анализируем…" : "Получить разбор"} <ArrowRight className="h-4 w-4" />
          </button>
          {!allAnswered && (
            <p className="mt-3 text-xs text-white/60">
              Ответьте на все 15 вопросов, чтобы получить точный диагноз
            </p>
          )}
          {error && (
            <p className="mt-4 rounded-xl border border-red-400/30 bg-red-500/10 p-3 text-sm text-red-200">
              {error}
            </p>
          )}
        </div>
      </div>
    </main>
  );
}