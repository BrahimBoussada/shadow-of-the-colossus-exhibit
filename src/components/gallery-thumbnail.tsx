import Image from "next/image";
import Link from "next/link";

interface GalleryThumbnailProps {
  imageId: string;
  width: number;
  height: number;
}

export const GalleryThumbnail = ({
  imageId,
  width,
  height,
}: GalleryThumbnailProps) => {
  const imgPath = `/gallery/${imageId}`;
  return (
    <div className="relative">
      <Link
        href={imgPath}
        data-pswp-width={width.toString()}
        data-pswp-height={height.toString()}
        target="_blank"
      >
        <Image
          className="w-full aspect-video object-cover border border-neutral-900 "
          src={imgPath}
          width={width}
          height={height}
          quality={100}
          alt={"Game gallery image"}
        />
      </Link>
    </div>
  );
};
