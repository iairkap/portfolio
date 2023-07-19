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
            </div>
          </div>
        </main>
      </DarkModeContext.Provider>
    </LanguageContext.Provider>
  );
}
