# Steven Platnick — Personal Site

A minimalist academic personal site built with Next.js (App Router), Tailwind CSS, and lucide-react icons. Content is stored as plain Markdown files in `content/` — no CMS, no database.

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Updating content

Everything you'd normally update lives in `content/*.md`. Edit, save, commit, push — Vercel rebuilds and redeploys automatically.

### About Me / bio — `content/profile.md`

Frontmatter has your name, tagline, location, GitHub username, and professional links (ORCID, Google Scholar, ResearchGate, LinkedIn, Web of Science). The body text below the `---` is your bio, rendered as paragraphs on the homepage.

### Full CV — `content/cv.md`

One long Markdown document using `##` headings for each CV section (Positions, Education, Awards, etc.) and `-` bullets for entries. To add a new award, position, or talk, just add a bullet under the right heading — it's rendered as-is on the `/cv` page. Standard Markdown works: `**bold**`, `*italics*`, nested bullets.

### Publications — `content/publications.md`, `content/book-chapters.md`, `content/other-publications.md`

These are "one file per section" databases. Each entry looks like:

```
---
id: pub-160
year: 2026
link: "https://doi.org/10.xxxx/example"
---
Author A., Author B., and Platnick S. Title of the paper. Journal Name 12 (3): 45-67.

===

---
id: pub-161
year: 2026
---
Next entry...
```

- Entries are separated by a line containing only `===`.
- `id` should be unique within the file (e.g. `pub-160`, `bc-8`, `other-6`).
- `year` and `link` are optional — omit either if unknown; the site just won't show a badge/link icon for that entry. (A handful of the original CV's citations don't state a year in plain text, so those are left without one rather than guessing.)
- The body text under the second `---` is the citation exactly as you want it displayed — write it however reads best; no special formatting is required.

**To add a new publication:** copy the block for an existing entry, paste it above or below (order doesn't matter — new entries are usually added at the top to match "most recent first"), update the fields and citation text.

The **Publications** page includes a live text-search box over the journal articles list — no maintenance needed, it just searches whatever text is in `publications.md`.

### Projects — `content/projects.md`

Same "one file per section" database pattern as the publications files. Each entry:

```
---
id: project-4
name: "Display name for the site"
url: "https://github.com/sepraca/repo-name"
private: true
---
Description shown on the card.
```

- `private: true` shows a "Private repository — contact for details" note on the card instead of pretending it's browsable; omit it (or set `false`) for public repos.
- Unlike the old version, this list is curated by hand rather than pulled live from GitHub — needed since private repos can't be fetched from the public API anyway, and it lets the display name/description differ from GitHub's own. To add a project, copy an existing block, give it a unique `id`, and fill in the fields.

## Deployment

This project is set up for [Vercel](https://vercel.com):

1. Push this repo to GitHub.
2. In the Vercel dashboard, "Add New Project" → import the GitHub repo. Vercel auto-detects Next.js; no config needed.
3. Every push to `main` redeploys automatically.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, static generation)
- [Tailwind CSS 4](https://tailwindcss.com) + `@tailwindcss/typography`
- [lucide-react](https://lucide.dev) for icons
- [gray-matter](https://github.com/jonschlinkert/gray-matter) + [react-markdown](https://github.com/remarkjs/react-markdown) for Markdown content
