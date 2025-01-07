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
          <div className={`w-full bg-gold-10 flex mx-auto flex-col`}>
              <Header text={"Portfolio"}/>
              <ProjectCard title={"Test"} description={"description"} github={"link"} link={"link"}
                           points={["point1", "point2"]}/>
          </div>
          <div className={`w-full mx-auto`}>
              <Header text={"Contact"}/>
          </div>
      </main>
  );
}
