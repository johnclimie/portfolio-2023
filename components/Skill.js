import Image from "next/image";
import styles from '../styles/Skill.module.css';

export default function Skill({ imgSrc, skill, key }) {
    return (
        <>
            <div className={styles.skillContainer} key={key}>
                <Image 
                    priority
                    src={imgSrc}
                    width="1600"
                    height="1600"
                    className={styles.skillImg}
                    alt=""
                />
                <p>{skill}</p>
            </div>
        </>
    )
}