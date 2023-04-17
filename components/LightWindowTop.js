// Imports CSS
import styles from "../styles/WindowTop.module.css";

export default function LightWindowTop({ title }) {
    // Renders top of window
    return (
        <>
            <div className={styles.lightWindowTop}>
                <div className={styles.buttonSelection}>
                    <div className={styles.red}></div>
                    <div className={styles.yellow}></div>
                    <div className={styles.green}></div>
                </div>

                <p className={styles.windowTitle}>
                    {title}
                </p>

                <div className={styles.buttonSelectionFiller}>
                    <div className={styles.red}></div>
                    <div className={styles.yellow}></div>
                    <div className={styles.green}></div>
                </div>
            </div>
        </>
    )
};