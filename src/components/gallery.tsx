"use client";

import { usePhotoSwipe } from "@/hooks/lightbox";
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

export const Gallery = () => {
  usePhotoSwipe("#gallery");

  return (
    <div>
      <div
        id="gallery"
        className="flex max-w-5xl mx-auto gap-1 mt-4 items-center flex-wrap md:flex-nowrap"
      >
        <GalleryThumbnail imageId={"1.jpg"} width={1920} height={1080} />
        <GalleryThumbnail imageId={"2.jpg"} width={1920} height={1080} />
        <GalleryThumbnail imageId={"3.jpg"} width={1920} height={1080} />
        <GalleryThumbnail imageId={"4.jpg"} width={1920} height={1080} />
        <GalleryThumbnail imageId={"5.jpg"} width={1920} height={1080} />
        <GalleryThumbnail imageId={"6.jpg"} width={1920} height={1080} />
      </div>
    </div>
  );
};
