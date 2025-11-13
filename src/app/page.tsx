import {FrontCard} from "@/components/FrontCard";
import {ProfileCard} from "@/components/ProfileCard";
import {Header} from "@/components/Header";
import {ProjectCard} from "@/components/ProjectCard";
import {Footer} from "@/components/Footer";
import {ContactCard} from "@/components/ContactCard";
import projectsData from '@/data/projects.json';
import workData from '@/data/work.json';

interface IProject {
    title: string;
    description: string;
    github?: string;
    link?: string;
    points: string[];
    tech: string[];
}

interface IWork {
    title: string;
    location: string;
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

const mapWorkData = (data: any): IWork[] => {
    return Object.values(data).map((work: any) => ({
        title: work.title,
        location: work.location,
        points: Object.values(work.points),
        tech: Object.values(work.tech),
    }));
}

const projects: IProject[] = mapProjectsData(projectsData);
const work: IWork[] = mapWorkData(workData);

export default function Home() {
  return (
      <main className={`min-w-[260px]`}>
          <div>
              <FrontCard/>
              <ProfileCard/>
          </div>
          <div className={`w-full bg-gold-10 flex mx-auto flex-col`}>
              <Header text={"Work Experience"}/>
              {work.map((job, index) => (
                  <ProjectCard key={index} title={job.title} description={job.location} tech={job.tech} points={job.points} />
              ))}
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
