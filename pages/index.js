import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className={styles.intro}>
          <div className={styles.introWindow}>
            <div className={styles.windowTop}>
              <div>
                <div className={styles.green}></div>
                <div className={styles.yellow}></div>
                <div className={styles.red}></div>
              </div>

              <p>intro.txt</p>
            </div>

            <div className={styles.introContent}>
              <h1>John Climie</h1>
              <h2>Full-Stack Web Developer</h2>
              <div>
                <h2>About Me</h2>
                <h2>My Work</h2>
                <h2>Contact</h2>
              </div>
              <h2>Resume</h2>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
