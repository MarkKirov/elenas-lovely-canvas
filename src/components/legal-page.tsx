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
        <ReactMarkdown
          components={{
            h1: ({ children }) => (
              <h1 className="mb-8 text-3xl font-black leading-tight tracking-tight md:text-4xl">{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className="mt-12 mb-4 text-xl font-black tracking-tight text-primary md:text-2xl">{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className="mt-8 mb-3 text-lg font-bold tracking-tight">{children}</h3>
            ),
            p: ({ children }) => (
              <p className="my-4 text-[15px] leading-relaxed text-foreground/85">{children}</p>
            ),
            ul: ({ children }) => <ul className="my-4 space-y-2 pl-6">{children}</ul>,
            ol: ({ children }) => <ol className="my-4 list-decimal space-y-2 pl-6">{children}</ol>,
            li: ({ children }) => (
              <li className="list-disc text-[15px] leading-relaxed text-foreground/85 marker:text-primary">
                {children}
              </li>
            ),
            strong: ({ children }) => <strong className="font-bold text-foreground">{children}</strong>,
            a: ({ children, href }) => (
              <a href={href} className="text-primary underline-offset-4 hover:underline" target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            ),
          }}
        >
          {source}
        </ReactMarkdown>
      </article>
    </div>
  );
}