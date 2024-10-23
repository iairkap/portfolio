"use client";
import { useEffect } from "react";
import AboutMe from "./landing/aboutMe";
import Language from "./language/language";
import styles from "./landing.module.css";
import DarkMode from "./darkMode/darkMode";
import Edad from "./edad/edad";
import Linkedin from "./linkedin/linkedin";
import Proyectos from "./proyectos/proyectos";
import Github from "./github/github";
import Stack from "./stack/stack";
import English from "./english/english";
import VideoPortfolio from "./videoPortfolio/videoPortfolio";
import Whatsapp from "./whatsapp/whatsapp";
import Email from "./email/email";
import Spotify from "./spotify/spotify";
import SoyHenry from "./soyHenry/soyhenry";
import Recomendaciones from "./recomendaciones/recomendaciones";
import Link from "next/link";
import { setLanguage, selectLanguage } from "./redux/languageSlice";
import { useSelector, useDispatch } from "react-redux";
import Noise from "./noise/noise";

export default function Home() {
  const darkMode = useSelector((state) => state.darkMode.value); // updated from useState
  const dispatch = useDispatch();
  const language = useSelector(selectLanguage);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <main className={styles.effects}>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      ></link>
      <div className={styles.contenedorGrid}>
        <div className={styles.NoiseBackground}></div>
        <div className={styles.aboutMeContainer}>
          <AboutMe language={language} />
        </div>
        <div className={styles.languageContainer}>
          <Language
            language={language}
            setLanguage={(lang) => dispatch(setLanguage(lang))}
          />
        </div>
        <div className={styles.darkModeContainer}>
          <DarkMode />
        </div>
        <div className={styles.edadContainer}>
          <Edad language={language} />
        </div>
        <div className={styles.linkedinContainer}>
          <Linkedin language={language} />
        </div>
        <div className={styles.proyectosContainer}>
          <Link href="/projects">
            <Proyectos language={language} />
          </Link>
        </div>
        <div className={styles.githubContainer}>
          <VideoPortfolio language={language} />
        </div>
        <div className={styles.stackContainer}>
          <Stack />
        </div>
        <div className={styles.englishContainer}>
          <English language={language} />
        </div>
        <div className={styles.videoContainer}>
          <Github language={language} />
        </div>
        <div className={styles.whatsappContainer}>
          <Whatsapp />
        </div>
        <div className={styles.emailContainer}>
          <Email />
        </div>
        <div className={styles.henryContainer}>
          <SoyHenry language={language} />
        </div>
        <div className={styles.spotifyContainer}>
          <Spotify language={language} />
        </div>
        <div className={styles.recomendacionesContainer}>
          <Recomendaciones language={language} />
        </div>
      </div>
      <Noise />
      <article className={styles.onlyMobile}>
        <div className={styles.firstRow}>
          <AboutMe language={language} />
        </div>{" "}
        <div className={styles.secondRow}>
          <Language
            language={language}
            setLanguage={(lang) => dispatch(setLanguage(lang))}
          />
          <Edad language={language} />
        </div>
        <DarkMode />
        <div className={styles.secondRow}>
          <Linkedin language={language} />
          <English language={language} />
        </div>
        <Link href="/projects">
          <Proyectos language={language} />
        </Link>
        <Github />
        <div className={styles.secondRow}>
          <Whatsapp />
          <Email />
        </div>
        <Link href={"/audiovisual"}>
          <VideoPortfolio language={language} />
        </Link>
        <Stack />
      </article>
    </main>
  );
}
