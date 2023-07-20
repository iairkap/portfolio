"use client";
import { useEffect } from "react";
import Image from "next/image";
import AboutMe from "./landing/aboutMe";
import Language from "./language/language";
import styles from "./landing.module.css";
import DarkMode from "./darkMode/darkMode";
import { LanguageContext } from "./contexts/LanguageContext";
import { DarkModeContext } from "./contexts/DarkModeContext";
import { useState } from "react";
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
import Noise from "./noise/noise";
import { useContext } from "react";

export default function Home() {
  const { language, setLanguage } = useContext(LanguageContext);
  const [darkMode, setDarkMode] = useState(false);

  // Esto se ejecutará cuando 'darkMode' cambie.
  useEffect(() => {
    // Cambia la clase CSS del body dependiendo de 'darkMode'.
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <main className={styles.effects}>
        <div>
          <div className={styles.contenedorPr}>
            <AboutMe />
            <div className={styles.contenedorPrB}>
              <div className={styles.prueba}>
                <Language />
                <DarkMode />
              </div>
            </div>
          </div>
          <div className={styles.segundoRenglon}>
            <Edad />
            <Linkedin />
            <a href="/proyects">
              <Proyectos />
            </a>
          </div>
          <div className={styles.tercerRenglon}>
            <Github />
            <Stack />
            <English />
          </div>
          <div className={styles.cuartoRenglon}>
            <VideoPortfolio />
            <Whatsapp />
            <Email />
          </div>
          <div className={styles.quintoRenglon}>
            <SoyHenry />
            <Spotify />
            <Recomendaciones />
          </div>
        </div>
        <Noise />
      </main>
    </DarkModeContext.Provider>
  );
}
