interface IHeader {
    text: string;
}

export const Header = ({text}: IHeader) => {
    return(
        <div className={`mt-14 mb-14 ml-[10%]`}>
            <h1 className={`font-bold font-manrope text-8xl text-gold-95`}>{text}</h1>
        </div>
    )
}