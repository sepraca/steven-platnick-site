import type { Metadata } from "next";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getCvMarkdown } from "@/lib/content";

export const metadata: Metadata = {
  title: "Curriculum Vitae",
  description: "Full curriculum vitae for Steven Platnick.",
};

const FIELD_CAMPAIGN_MARKER = "**Major Airborne Field Campaign Participation**";

export default function CvPage() {
  const cv = getCvMarkdown();
  const splitIndex = cv.indexOf(FIELD_CAMPAIGN_MARKER);
  const before = splitIndex === -1 ? cv : cv.slice(0, splitIndex);
  const after = splitIndex === -1 ? "" : cv.slice(splitIndex);

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
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{before}</ReactMarkdown>

        {after && (
          <div className="not-prose mb-6 w-full sm:float-right sm:ml-6 sm:mb-4 sm:w-48">
            <div className="relative aspect-video sm:aspect-square overflow-hidden rounded-lg border border-border">
              <Image
                src="/images/ship-track-mast-rc10.jpg"
                alt="A ship track viewed from the NASA ER-2 during the MAST field campaign, 1994"
                fill
                sizes="(min-width: 640px) 192px, 100vw"
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-xs text-muted leading-relaxed">
              A ship track viewed from the NASA ER-2 during the MAST field
              campaign (RC-10 camera), 1994.
            </p>
          </div>
        )}

        <ReactMarkdown remarkPlugins={[remarkGfm]}>{after}</ReactMarkdown>
      </article>
    </div>
  );
}
