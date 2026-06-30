import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import source from "@/content/politika.md?raw";

export const Route = createFileRoute("/politika")({
  head: () => ({ meta: [{ title: "Политика конфиденциальности — Тактика основателя" }] }),
  component: () => <LegalPage source={source} />,
});