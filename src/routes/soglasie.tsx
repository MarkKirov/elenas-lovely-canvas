import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import source from "@/content/soglasie.md?raw";

export const Route = createFileRoute("/soglasie")({
  head: () => ({ meta: [{ title: "Согласие на обработку персональных данных — Тактика основателя" }] }),
  component: () => <LegalPage source={source} />,
});