import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { imageSize } from "image-size";

const contentDir = path.join(process.cwd(), "content");
const publicDir = path.join(process.cwd(), "public");

function readFile(name: string): string {
  return fs.readFileSync(path.join(contentDir, name), "utf8");
}

export interface CitationEntry {
  id: string;
  year?: number;
  link?: string;
  citation: string;
}

function splitDbChunks(raw: string) {
  return raw
    .split(/\n===\n/)
    .map((chunk) => chunk.trim())
    .filter(Boolean)
    .map((chunk) => matter(chunk));
}

function parseEntryDb(raw: string): CitationEntry[] {
  return splitDbChunks(raw).map(({ data, content }) => ({
    id: String(data.id),
    year: data.year ? Number(data.year) : undefined,
    link: data.link as string | undefined,
    citation: content.trim(),
  }));
}

export interface GalleryImage {
  id: string;
  image: string;
  caption: string;
  downloadable: boolean;
  width: number;
  height: number;
}

function getImageDimensions(imagePath: string): { width: number; height: number } {
  const buffer = fs.readFileSync(path.join(publicDir, imagePath));
  const { width, height } = imageSize(buffer);
  return { width, height };
}

export function getGalleryImages(): GalleryImage[] {
  return splitDbChunks(readFile("gallery.md")).map(({ data, content }) => {
    const image = String(data.image);
    return {
      id: String(data.id),
      image,
      caption: content.trim(),
      downloadable: data.downloadable !== false,
      ...getImageDimensions(image),
    };
  });
}

export function getPublications(): CitationEntry[] {
  return parseEntryDb(readFile("publications.md"));
}

export function getBookChapters(): CitationEntry[] {
  return parseEntryDb(readFile("book-chapters.md"));
}

export function getOtherPublications(): CitationEntry[] {
  return parseEntryDb(readFile("other-publications.md"));
}

export interface ProfileLinks {
  orcid?: string;
  googleScholar?: string;
  researchGate?: string;
  linkedin?: string;
  webOfScience?: string;
}

export interface Profile {
  name: string;
  tagline: string;
  location?: string;
  github?: string;
  links: ProfileLinks;
  bio: string;
}

export function getProfile(): Profile {
  const { data, content } = matter(readFile("profile.md"));
  return {
    name: data.name,
    tagline: data.tagline,
    location: data.location,
    github: data.github,
    links: data.links ?? {},
    bio: content.trim(),
  };
}

export function getCvMarkdown(): string {
  return readFile("cv.md");
}
