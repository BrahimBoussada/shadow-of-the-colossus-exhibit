import Image from "next/image";
import React from "react";

export const GameTitle = () => {
  return (
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
  );
};
