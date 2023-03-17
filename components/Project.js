import styles from '../styles/Project.module.css';
import Image from 'next/image';
import DarkWindowTop from './DarkWindowTop.js';

export default function Project({ title, imgSrc, desc, stack, demo, src }) {
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
                        alt=""
                    />
                    <ul className={styles.projectInfo}>
                        <li>title: {title}</li>
                        <li className={styles.desc}>{desc}</li>
                        <li>Created with:</li>
                        <div className={styles.projectStack}>
                            <ul>
                                <li>Lorem</li>
                                <li>Ipsum</li>
                                <li>Dolor</li>
                                {stack.map(skill => {
                                    reutrn (
                                        <li>{skill}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        <li><a href={demo} target="_blank">demo 🚀</a></li>
                        <li><a href={src} target="_blank">source 📁</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}