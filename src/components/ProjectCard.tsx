import { ExternalLink, Lock } from "lucide-react";
import type { Project } from "@/lib/content";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-lg border border-border bg-surface p-5 transition-colors hover:border-accent"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-serif text-base font-semibold text-foreground group-hover:text-accent transition-colors">
          {project.name}
        </h3>
        <ExternalLink
          size={15}
          className="shrink-0 mt-1 text-muted group-hover:text-accent transition-colors"
        />
      </div>

      <p className="mt-2 text-sm text-muted leading-relaxed">
        {project.description}
      </p>

      {project.private && (
        <div className="mt-4 inline-flex w-fit items-center gap-1.5 text-xs text-muted">
          <Lock size={12} />
          Private repository — contact for details
        </div>
      )}
    </a>
  );
}
