export const FrontCard = () => {
    return (
        <div className={`w-[100vw] h-[100vh] min-h-[720px] flex`}>
            <div
                className="flex bg-green-80 dark:bg-green-20 bg-gradient-to-tr from-green-90 to-green-50 rounded-lg h-[95vh] w-[95vw] min-h-[700px] m-auto">
                <div className="my-auto ml-[5%]">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p className="text-green-5 text-4xl">Hi, I'm</p>
                    <div className={`text-[300%] sm:text-[600%] md:text-[750%] lg:text-[850%] xl:text-[1000%]`}>
                        <h1 className={`text-gold-50 font-array font-bold`}>TRAVIS</h1>
                        <h1 className={`text-gold-50 font-array font-bold`}>FRIESEN</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
