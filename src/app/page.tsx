"use client";

import Image from "next/image";
import { GalleryThumbnail } from "@/components/gallery-thumbnail";
import { usePhotoSwipe } from "@/hooks/lightbox";
import Link from "next/link";

export default function Home() {
  usePhotoSwipe("#gallery");

  return (
    <div className=" flex-col flex items-center justify-center">
      <div className="flex flex-col gap-4">
        {/* GAME TITLE LOGO */}
        <h1 className="relative max-w-xs mx-auto mb-4">
          <Image
            className="w-full"
            src={"/game_logo.png"}
            height={1921}
            width={694}
            alt={"Shadow of the Colossus game title logo"}
            priority
            quality={100}
          />
        </h1>

        {/* GAME COVER */}
        <div className="relative max-w-xs mx-auto">
          <Image
            className="w-full border border-neutral-900"
            src={"/game_cover.jpg"}
            height={1051}
            width={1579}
            alt={"Shadow of the Colossus game cover"}
            priority
            quality={100}
          />
        </div>

        <h2 className="md:text-center max-w-2xl text-neutral-800 text-balance md:text-sm">
          Shadow of the Colossus is an action-adventure game developed by Team
          Ico and released in 2005 for the PlayStation 2, later remastered for
          subsequent platforms. Set in a vast, desolate world, players control
          Wander, a young man on a quest to revive a girl named Mono by
          defeating sixteen massive creatures known as Colossi. The game is
          renowned for its minimalist storytelling, breathtaking visuals, and
          innovative gameplay, blending exploration, puzzle-solving, and epic
          boss battles. Its emotional depth and atmospheric design have made it
          a critically acclaimed classic.
        </h2>
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
