import {Footer} from "@/components/Footer";
import Image from "next/image";
import travisImg from "../../../public/travis.png";
import {Header} from "@/components/Header";
import Link from "next/link";

export default function Vote() {
    return (
        <main className={`min-w-[260px]`}>
            <div>
                <div className={`w-[100vw] h-[100vh] min-h-[720px] flex`}>
                    <div className="flex bg-green-80 bg-gradient-to-tr from-green-90 to-green-50 rounded-lg h-[95vh] w-[95vw] min-h-[700px] m-auto">
                        <div className="my-auto ml-[5%]">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <p className="text-grey-90 text-6xl">Vote</p>
                            <div className={`text-[300%] sm:text-[600%] md:text-[750%] lg:text-[850%] xl:text-[1000%]`}>
                                <h1 className={`text-gold-50 font-array font-bold`}>TRAVIS</h1>
                                <h1 className={`text-gold-50 font-array font-bold`}>FRIESEN</h1>
                            </div>
                            <p className="text-grey-90 text-6xl">For CSSA President</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`desktop-only grid grid-cols-2 m-auto w-[95vw] h-fit py-[5%]`}>
                        <div className={`my-auto`}>
                            <Image className={`rounded-3xl m-auto`}
                                   src={travisImg}
                                   alt="Photo of Travis Friesen"
                                   width={500}
                                   height={500}
                            />
                        </div>
                        <div className={`font-manrope font-bold text-xl my-auto text-gold-95 ml-4 mr-4`}>
                            <p>
                                Currently I am serving as the CSSA Director of Technology. I am happy to announce that I am running for CSSA President.
                            </p>
                            <br/>
                            <p>
                                My goals this year are continue working on the various safety measures that have been put in place (like the lounge supervisor training, and discord moderation), continue to work on connecting students within the Computer Science community.
                            </p>
                            <br/>
                            <p>
                                I plan to continue working on events that bring the community together.
                            </p>
                        </div>
                    </div>

                    <div className={`mobile-only grid grid-rows-[auto_auto] m-auto w-[95vw] h-fit py-[5%]`}>
                        <div className={`my-auto`}>
                            <Image className={`rounded-3xl m-auto`}
                                   src={travisImg}
                                   alt="Photo of Travis Friesen"
                                   width={500}
                                   height={500}
                            />
                        </div>
                        <div className={`font-manrope font-bold text-xl my-auto text-gold-95 ml-4 mt-7`}>
                            <p>
                                Currently I am serving as the CSSA Director of Technology. I am happy to announce that I am running for CSSA President.
                            </p>
                            <br/>
                            <p>
                                My goals this year are continue working on the various safety measures that have been put in place (like the lounge supervisor training, and discord moderation), continue to work on connecting students within the Computer Science community.
                            </p>
                            <br/>
                            <p>
                                I plan to continue working on events that bring the community together.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Link href={`https://forms.office.com/r/YQjPTXQZJF`}>
                <Header text={"Voting open now!"}/>
                <Header text={" Click to vote."}/>
            </Link>
            <Footer/>
        </main>
    );
}