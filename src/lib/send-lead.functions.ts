import { createServerFn } from "@tanstack/react-start";

const RECIPIENTS = ["tacticfound@mail.ru", "vaigach1993@gmail.com"];

function encodeRaw(to: string, subject: string, html: string) {
  const msg = [
    `To: ${to}`,
    "Subject: =?UTF-8?B?" + btoa(unescape(encodeURIComponent(subject))) + "?=",
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset="UTF-8"',
    "",
    html,
  ].join("\r\n");
  // base64url-encode UTF-8 bytes
  const bytes = new TextEncoder().encode(msg);
  let bin = "";
  bytes.forEach((b) => (bin += String.fromCharCode(b)));
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function sendOne(to: string, subject: string, html: string) {
  const apiKey = process.env.LOVABLE_API_KEY;
  const conn = process.env.GOOGLE_MAIL_API_KEY;
  if (!apiKey || !conn) throw new Error("Email connector is not configured");
  const res = await fetch(
    "https://connector-gateway.lovable.dev/google_mail/gmail/v1/users/me/messages/send",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        "X-Connection-Api-Key": conn,
      },
      body: JSON.stringify({ raw: encodeRaw(to, subject, html) }),
    },
  );
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Gmail send failed (${res.status}): ${text}`);
  }
}

export const sendLead = createServerFn({ method: "POST" })
  .inputValidator(
    (data: {
      name?: string;
      phone?: string;
      messenger?: string;
      contact?: string;
      source?: string;
      answers?: string;
    }) => data,
  )
  .handler(async ({ data }) => {
    const subject = `Новая заявка с сайта школы${data.source ? ` · ${data.source}` : ""}`;
    const html = `
      <h2>Новая заявка</h2>
      <p><b>Имя:</b> ${escapeHtml(data.name || "—")}</p>
      <p><b>Телефон:</b> ${escapeHtml(data.phone || "—")}</p>
      <p><b>Мессенджер:</b> ${escapeHtml(data.messenger || "—")}</p>
      <p><b>Как связаться:</b> ${escapeHtml(data.contact || "—")}</p>
      ${data.source ? `<p><b>Источник:</b> ${escapeHtml(data.source)}</p>` : ""}
      ${data.answers ? `<hr /><h3>Ответы квиза</h3><pre style="font-family:inherit;white-space:pre-wrap;background:#f6f6f6;padding:12px;border-radius:8px">${escapeHtml(data.answers)}</pre>` : ""}
      <hr />
      <p style="color:#888;font-size:12px">Отправлено автоматически с сайта.</p>
    `;
    for (const to of RECIPIENTS) {
      await sendOne(to, subject, html);
    }
    return { ok: true };
  });

export const sendTestEmail = createServerFn({ method: "POST" }).handler(
  async () => {
    const subject = "Тестовое письмо · сайт школы Елены Кремнёвой";
    const html = `
      <h2>Это тестовое письмо ✅</h2>
      <p>Если ты это видишь — отправка заявок с сайта настроена и работает.</p>
      <p>Письма приходят на: <b>tacticfound@mail.ru</b> и <b>vaigach1993@gmail.com</b>.</p>
    `;
    for (const to of RECIPIENTS) {
      await sendOne(to, subject, html);
    }
    return { ok: true, sentTo: RECIPIENTS };
  },
);

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}