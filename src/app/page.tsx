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

const projects = projectsData as IProject[];
const work = workData as IWork[];

export default function Home() {
    return (
        <main className={`min-w-[260px] bg-gold-5 dark:bg-gold-90`}>
            <div>
                <FrontCard/>
                <ProfileCard/>
            </div>
            <div className={`w-full bg-gold-10 dark:bg-gold-80 flex mx-auto flex-col`}>
                <Header text={"Work Experience"}/>
                {work.map((job, index) => (
                    <ProjectCard key={index} title={job.title} description={job.location} tech={job.tech}
                                 points={job.points} type={`job`}/>
                ))}
            </div>
            <div className={`w-full bg-gold-10 dark:bg-gold-80 flex mx-auto flex-col`}>
                <Header text={"Portfolio"}/>
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
            <div className={`w-full mx-auto`}>
                <Header text={"Contact"}/>
                <ContactCard/>
            </div>
        </main>
    );
}
