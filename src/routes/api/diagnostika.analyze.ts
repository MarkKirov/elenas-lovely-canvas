import { createFileRoute } from "@tanstack/react-router";

const SYSTEM_PROMPT = `Ты — жёсткий бизнес-психолог и стратег для собственников бизнеса в регионах России (Липецк). Ты не льёшь воду, не пишешь "вам нужно подумать" и не используешь смайлы. Говоришь как человек, который видел сотни предпринимателей насквозь.

На входе ты получаешь ответы человека на 15 вопросов диагностики (вариант А, Б или В по каждому вопросу). Твоя задача — отнести его к одному из 5 архетипов и выдать персональный жёсткий разбор.

АРХЕТИПЫ:
1. Собственник-Заложник — Ремесленник в операционном аду. Всё держится на ручном управлении, синдром "проще сделать самому".
2. Слепой Визионер — Масштабирование хаоса. Много идей, заливает деньги в маркетинг, внутри процессы сгнили, отдел продаж сливает заявки.
3. Уставший Донор — Конфликт бизнеса и личности. Проект давно претит, внутренний саботаж, команда саботирует следом.
4. Инерционный Пассажир — Жизнь на пороховой бочке. Дробит на 10 ИП, ведёт учёт в блокноте, "100 раз так делал, пронесёт", модель юридически мертва.
5. Одинокий Стрелок — Предпринимательское одиночество. Команда не понимает целей, тащит весь груз стратегии в одиночку.

ФОРМАТ ОТВЕТА (строго в markdown, без префиксов и без вступительных фраз):

# {Название архетипа}

## Суть ловушки
(2–4 предложения, говори с человеком на "вы", максимально точно по его конкретным ответам — цитируй его выборы, бей по болям, без воды)

## Ваши сильные стороны
- (3 пункта, конкретно по его ответам)

## Ваши слабые стороны
- (3–4 пункта, жёстко, по его ответам, с конкретными последствиями)

## Что с этим делать
(1 абзац: куда вы катитесь, если ничего не поменять, и что именно надо пересобрать. Без общих советов вроде "наймите команду".)

## Как мы решаем это в школе
(1 абзац: коротко, как программы школы Елены Кремневой закрывают именно его слабые стороны. Упомяни: бизнес-психолог, консилиумы, пересборка модели под личность собственника, защита от налоговых мин.)

Не пиши "Здравствуйте", "Спасибо за ответы", "Надеюсь, было полезно". Сразу заголовок архетипа.`;

export const Route = createFileRoute("/api/diagnostika/analyze")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env.LOVABLE_API_KEY;
        if (!apiKey) {
          return new Response(JSON.stringify({ error: "LOVABLE_API_KEY is not configured" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }

        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return new Response(JSON.stringify({ error: "Invalid JSON" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        const answers = (body as { answers?: unknown })?.answers;
        if (!Array.isArray(answers) || answers.length !== 15) {
          return new Response(JSON.stringify({ error: "Expected 15 answers" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        const normalized = answers.map((a, i) => {
          const v = String(a ?? "").trim().toUpperCase();
          if (!["А", "Б", "В"].includes(v)) {
            throw new Error(`Invalid answer at index ${i}`);
          }
          return `Вопрос ${i + 1}: ${v}`;
        });

        const userMessage = `Вот ответы собственника на 15 вопросов диагностики:\n\n${normalized.join("\n")}\n\nОпредели его архетип и выдай разбор строго по формату.`;

        const upstream = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "google/gemini-2.5-pro",
            stream: true,
            messages: [
              { role: "system", content: SYSTEM_PROMPT },
              { role: "user", content: userMessage },
            ],
          }),
        });

        if (!upstream.ok || !upstream.body) {
          if (upstream.status === 429) {
            return new Response(JSON.stringify({ error: "Слишком много запросов. Попробуйте через минуту." }), {
              status: 429,
              headers: { "Content-Type": "application/json" },
            });
          }
          if (upstream.status === 402) {
            return new Response(JSON.stringify({ error: "Закончились кредиты ИИ." }), {
              status: 402,
              headers: { "Content-Type": "application/json" },
            });
          }
          const text = await upstream.text();
          console.error("AI gateway error:", upstream.status, text);
          return new Response(JSON.stringify({ error: "Ошибка ИИ-сервиса" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }

        return new Response(upstream.body, {
          headers: {
            "Content-Type": "text/event-stream",
            "Cache-Control": "no-cache",
          },
        });
      },
    },
  },
});