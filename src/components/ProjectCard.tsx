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



const PointsList = ({points}: { points: string[] }) => {
    return (
        <div>
            <ul className={`ml-[3vw]`}>
                {points.map((point, index) => (
                    <li className={`font-manrope font-bold list-disc`} key={index}>{point}</li>
                ))}
            </ul>
        </div>
    );
};

const TechList = ({tech, type}: { tech: string[], type: string }) => {
    return (
        <div>
            <div className={`desktop-only flex flex-row gap-2`}>
                {tech.map((tech, index) => (
                    <TechCard key={index} text={tech} type={type} />
                ))}
            </div>

            <div className={`mobile-only flex flex-col gap-2`}>
                {tech.map((tech, index) => (
                    <TechCard key={index} text={tech} type={type} />
                ))}
            </div>
        </div>
    );
};


export const ProjectCard = ({title, description, github, link, points, tech, type}: IProject) => {
    var bgColour = "bg-gold-30";
    var textColour = "text-gold-95";
    if (type === "job") {
        bgColour = "bg-green-30";
        textColour = "text-green-95";
    }

    if (!type) {
        type = "project";
    }

    return (
        <div>
            <div
                className={`desktop-only w-[70vw] min-h-[20vh] rounded-2xl ${bgColour} mx-auto grid grid-8-auto grid-rows[auto_auto_auto_auto] mb-14`}>
                <div className={`col-span-5 my-auto ${textColour}`}>
                    <h1 className={`text-2xl font-manrope font-bold mx-[2vw] mt-1`}>{title}</h1>
                </div>
                {(github || link) && (
                    <div className={`col-start-7 col-span-2 flex gap-10 m-auto mr-[2vw] pt-2`}>
                        {github && <a href={github}><FaGithub size={40}/></a>}
                        {link && <a href={link}><FaLink size={40}/></a>}
                    </div>
                )}
                <div className={`col-span-8 my-auto mx-[2vw] mt-1`}>
                    <p className={`font-manrope font-bold whitespace-pre-wrap`}>{description}</p>
                </div>
                <div className={`col-span-8 mx-[2vw] my-2`}>
                    <PointsList points={points}/>
                </div>
                <div className={`col-span-8 mx-[2vw] rtl:table my-2`}>
                    <TechList tech={tech} type={type}/>
                </div>
            </div>
            <div
                className={`mobile-only w-[70vw] min-h-[20vh] rounded-2xl ${bgColour} mx-auto grid grid-8-auto grid-rows[auto_auto_auto_auto_auto] mb-14`}>
                <div className={`col-span-8 my-auto ${textColour}`}>
                    <h1 className={`text-2xl font-manrope font-bold mx-[2vw] mt-1`}>{title}</h1>
                </div>
                {(github || link) && (
                    <div className={`col-span-8 flex gap-10 m-auto py-3`}>
                        {github && <a href={github}><FaGithub size={50}/></a>}
                        {link && <a href={link}><FaLink size={50}/></a>}
                    </div>
                )}
                <div className={`col-span-8 my-auto mx-[2vw] mt-1`}>
                    <p className={`font-manrope font-bold whitespace-pre-wrap`}>{description}</p>
                </div>
                <div className={`col-span-8 mx-[2vw] my-2`}>
                    <PointsList points={points}/>
                </div>
                <div className={`col-span-8 mx-[2vw] my-2`}>
                    <TechList tech={tech} type={type}/>
                </div>

            </div>


        </div>
    )
}