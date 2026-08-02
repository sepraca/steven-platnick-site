import { ExternalLink } from "lucide-react";
import type { CitationEntry } from "@/lib/content";

export default function CitationItem({
  entry,
  index,
}: {
  entry: CitationEntry;
  index: number;
}) {
  return (
    <li className="flex gap-3 py-3 border-b border-border last:border-b-0">
      <span className="text-sm text-muted tabular-nums w-9 shrink-0 text-right pt-0.5">
        {index}.
      </span>
      <div className="flex-1 flex items-start justify-between gap-3">
        <p className="text-sm leading-relaxed text-foreground/90">
          {entry.citation}
        </p>
        {entry.link && (
          <a
            href={entry.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View publication"
            className="shrink-0 mt-0.5 text-muted hover:text-accent transition-colors"
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>
    </li>
  );
}
