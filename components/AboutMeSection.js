import styles from "../styles/AboutMeSection.module.css";
import skillData from "../data/skill-data";

import LightWindowTop from "./LightWindowTop";
import MenuBar from "./MenuBar";
import Skill from "./Skill";

export default function AboutMeSection() {
    function getDate() {
        let currentDate = new Date();
        let month = currentDate.getMonth();
        month = parseInt(month) + 1;
        let date = currentDate.getDate();
        let year = currentDate.getFullYear();

        return `${month}/${date}/${year}`
    }

    return (
        <>
            <section className={styles.aboutMe} id="aboutMe">
                <MenuBar section="About me" />
                
                <div className={styles.aboutMeContent}>
                    <div className={styles.aboutMeContainer}>
                        <div className={styles.aboutMeWindow}>
                            <LightWindowTop title={"🗒️ about-me.txt"}/>

                            <div className={styles.aboutMeTxt}>
                                <div>
                                    <p>👨‍💻 John J Climie</p>
                                    <p>📍 Atlanta, GA</p>
                                    <p>📅 {getDate()}</p>
                                </div>

                                <p>I’m <span>John Climie</span>, a <span>full-stack web developer</span> that specializes in the MERN stack. I am currently located in <span>Atlanta, Georgia</span>. I hold a certificate from Georgia Tech for full-stack web development, and currently I am a <span>student</span> at Middle Georgia State University, majoring in Information Technology.</p>
                                <p>In my freetime, I enjoy working on personal projects, listening to music, and going to concerts. It’s always fun to take inspiration from my life experiences and my environement to see what I can create. I am constantly trying to push myself to learn and create more and more.</p>
                            </div>
                        </div>

                        <div className={styles.skillsWindow}>
                            <LightWindowTop title={"📁 Skills"}/>

                            <div className={styles.skillsList}>
                                {skillData.map(skill => {
                                    return ( 
                                        <Skill imgSrc={skill.src} skill={skill.name} key={skill.name}/>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};