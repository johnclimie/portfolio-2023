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

                                <p>I’m John Climie, a MERN stack web developer, student, and music enjoyer. I create websites and my own personal projects in my freetime. Currently, I mainly focus on front-end development, however I am expanding my skills into back-end development. In April of 2022, I achieved a certificate in full-stack web development from Georgia Tech. I am also currently an IT Student at Middle Georgia State University. </p>
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