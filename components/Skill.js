// Imports CSS
import styles from "../styles/Skill.module.css";

// Imports Next.js component
import Image from "next/image";

export default function Skill({ imgSrc, skill }) {
    // Renders skill that is looped through map function
    return (
        <>
            <div className={styles.skillContainer}>
                <Image 
                    priority
                    src={imgSrc}
                    width="1600"
                    height="1600"
                    className={styles.skillImg}
                    alt={skill}
                />
                <p>{skill}</p>
            </div>
        </>
    )
};