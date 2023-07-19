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
export default function Home() {
  const [language, setLanguage] = useState("ES");
  const [darkMode, setDarkMode] = useState(false);

  // Esto se ejecutará cuando 'darkMode' cambie.
  useEffect(() => {
    // Cambia la clase CSS del body dependiendo de 'darkMode'.
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        <main>
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
              <Proyectos />
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
              <Spotify />
            </div>
          </div>
        </main>
      </DarkModeContext.Provider>
    </LanguageContext.Provider>
  );
}
