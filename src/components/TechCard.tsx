interface ITechCard {
    text: string
    type?: string
}

export const TechCard = ({text, type}: ITechCard) => {
    const bgColour = type === "job" ? "bg-green-40 border-green-80 dark:bg-green-60 dark:border-green-40" : "bg-gold-40 border-gold-80 dark:bg-gold-60 dark:border-gold-40";
    const textColour = type === "job" ? "text-green-95 dark:text-green-20" : "text-gold-95 dark:text-gold-10";
    return (
        <div className={` border-[3px] ${bgColour} rounded-xl`}>
            <p className={`mobile:text-center font-manrope font-bold ${textColour} py-1 desktop:px-5 mobile:px-3 text-xl`}>{text}</p>
        </div>
    )
}