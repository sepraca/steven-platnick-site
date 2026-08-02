import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getProfile } from "@/lib/content";
import ProfileLinksRow from "@/components/ProfileLinksRow";

export default function Home() {
  const profile = getProfile();
  const [intro, career, education] = profile.bio.split("\n\n");

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <section>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-foreground">
          {profile.name}
        </h1>
        <p className="mt-3 text-lg text-accent font-medium">{profile.tagline}</p>
        {profile.location && (
          <p className="mt-1 text-sm text-muted">{profile.location}</p>
        )}

        <div className="mt-8 max-w-2xl space-y-8 text-base leading-relaxed text-foreground/90">
          <div className="space-y-4">
            <p>{intro}</p>
            <p>{education}</p>
          </div>
          <div className="space-y-4">
            <p>{career}</p>
          </div>
        </div>

        <div className="mt-8">
          <ProfileLinksRow profile={profile} />
        </div>
      </section>

      <section className="mt-16 grid gap-4 sm:grid-cols-3">
        {[
          {
            href: "/cv",
            title: "Curriculum Vitae",
            desc: "Positions, education, awards, and full professional record.",
          },
          {
            href: "/publications",
            title: "Publications",
            desc: "159 journal articles, book chapters, and other publications.",
          },
          {
            href: "/projects",
            title: "Projects",
            desc: "Public code repositories on GitHub.",
          },
        ].map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group rounded-lg border border-border bg-surface p-5 transition-colors hover:border-accent"
          >
            <h2 className="font-serif text-lg font-semibold text-foreground flex items-center justify-between">
              {card.title}
              <ArrowRight
                size={18}
                className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent"
              />
            </h2>
            <p className="mt-2 text-sm text-muted">{card.desc}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
