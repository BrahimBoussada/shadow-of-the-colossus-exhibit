"use client";

import Image from "next/image";
import { GalleryThumbnail } from "@/components/gallery-thumbnail";
import { usePhotoSwipe } from "@/hooks/lightbox";
import Link from "next/link";
import { GameCover } from "@/components/sections/game-cover";
import { Description } from "@/components/sections/description";
import { GameTitle } from "@/components/sections/game-title";

export default function Home() {
  usePhotoSwipe("#gallery");

  return (
    <div className=" flex-col flex items-center justify-center">
      <div className="flex flex-col gap-4">
        <GameTitle />
        <GameCover />
        <Description />
      </div>

      <div>
        <div
          id="gallery"
          className="flex max-w-5xl mx-auto gap-1 mt-4 items-center flex-wrap md:flex-nowrap"
        >
          <GalleryThumbnail imageId={"1.jpg"} width={1920} height={1080} />
          <GalleryThumbnail imageId={"2.jpg"} width={1920} height={1080} />
          <GalleryThumbnail imageId={"3.png"} width={1920} height={1080} />
          <GalleryThumbnail imageId={"4.png"} width={1920} height={1080} />
          <GalleryThumbnail imageId={"5.png"} width={1920} height={1080} />
          <GalleryThumbnail imageId={"6.png"} width={1920} height={1080} />
        </div>
      </div>
    </div>
  );
}
