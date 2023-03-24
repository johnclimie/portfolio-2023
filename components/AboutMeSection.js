import styles from '../styles/AboutMeSection.module.css';
import skillData from '../data/skill-data';

import LightWindowTop from './LightWindowTop';
import MenuBar from './MenuBar';
import Skill from './Skill';

export default function AboutMeSection() {
    return (
        <>
            <section className={styles.aboutMe}>
                <MenuBar />
                
                <div className={styles.aboutMeContent}>
                    <div className={styles.aboutMeContainer}>
                        <div className={styles.aboutMeWindow}>
                            <LightWindowTop title={"🗒️ about-me.txt"}/>

                            <div className={styles.aboutMeTxt}>
                                <div>
                                    <p>👨‍💻 John J Climie</p>
                                    <p>📍 Atlanta, GA</p>
                                    <p>📅 1/4/2023</p>
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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