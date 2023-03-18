import styles from '../styles/Contact.module.css'

import MenuBar from "./MenuBar"
import LightWindowTop from "./LightWindowTop"

export default function Contact() {
    return (
        <>
            <div className={styles.contact}>
                <MenuBar />
                <div className={styles.contactContent}>
                    <div className={styles.contactWindow}>
                        <LightWindowTop title="contact-me.exe"/>
                        <div>
                            <h1>Contact Me</h1>
                            <p>you can email me at johnclimie00@gmail.com or you can fill out this form</p>
                            <form>
                                <div>
                                    <div>
                                        <label htmlFor="name">name</label>
                                        <input type="text" id="name"></input>
                                    </div>

                                    <div>
                                        <label htmlFor="email">email</label>
                                        <input type="text" id="email"></input>
                                    </div>
                                </div>

                                <label htmlFor="msg">msg</label>
                                <input type="text" id="msg"></input>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}