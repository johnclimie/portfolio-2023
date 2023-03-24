import styles from "../styles/IntroSection.module.css";

import DarkWindowTop from "./DarkWindowTop";

export default function IntroSection() {
    return (
        <>
            <section className={styles.intro}>
                <div className={styles.introWindow}>
                    <DarkWindowTop title="🗒️ intro.txt"/>

                    <div className={styles.introContent}>
                        <h1 className={styles.name}>John Climie</h1>
                        <h2 className={styles.careerName}>Full-Stack Web Developer</h2>

                        <hr />

                        <div className={styles.introLinks}>
                            <h2>About Me</h2>
                            <h2>My Work</h2>
                            <h2>Contact</h2>
                        </div>
                        <h2 className={styles.resumeLink}>Resume</h2>
                    </div>
                </div>
            </section>
        </>
    )
};