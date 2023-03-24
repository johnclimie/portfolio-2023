import styles from '../styles/MenuBar.module.css';

export default function MenuBar() {

    function getTime() {
        let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        let months = ['January','February','March','April','May','June','July','August','September','October','November','December']

        let currentDate = new Date();
        let day = days[ currentDate.getDay() ];
        let month = months[ currentDate.getMonth() ];
        let dayOfMonth = currentDate.getUTCDate();
        let hours = currentDate.getHours();
        let mins = currentDate.getMinutes();
        let ampm = hours >= 12? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        mins = mins < 10 ? `0${mins}` : mins;
        var currentTime = `${day} ${month} ${dayOfMonth} ${hours}:${mins} ${ampm}`
        return currentTime
    }

    console.log(getTime());
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