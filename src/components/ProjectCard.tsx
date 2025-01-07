interface IProject {
    title: string;
    description: string;
    github: string;
    link: string;
    points: string[];
}

export const ProjectCard = ({title, description, github, link, points}: IProject) => {
    return(
        <div className={`w-[70vw] min-h-[20vh] rounded-2xl bg-gold-30 mx-auto grid grid-cols-8 grid-rows-4 mb-14`}>
            <div className={``}>

            </div>

        </div>
    )
}