import styles from '../styles/DarkWindowTop.module.css'

export default function DarkWindowTop({ title }) {
    return (
        <>
            <div className={styles.windowTop}>
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
}