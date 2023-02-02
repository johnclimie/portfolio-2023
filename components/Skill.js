import Image from "next/image";
import styles from '../styles/Skill.module.css';
import pic from '../public/dog.jpg'

export default function Skill({ imgSrc, skill }) {
    return (
        <>
            <div className={styles.skillContainer}>
                <Image 
                    priority
                    src={pic}
                    className={styles.skillImg}
                    alt=""
                />
                <p>{skill}</p>
            </div>
        </>
    )
}