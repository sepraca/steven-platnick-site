import { ExternalLink, Star } from "lucide-react";
import type { Repo } from "@/lib/github";

export default function ProjectCard({ repo }: { repo: Repo }) {
  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-lg border border-border bg-surface p-5 transition-colors hover:border-accent"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-serif text-base font-semibold text-foreground group-hover:text-accent transition-colors">
          {repo.name}
        </h3>
        <ExternalLink
          size={15}
          className="shrink-0 mt-1 text-muted group-hover:text-accent transition-colors"
        />
      </div>

      {repo.description && (
        <p className="mt-2 text-sm text-muted leading-relaxed">
          {repo.description}
        </p>
      )}

      <div className="mt-4 flex items-center gap-4 text-xs text-muted">
        {repo.language && <span>{repo.language}</span>}
        {repo.stars > 0 && (
          <span className="inline-flex items-center gap-1">
            <Star size={12} />
            {repo.stars}
          </span>
        )}
      </div>
    </a>
  );
}
