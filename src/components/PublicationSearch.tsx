"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { CitationEntry } from "@/lib/content";
import CitationItem from "@/components/CitationItem";

export default function PublicationSearch({
  entries,
}: {
  entries: CitationEntry[];
}) {
  const [query, setQuery] = useState("");

  const numbered = useMemo(
    () => entries.map((entry, i) => ({ entry, number: i + 1 })),
    [entries]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return numbered;
    return numbered.filter(({ entry }) =>
      entry.citation.toLowerCase().includes(q)
    );
  }, [query, numbered]);

  return (
    <div>
      <div className="relative max-w-sm">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by author, title, or journal…"
          className="w-full rounded-md border border-border bg-surface pl-9 pr-3 py-2 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent"
        />
      </div>

      <p className="mt-3 text-xs text-muted">
        {filtered.length} of {entries.length} publications
      </p>

      <ol className="mt-2">
        {filtered.map(({ entry, number }) => (
          <CitationItem key={entry.id} entry={entry} index={number} />
        ))}
      </ol>

      {filtered.length === 0 && (
        <p className="py-8 text-sm text-muted text-center">
          No publications match “{query}”.
        </p>
      )}
    </div>
  );
}
