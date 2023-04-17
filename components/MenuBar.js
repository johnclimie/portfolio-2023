// Imports CSS
import styles from "../styles/MenuBar.module.css";

export default function MenuBar({ section }) {
    // Renders current date and time
    function getTime() {
        let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
        let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
        let currentDate = new Date();
        let day = days[ currentDate.getDay() ];
        let month = months[ currentDate.getMonth() ];
        let dayOfMonth = currentDate.getUTCDate();
        let hours = currentDate.getHours();
        let mins = currentDate.getMinutes();
        let ampm = hours >= 12? "PM" : "AM";
        hours = hours % 12;
        hours = hours ? hours : 12;
        mins = mins < 10 ? `0${mins}` : mins;
        var currentTime = `${day} ${month} ${dayOfMonth} ${hours}:${mins} ${ampm}`
        return currentTime
    }

    // Renders menu bar at the top of each section
    return (
        <>
            <div className={styles.menuBar}>
                <div className={styles.menuId}>
                    <p>JC</p>
                    <p>{section}</p>
                </div>

                <div className={styles.menuTime}>
                    <p>{getTime()}</p>
                </div>
            </div>
        </>
    )
};