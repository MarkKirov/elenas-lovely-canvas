import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const STORAGE_KEY = "to_cookie_consent_v1";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {}
  }, []);

  const handle = (value: "accepted" | "rejected") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="mx-auto flex max-w-4xl flex-col gap-4 rounded-2xl border border-border bg-background/95 p-5 shadow-2xl backdrop-blur md:flex-row md:items-center md:justify-between">
        <p className="text-sm leading-relaxed text-foreground/85">
          Мы используем файлы cookie для корректной работы сайта, аналитики и улучшения сервиса.
          Продолжая использовать сайт, вы соглашаетесь с{" "}
          <Link to="/cookies" className="font-semibold text-primary hover:underline">
            Политикой обработки cookie
          </Link>{" "}
          и{" "}
          <Link to="/politika" className="font-semibold text-primary hover:underline">
            Политикой конфиденциальности
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => handle("rejected")}
            className="inline-flex h-10 items-center justify-center rounded-full border border-border bg-background px-4 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            Только необходимые
          </button>
          <button
            type="button"
            onClick={() => handle("accepted")}
            className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Принять
          </button>
        </div>
      </div>
    </div>
  );
}