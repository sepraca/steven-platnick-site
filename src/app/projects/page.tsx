import type { Metadata } from "next";
import { Code2 } from "lucide-react";
import { getProjects } from "@/lib/content";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description: "Code repositories by Steven Platnick.",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
        Projects
      </h1>
      <p className="mt-2 text-sm text-muted">
        Code repositories at{" "}
        <a
          href="https://github.com/sepraca"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline inline-flex items-center gap-1 align-middle"
        >
          <Code2 size={14} /> GitHub
        </a>
        .
      </p>

      {projects.length === 0 ? (
        <p className="mt-10 text-sm text-muted">No projects listed yet.</p>
      ) : (
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
