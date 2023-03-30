import styles from "../styles/ContactMeSection.module.css";

import Image from "next/image";

import LightWindowTop from "./LightWindowTop";
import MenuBar from "./MenuBar";

export default function ContactMeSection() {
    return (
        <>
            <div className={styles.contact} id="contactMe">
                <MenuBar section="Contact Me" />
                <div className={styles.contactContent}>
                    <div className={styles.contactWindow}>
                        <LightWindowTop title="contact-me.exe"/>
                        <div className={styles.contactWindowContent}>
                            <h1>Contact Me</h1>
                            <form className={styles.contactForm} action="https://getform.io/f/f8531273-b7bc-40bd-9260-c90d9dff4946" method="POST">
                                <div className={styles.allInputsContainer}>
                                    <div className={styles.inputContainer}>
                                        <label htmlFor="name">name:</label>
                                        <input type="text" name="name"></input>
                                    </div>

                                    <div className={styles.inputContainer}>
                                        <label htmlFor="email">email:</label>
                                        <input type="text" name="email"></input>
                                    </div>

                                    <div className={styles.inputContainer}>
                                        <label htmlFor="msg">msg:</label>
                                        <textarea type="text" name="message" rows="5"></textarea>
                                    </div>
                                </div>
                                <button type="submit">submit!</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className={styles.footer}>
                    <div className={styles.socialIcons}>
                        <a href="https://github.com/johnclimie" target="_blank">
                            <Image src="/social_svgs/github.svg"
                                width="40"
                                height="40"
                                alt="GitHub SVG"
                            />
                        </a>

                        <a href="https://www.linkedin.com/in/john-climie-a0856b21a/" target="_blank">
                            <Image
                                src="/social_svgs/linkedin.svg"
                                width="40"
                                height="40"
                                alt="LinkedIn SVG"
                            />
                        </a>
                    </div>
                    <p>&copy; {new Date().getFullYear()} Created by John Climie. All Rights Reserved.</p>
                </div>
            </div>
        </>
    )
};