import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import source from "@/content/oferta.md?raw";

export const Route = createFileRoute("/oferta")({
  head: () => ({ meta: [{ title: "Публичная оферта — Тактика основателя" }] }),
  component: () => <LegalPage source={source} />,
});