import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getCvMarkdown } from "@/lib/content";

export const metadata: Metadata = {
  title: "Curriculum Vitae",
  description: "Full curriculum vitae for Steven Platnick.",
};

export default function CvPage() {
  const cv = getCvMarkdown();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
        Curriculum Vitae
      </h1>
      <p className="mt-2 text-sm text-muted">
        See also the{" "}
        <a href="/publications" className="text-accent hover:underline">
          Publications
        </a>{" "}
        page for the full journal article and book chapter list.
      </p>

      <article className="prose prose-neutral dark:prose-invert mt-10">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{cv}</ReactMarkdown>
      </article>
    </div>
  );
}
