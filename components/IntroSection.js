import styles from "../styles/IntroSection.module.css";

import Link from "next/link";

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
                            <Link href="#aboutMe" className={styles.introLink} scroll={false}>About Me</Link>
                            <Link href="#myWork" className={styles.introLink} scroll={false}>My Work</Link>
                            <Link href="#contactMe" className={styles.introLink} scroll={false}>Contact Me</Link>
                        </div>
                        <Link href="https://www.google.com" className={styles.resumeLink}>Resume</Link>
                    </div>
                </div>
            </section>
        </>
    )
};