import styles from '../styles/MyWorkSection.module.css';
import MenuBar from "./MenuBar";

export default function MyWorkSection() {
    return (
        <>
            <section className={styles.myWork}>
                <MenuBar />

                <div className={styles.myWorkContent}>
                    <p>test</p>
                </div>
            </section>
        </>
    )
}