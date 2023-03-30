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

                                <p>My name is John Climie. I am a full-stack web developer located in Atlanta, Georgia. Currently, I lean towards front-end development, however I am expanding my skills in backend development, as I specialize in the MERN stack. I am an IT major at Middle Georgia State University. In April of 2022, I achieved a full-stack web development certificate through Georgia Tech. Currently, I am practicing my skills in my own projects, which can be viewed below. I am currently looking for a career opportunity in my field that will benefit my career. If you would like to contact me with any opportunities, feel free to use the contact form below.</p>
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