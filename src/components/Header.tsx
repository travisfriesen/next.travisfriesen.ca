interface IHeader {
    text: string;
}

export const Header = ({text}: IHeader) => {
    return (
        <div className={`mt-14 mb-14 ml-[10%]`}>
            <h1 className={`font-bold font-manrope text-gold-95 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl`}>{text}</h1>
        </div>
    )
}