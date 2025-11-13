import {FaEnvelope, FaGithub, FaLinkedin} from "react-icons/fa6";

export const ContactCard = () => {
    return(
        <div className={`flex flex-col gap-6 py-[5vh]`}>
            <div className={`m-auto w-[65vw] text-gold-95 text-xl font-manrope font-bold`}>
                <p>If you are interested in more of my work, I would encourage you to check out my GitHub.</p>
                <br/>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p>I'm also on LinkedIn, feel free to connect with me there!</p>
                <br/>
                <p>If you are interested in contacting me, I would encourage you to email me at
                    travis[at]travisfriesen.ca</p>
            </div>
            <div className={`flex m-auto gap-[4vw] py-5`}>
                <a href={"https://github.com/travisfriesen"}><FaGithub size={60}/></a>
                {/*<a href={"mailto:travis@travisfriesen.ca"}><FaEnvelope size={60}/></a>*/}
                <a href={"https://linkedin.com/in/travisfriesen"}><FaLinkedin size={60}/></a>
            </div>
        </div>
    )
}