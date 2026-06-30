import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import source from "@/content/cookies.md?raw";

export const Route = createFileRoute("/cookies")({
  head: () => ({ meta: [{ title: "Политика обработки cookie — Тактика основателя" }] }),
  component: () => <LegalPage source={source} />,
});