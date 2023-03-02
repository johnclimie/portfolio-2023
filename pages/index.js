import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Skill from '../components/Skill'
import DarkWindowTop from '../components/DarkWindowTop'
import LightWindowTop from '../components/LightWindowTop'
import skillData from '../data/skill-data'
import IntroSection from '../components/IntroSection'


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
        {/* <section className={styles.intro}>
          <div className={styles.introWindow}>
            <DarkWindowTop title="intro.txt"/>

            <div className={styles.introContent}>
              <h1 className={styles.name}>John Climie</h1>
              <h2 className={styles.careerName}>Full-Stack Web Developer</h2>

              <hr />

              <div className={styles.introLinks}>
                <h2>About Me</h2>
                <h2>My Work</h2>
                <h2>Contact</h2>
              </div>
              <h2 className={styles.resumeLink}>Resume</h2>
            </div>
          </div>
        </section> */}

        <IntroSection />

        <section className={styles.aboutMe}>
          <div className={styles.menuBar}>
            <div className={styles.menuId}>
              <p>JC</p>
              <p>About Me</p>
            </div>

            <div className={styles.menuTime}>
              <p>Wed Jan 4 2:16 PM</p>
            </div>
          </div>
          
          <div className={styles.aboutMeContent}>
            <div className={styles.aboutMeGrid}>
              <div className={styles.aboutMeTxt}>
                <LightWindowTop title={"about-me.txt"}/>

                <div className={styles.aboutMeTxtContent}>
                  <div>
                    <p>👨‍💻 John J Climie</p>
                    <p>📍 Atlanta, GA</p>
                    <p>📅 1/4/2023</p>
                  </div>

                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>

              <div className={styles.skillsFolder}>
                <LightWindowTop title={"about-me.txt"}/>

                <div className={styles.skillsList}>
                  {skillData.map(skill => {
                    return ( 
                      <Skill imgSrc={skill.src} skill={skill.name} key={skill.name}/>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
