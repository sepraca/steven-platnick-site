import Image from "next/image";
import type { GalleryImage } from "@/lib/content";
import BioParagraph from "@/components/BioParagraph";

export default function Gallery({ images }: { images: GalleryImage[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {images.map((img) => (
        <figure key={img.id} className="space-y-2">
          <div className="relative aspect-square overflow-hidden rounded-lg border border-border bg-surface">
            <Image
              src={img.image}
              alt={img.caption}
              fill
              sizes="(min-width: 640px) 33vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="text-xs text-muted leading-relaxed">
            <BioParagraph text={img.caption} />
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
