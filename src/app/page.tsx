import Image from "next/image";
import {FrontCard} from "@/components/FrontCard";
import {ProfileCard} from "@/components/ProfileCard";
import {Header} from "@/components/Header";
import {ProjectCard} from "@/components/ProjectCard";

export default function Home() {
  return (
    <main>
        <div>
            <FrontCard/>
            <ProfileCard/>
        </div>
    </main>
  );
}
