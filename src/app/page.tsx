import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { getProfile } from "@/lib/content";
import ProfileLinksRow from "@/components/ProfileLinksRow";
import BioParagraph from "@/components/BioParagraph";

export default function Home() {
  const profile = getProfile();
  const [intro, career, education] = profile.bio.split("\n\n");

  return (
    <div>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <Image
            src="/images/modis-aqua-ship-tracks-2012.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-[0.28] dark:opacity-[0.22]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/85 to-background" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 py-16">
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-foreground">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg text-accent font-medium">{profile.tagline}</p>
          {profile.location && (
            <p className="mt-1 text-sm text-muted">{profile.location}</p>
          )}

          <div className="mt-8 max-w-2xl space-y-8 text-base leading-relaxed text-foreground/90">
            <BioParagraph text={intro} />
            <BioParagraph text={education} />

            <details className="group">
              <summary className="list-none [&::-webkit-details-marker]:hidden inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-accent">
                Further information
                <ChevronDown
                  size={15}
                  className="transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <div className="mt-3">
                <BioParagraph text={career} />
              </div>
            </details>
          </div>

          <div className="mt-8">
            <ProfileLinksRow profile={profile} />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6 py-16">
        <section className="grid gap-4 sm:grid-cols-3">
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
    </div>
  );
}
