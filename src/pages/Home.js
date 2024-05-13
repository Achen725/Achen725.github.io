import React from "react";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Jobs from "../components/Jobs/Jobs";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import FixSocialIcon from "../components/SocialIcons/FixedSocialIcons";
function Home() {
    return (
        <>
          <Hero />
          <Projects />
          <Jobs />
          <About />
          <Contact />
          <Footer />
          <FixSocialIcon />
        </>
      );
}

export default Home;