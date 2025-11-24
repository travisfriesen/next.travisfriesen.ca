interface ITechCard {
    text: string
    type?: string
}

export const TechCard = ({text, type}: ITechCard) => {
    const bgColour = type === "job" ? "bg-green-40 border-green-80" : "bg-gold-40 border-gold-80";
    const textColour = type === "job" ? "text-green-95" : "text-gold-95";
    return (
        <div className={` border-[3px] ${bgColour} rounded-xl`}>
            <p className={`mobile:text-center font-manrope font-bold ${textColour} py-1 desktop:px-5 mobile:px-3 text-xl`}>{text}</p>
        </div>
    )
}