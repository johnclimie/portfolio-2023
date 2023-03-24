import styles from '../styles/MenuBar.module.css';

export default function MenuBar() {
    const currentTime = new Date;

    console.log(currentTime.getHours());

    return (
        <>
            <div className={styles.menuBar}>
                <div className={styles.menuId}>
                <p>JC</p>
                <p>About Me</p>
                </div>

                <div className={styles.menuTime}>
                <p>Wed Jan 4 2:16 PM</p>
                </div>
            </div>
        </>
    )
};