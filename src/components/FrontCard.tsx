export const FrontCard = () => {
    return(
        <div className={`w-[100vw] h-[100vh] min-h-[720px] flex`}>
            <div className="flex bg-green-80 bg-gradient-to-tr from-green-90 to-green-50 rounded-lg h-[95vh] w-[95vw] min-h-[700px] m-auto">
                <div className="my-auto ml-[5%]">
                    <p className="text-grey-90 text-4xl">Hi, I'm</p>
                    <h1 className={`text-gold-50 text-[1000%] font-array font-bold`}>TRAVIS</h1>
                    <h1 className={`text-gold-50 text-[1000%] font-array font-bold`}>FRIESEN</h1>
                </div>
            </div>
        </div>
    )
}
