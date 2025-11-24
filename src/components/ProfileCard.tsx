import Image from "next/image";
import travisImg from "../../public/travis.png";

export const ProfileCard = () => {
    return (
        <div>
            <div className={`grid desktop:grid-cols-2 mobile:grid-rows-[auto_auto] m-auto w-[95vw] h-fit py-[5%]`}>
                <div className={`my-auto`}>
                    <Image className={`rounded-3xl m-auto`}
                           src={travisImg}
                           alt="Photo of Travis Friesen"
                           width={500}
                           height={500}
                    />
                </div>
                <div className={`font-manrope font-bold text-xl my-auto text-gold-95 dark:text-gold-5 ml-4 mobile:mt-7`}>
                    <p>
                        I am a student working towards a degree in Computer Science University of Manitoba.
                    </p>
                    <br/>
                    <p>
                        Currently I’m working on a few websites, along with some Discord bots and a few other projects
                        that I’m cooking up.
                    </p>
                </div>
            </div>
        </div>
    )
}