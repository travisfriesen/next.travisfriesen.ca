interface ITechCard {
    text: string
    type?: string
}

export const TechCard = ({text, type}: ITechCard) => {
    const bgColour = type === "job" ? "bg-green-40 border-green-80" : "bg-gold-40 border-gold-80";
    const textColour = type === "job" ? "text-green-95" : "text-gold-95";
    return (
        <div className={` border-[3px] ${bgColour} rounded-xl`}>
            <p className={`desktop-only font-manrope font-bold ${textColour} py-1 px-5 text-xl`}>{text}</p>
            <p className={`mobile-only text-center font-manrope font-bold ${textColour} py-1 px-3 text-xl`}>{text}</p>
        </div>
    )
}