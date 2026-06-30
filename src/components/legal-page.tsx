import { Link } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";

export function LegalPage({ source }: { source: string }) {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-3xl px-6 py-6">
          <Link to="/" className="text-sm font-bold uppercase tracking-[0.18em] text-primary hover:underline">
            ← На главную
          </Link>
        </div>
      </div>
      <article className="mx-auto max-w-3xl px-6 py-16">
        <div className="prose prose-neutral max-w-none prose-headings:font-black prose-headings:tracking-tight prose-h1:text-3xl md:prose-h1:text-4xl prose-h2:text-xl prose-h2:mt-10 prose-h2:text-primary prose-p:text-foreground/85 prose-p:leading-relaxed prose-li:text-foreground/85 prose-strong:text-foreground prose-a:text-primary">
          <ReactMarkdown>{source}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
}