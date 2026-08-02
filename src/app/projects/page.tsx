import type { Metadata } from "next";
import { Code2 } from "lucide-react";
import { getPublicRepos } from "@/lib/github";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description: "Public GitHub repositories by Steven Platnick.",
};

export default async function ProjectsPage() {
  const repos = await getPublicRepos();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
        Projects
      </h1>
      <p className="mt-2 text-sm text-muted">
        Public code repositories, pulled live from{" "}
        <a
          href="https://github.com/sepraca"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline inline-flex items-center gap-1"
        >
          <Code2 size={14} /> GitHub
        </a>
        .
      </p>

      {repos.length === 0 ? (
        <p className="mt-10 text-sm text-muted">
          No public repositories found (or GitHub is temporarily unavailable).
        </p>
      ) : (
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {repos.map((repo) => (
            <ProjectCard key={repo.name} repo={repo} />
          ))}
        </div>
      )}
    </div>
  );
}
