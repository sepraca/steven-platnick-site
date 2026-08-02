import { GraduationCap, IdCard, Library, Briefcase, Users, Code2 } from "lucide-react";
import type { Profile } from "@/lib/content";

export default function ProfileLinksRow({ profile }: { profile: Profile }) {
  const items = [
    profile.links.googleScholar && {
      href: profile.links.googleScholar,
      label: "Google Scholar",
      icon: GraduationCap,
    },
    profile.links.orcid && {
      href: profile.links.orcid,
      label: "ORCID",
      icon: IdCard,
    },
    profile.links.researchGate && {
      href: profile.links.researchGate,
      label: "ResearchGate",
      icon: Users,
    },
    profile.links.webOfScience && {
      href: profile.links.webOfScience,
      label: "Web of Science",
      icon: Library,
    },
    profile.links.linkedin && {
      href: profile.links.linkedin,
      label: "LinkedIn",
      icon: Briefcase,
    },
    profile.github && {
      href: `https://github.com/${profile.github}`,
      label: "GitHub",
      icon: Code2,
    },
  ].filter(Boolean) as { href: string; label: string; icon: typeof GraduationCap }[];

  return (
    <div className="flex flex-wrap gap-3">
      {items.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm text-muted hover:text-accent hover:border-accent transition-colors"
        >
          <Icon size={15} />
          {label}
        </a>
      ))}
    </div>
  );
}
