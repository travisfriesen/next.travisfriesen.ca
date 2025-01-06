import Image from "next/image";
import {FrontCard} from "@/components/FrontCard";
import {ProfileCard} from "@/components/ProfileCard";

export default function Home() {
  return (
    <main>
      <FrontCard/>
        <ProfileCard/>
    </main>
  );
}
