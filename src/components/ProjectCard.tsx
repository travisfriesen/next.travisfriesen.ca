import {TechCard} from "@/components/TechCard";
import {FaGithub, FaLink} from "react-icons/fa6";

interface IProject {
    title: string;
    description: string;
    github?: string;
    link?: string;
    points: string[];
    tech: string[];
    type?: string;
}



const PointsList = ({points, type}: { points: string[], type: string }) => {
    const textColour = type === "job" ? "text-green-95 dark:text-green-10" : "text-gold-95 dark:text-gold-10";
    return (
        <div>
            <ul className={`ml-[3vw]`}>
                {points.map((point, index) => (
                    <li className={`font-manrope ${textColour} font-bold list-disc`} key={index}>{point}</li>
                ))}
            </ul>
        </div>
    );
};

const TechList = ({tech, type}: { tech: string[], type: string }) => {
    return (
        <div>
            <div className={`flex desktop:flex-row mobile:flex-col gap-2`}>
                {tech.map((tech, index) => (
                    <TechCard key={index} text={tech} type={type} />
                ))}
            </div>
        </div>
    );
};


export const ProjectCard = ({title, description, github, link, points, tech, type}: IProject) => {
    var bgColour = "bg-gold-30 dark:bg-gold-70";
    var textColour = "text-gold-95 dark:text-gold-10";
    if (type === "job") {
        bgColour = "bg-green-30 dark:bg-green-70";
        textColour = "text-green-95 dark:text-green-10";
    }

    if (!type) {
        type = "project";
    }

    return (
        <div>
            <div
                className={`w-[70vw] min-h-[20vh] rounded-2xl ${bgColour} mx-auto grid grid-8-auto desktop:grid-rows[auto_auto_auto_auto] mobile:grid-rows[auto_auto_auto_auto_auto] mb-14`}>
                <div className={`desktop:col-span-5 mobile:col-span-8 my-auto ${textColour}`}>
                    <h1 className={`text-2xl font-manrope font-bold mx-[2vw] mt-1`}>{title}</h1>
                </div>
                {(github || link) && (
                    <div className={`desktop:col-start-7 mobile:col-span-8 desktop:col-span-2 flex gap-10 m-auto desktop:mr-[2vw] desktop:pt-2 mobile:mt-1`}>
                        {github && <a href={github}><FaGithub size={40}/></a>}
                        {link && <a href={link}><FaLink size={40}/></a>}
                    </div>
                )}
                <div className={`col-span-8 my-auto mx-[2vw] mt-1`}>
                    <p className={`font-manrope ${textColour} font-bold whitespace-pre-wrap`}>{description}</p>
                </div>
                <div className={`col-span-8 mx-[2vw] my-2`}>
                    <PointsList points={points} type={type} />
                </div>
                <div className={`col-span-8 mx-[2vw] desktop:rtl:table my-2`}>
                    <TechList tech={tech} type={type}/>
                </div>
            </div>
        </div>
    )
}