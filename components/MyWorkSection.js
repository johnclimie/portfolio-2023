import styles from '../styles/MyWorkSection.module.css';
import projectData from '../data/project-data';

import MenuBar from "./MenuBar";
import Project from './Project';

export default function MyWorkSection() {
    return (
        <>
            <section className={styles.myWork}>
                <MenuBar />

                <div className={styles.myWorkContent}>
                    {projectData.map(project => {
                        return (
                            <Project title={project.title} imgSrc={project.imgSrc} desc={project.desc} stack={project.stack} demo={project.demo} src={project.src} key={project.title} />
                        )
                    })}
                </div>
            </section>
        </>
    )
};