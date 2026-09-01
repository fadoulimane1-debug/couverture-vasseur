import Image from 'next/image';

type Props = {
  src: string;
  alt: string; // requis — aucune image sans alternative textuelle
  caption?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
};

/** Enveloppe next/image : l'attribut alt est obligatoire par la signature. */
export default function Figure({
  src,
  alt,
  caption,
  width = 640,
  height = 360,
  priority = false,
  className = '',
}: Props) {
  return (
    <figure className={`overflow-hidden rounded-[4px] border border-ciel/20 bg-nuit-2 ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="h-auto w-full"
        sizes="(max-width: 768px) 100vw, 640px"
      />
      {caption ? (
        <figcaption className="border-t border-ciel/15 px-4 py-3 font-mono text-[0.72rem] uppercase tracking-label text-ciel/80">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
