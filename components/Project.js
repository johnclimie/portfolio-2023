import styles from '../styles/Project.module.css';
import Image from 'next/image';
import DarkWindowTop from './DarkWindowTop.js';

export default function Project({ title, imgSrc, desc, stack, demo, src}) {
    return (
        <>
            <div className={styles.projectContainer}>
                <DarkWindowTop title ={title} />
                <div className={styles.projectContent}>
                    <Image 
                        priority
                        src='/skill_imgs/mongo.png'
                        width="300"
                        height="300"
                        alt=""
                    />
                    <ul>
                        <li>title: Project 1</li>
                        <li>description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                        <li>Created with:</li>
                            <ul>
                                <li>Lorem</li>
                                <li>Ipsum</li>
                                <li>Dolor</li>
                            </ul>
                        <li>demo</li>
                        <li>source</li>
                    </ul>
                </div>
            </div>
        </>
    )
}