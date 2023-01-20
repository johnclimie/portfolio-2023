import Image from "next/image";
import styles from '../styles/Skill.module.css';

export default function Skill({ imgSrc, skill }) {
    return (
        <>
            <Image 
            priority
            src={imgSrc}
            alt=""
            />
            <p>{skill}</p>
        </>
    )
}