import { GameCover } from "@/components/sections/game-cover";
import { Description } from "@/components/sections/description";
import { GameTitle } from "@/components/sections/game-title";
import { Container } from "@/components/layout/container";
import { Gallery } from "@/components/gallery";

export default function Home() {
  return (
    <Container>
      <div className=" flex-col flex items-center justify-center gap-4 pt-8">
        <div className="flex flex-col gap-8">
          <GameTitle />
          <GameCover />
          <Description />
        </div>

        <Gallery />
      </div>
    </Container>
  );
}
