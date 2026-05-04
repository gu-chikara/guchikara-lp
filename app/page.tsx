import { existsSync } from "fs";
import { join } from "path";
import LPContent from "@/components/LPContent";

function heroExists(): boolean {
  try {
    return existsSync(join(process.cwd(), "public", "images", "hero.jpg"));
  } catch {
    return false;
  }
}

export default function Home() {
  const hasHero = heroExists();
  return <LPContent hasHero={hasHero} />;
}
