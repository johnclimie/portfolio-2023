import styles from '../styles/Contact.module.css';

import LightWindowTop from "./LightWindowTop";
import MenuBar from "./MenuBar";

export default function ContactSection() {
    return (
        <>
            <div className={styles.contact} id="contact">
                <MenuBar section="Contact" />
                <div className={styles.contactContent}>
                    <div className={styles.contactWindow}>
                        <LightWindowTop title="contact-me.exe"/>
                        <div className={styles.contactWindowContent}>
                            <h1>Contact Me</h1>
                            <form className={styles.contactForm}>
                                <div className={styles.allInputsContainer}>
                                    <div className={styles.inputContainer}>
                                        <label htmlFor="name">name:</label>
                                        <input type="text" id="name"></input>
                                    </div>

                                    <div className={styles.inputContainer}>
                                        <label htmlFor="email">email:</label>
                                        <input type="text" id="email"></input>
                                    </div>

                                    <div className={styles.inputContainer}>
                                        <label htmlFor="msg">msg:</label>
                                        <textarea type="text" id="msg" rows="5"></textarea>
                                    </div>
                                </div>
                                <button>submit!</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className={styles.footer}>
                    <p>&copy; {new Date().getFullYear()} Created by John Climie. All Rights Reserved.</p>
                    <div>
                        
                    </div>
                </div>
            </div>
        </>
    )
};