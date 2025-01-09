import Image from "next/image";
import {FrontCard} from "@/components/FrontCard";
import {ProfileCard} from "@/components/ProfileCard";
import {Header} from "@/components/Header";
import {ProjectCard} from "@/components/ProjectCard";
import {Footer} from "@/components/Footer";
import {ContactCard} from "@/components/ContactCard";
import projectsData from '@/data/projects.json';

interface IProject {
    title: string;
    description: string;
    github?: string;
    link?: string;
    points: string[];
    tech: string[];
}

const mapProjectsData = (data: any): IProject[] => {
    return Object.values(data).map((project: any) => ({
        title: project.title,
        description: project.description,
        github: project.github,
        link: project.link,
        points: Object.values(project.points),
        tech: Object.values(project.tech),
    }));
};

const projects: IProject[] = mapProjectsData(projectsData);

export default function Home() {
  return (
      <main className={`min-w-[260px]`}>
          <div>
              <FrontCard/>
              <ProfileCard/>
          </div>
          <div className={`w-full bg-gold-10 flex mx-auto flex-col`}>
              <Header text={"Portfolio"}/>
              {projects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
              ))}
          </div>
          <div className={`w-full mx-auto`}>
              <Header text={"Contact"}/>
              <ContactCard/>
          </div>
          <Footer/>
      </main>
  );
}
