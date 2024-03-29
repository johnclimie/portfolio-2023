// Imports CSS
import styles from "../styles/Project.module.css";

// Imports Next.js components
import Image from "next/image";
import Link from "next/link";

// Imports components
import DarkWindowTop from "./DarkWindowTop.js";

export default function Project({ title, imgSrc, desc, stack, demo, src, }) {
    // Renders project that is looped through map function
    return (
        <>
            <div className={styles.projectContainer}>
                <DarkWindowTop title ={title} />
                <div className={styles.projectContent}>
                    <Image 
                        priority
                        src={imgSrc}
                        width="1600"
                        height="1600"
                        className={styles.projectImg}
                        alt={title + " img"}
                    />
                    <ul className={styles.projectInfo}>
                        <li>title: {title}</li>
                        <li className={styles.desc}>description: {desc}</li>
                        <li>Created with:</li>
                        <div className={styles.projectStack}>
                            <ul>
                                {stack.map(skill => {
                                    return (
                                        <li key={skill}>{skill}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        <li><Link href={demo} target="_blank" rel="noreferrer" className={styles.projectLink}>demo <span>🚀</span></Link></li>
                        <li><Link href={src} target="_blank" rel="noreferrer" className={styles.projectLink}>source <span>📁</span></Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
};