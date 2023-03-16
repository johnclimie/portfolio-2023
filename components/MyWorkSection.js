import styles from '../styles/MyWorkSection.module.css';
import MenuBar from "./MenuBar";
import Project from './Project';

export default function MyWorkSection() {
    return (
        <>
            <section className={styles.myWork}>
                <MenuBar />

                <div className={styles.myWorkContent}>
                    <Project />
                </div>
            </section>
        </>
    )
}