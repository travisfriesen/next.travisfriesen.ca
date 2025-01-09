interface ITechCard {
    text: string
}

export const TechCard = ({text}: ITechCard) => {
    return(
        <div className={`bg-gold-40 border-[3px] border-gold-80 rounded-xl`}>
            <p className={`desktop-only font-manrope font-bold text-gold-95 py-1 px-5 text-xl`}>{text}</p>
            <p className={`mobile-only text-center font-manrope font-bold text-gold-95 py-1 px-3 text-xl`}>{text}</p>
        </div>
    )
}