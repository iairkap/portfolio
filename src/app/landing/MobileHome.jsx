import React from "react";
import Link from "next/link";
import styles from "../landing.module.css";
import HeroSection from "../heroSection/heroction";
import AboutMeV2 from "./aboutMeV2";
import Language from "../language/language";
import DarkMode from "../darkMode/darkMode";
import Edad from "../edad/edad";
import English from "../english/english";
import Proyectos from "../proyectos/proyectos";
import Github from "../github/github";
import VideoPortfolio from "../videoPortfolio/videoPortfolio";
import Stack from "../stack/stack";
import Recomendaciones from "../recomendaciones/recomendaciones";

export default function MobileHome({ language, onLanguageChange }) {
  return (
    <article className={styles.onlyMobile}>
      <HeroSection language={language} />

      {/* About Me */}
      <div className={styles.firstRow}>
        <AboutMeV2 language={language} />
      </div>

      {/* Language + Dark Mode */}
      <div className={styles.secondRow}>
        <Language language={language} setLanguage={onLanguageChange} />
        <DarkMode />
      </div>

      {/* Age + English Level */}
      <div className={styles.secondRow}>
        <Edad language={language} />
        <English language={language} />
      </div>

      {/* Portfolio */}
      <Link href="/projects" className={styles.projectsMobile}>
        <Proyectos language={language} />
      </Link>

      {/* GitHub */}
      <div className={styles.githubMobile}>
        <Github language={language} />
      </div>

      {/* Audiovisual + Testimonios */}
      <div className={styles.secondRow}>
        <div className={styles.videoMobile}>
          <VideoPortfolio language={language} />
        </div>
        <Recomendaciones language={language} />
      </div>

      {/* Tech Stack */}
      <Stack />
    </article>
  );
}
