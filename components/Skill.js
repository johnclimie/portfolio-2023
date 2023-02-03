import Image from "next/image";
import styles from '../styles/Skill.module.css';
import pic from '../public/dog.jpg'

export default function Skill({ imgSrc, skill }) {
    return (
        <>
            <div className={styles.skillContainer}>
                <Image 
                    priority
                    // fill
                    src="/../public/dog.jpg"
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