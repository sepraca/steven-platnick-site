import type { Metadata } from "next";
import { getGalleryImages } from "@/lib/content";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Satellite and field-campaign imagery from Steven Platnick's research.",
};

export default function GalleryPage() {
  const images = getGalleryImages();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
        Gallery
      </h1>
      <p className="mt-2 text-sm text-muted">
        Satellite and field-campaign imagery from decades of cloud remote
        sensing research.
      </p>

      <div className="mt-10">
        <Gallery images={images} />
      </div>
    </div>
  );
}
