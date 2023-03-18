import styles from '../styles/Project.module.css';
import Image from 'next/image';
import DarkWindowTop from './DarkWindowTop.js';

export default function Project({ title, imgSrc, desc, stack, demo, src, key }) {
    return (
        <>
            <div className={styles.projectContainer} key={key}>
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
                        <li className={styles.desc}>description: {desc}</li>
                        <li>Created with:</li>
                        <div className={styles.projectStack}>
                            <ul>
                                {stack.map(skill => {
                                    return (
                                        <li>{skill}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        <li><a href={demo} target="_blank" rel="noreferrer">demo <span>🚀</span></a></li>
                        <li><a href={src} target="_blank" rel="noreferrer">source <span>📁</span></a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}