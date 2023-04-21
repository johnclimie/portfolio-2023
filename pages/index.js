// Import Head component from Next.js
import Head from "next/head";

// Import section components
import AboutMeSection from "../components/AboutMeSection";
import ContactMeSection from "../components/ContactMeSection.js";
import IntroSection from "../components/IntroSection";
import MyWorkSection from "../components/MyWorkSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>John Climie | Full Stack Web Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />

        {/* Renders social sharing for links */}
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="John Climie | Full-Stack Web Developer" />
        <meta property="og:description" content="View John's portfolio here" />
        <meta property="og:image" content="/project_imgs/personalPortfolio.png" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Changes theme color for mobile browsing */}
        <meta name="theme-color" content="#242424" />
      </Head>

      {/* Renders each section on page */}
      <main>
        <IntroSection />
        <AboutMeSection />
        <MyWorkSection />
        <ContactMeSection />
      </main>
    </>
  )
};
