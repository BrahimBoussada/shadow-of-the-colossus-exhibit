import Image from "next/image";

export const GameCover = () => {
  return (
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
  );
};
