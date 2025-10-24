import Image from "next/image";

export default function Home() {
  return (
    <div className=" flex-col flex items-center justify-center">
      <div className="flex flex-col gap-4">
        {/* GAME TITLE LOGO */}
        <div className="relative max-w-xs mx-auto mb-4">
          <Image
            className="w-full"
            src={"/game_logo.png"}
            height={1921}
            width={694}
            alt={"Shadow of the Colossus Game Title Logo"}
            priority
            quality={100}
          />
        </div>

        {/* GAME COVER */}
        <div className="relative max-w-xs mx-auto">
          <Image
            className="w-full"
            src={"/game_cover.jpg"}
            height={1051}
            width={1579}
            alt={"Shadow of the Colossus Game Cover"}
            priority
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}
