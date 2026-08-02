import type { Metadata } from "next";
import {
  getBookChapters,
  getOtherPublications,
  getPublications,
} from "@/lib/content";
import PublicationSearch from "@/components/PublicationSearch";
import CitationItem from "@/components/CitationItem";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Journal articles, book chapters, and other publications by Steven Platnick.",
};

export default function PublicationsPage() {
  const publications = getPublications();
  const bookChapters = getBookChapters();
  const other = getOtherPublications();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
        Publications
      </h1>
      <p className="mt-2 text-sm text-muted">
        {publications.length} journal articles, {bookChapters.length} book
        chapters, and {other.length} other publications.
      </p>

      <section className="mt-10">
        <h2 className="font-serif text-xl font-semibold text-foreground">
          Journal Articles
        </h2>
        <div className="mt-4">
          <PublicationSearch entries={publications} />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-serif text-xl font-semibold text-foreground">
          Book Chapters
        </h2>
        <ol className="mt-4">
          {bookChapters.map((entry, i) => (
            <CitationItem key={entry.id} entry={entry} index={i + 1} />
          ))}
        </ol>
      </section>

      <section className="mt-16">
        <h2 className="font-serif text-xl font-semibold text-foreground">
          Other Publications &amp; Documents
        </h2>
        <ol className="mt-4">
          {other.map((entry, i) => (
            <CitationItem key={entry.id} entry={entry} index={i + 1} />
          ))}
        </ol>
      </section>
    </div>
  );
}
