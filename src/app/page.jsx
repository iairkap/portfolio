"use client";
import { useEffect } from "react";
import Image from "next/image";
import AboutMe from "./landing/aboutMe";
import Language from "./language/language";
import styles from "./landing.module.css";
import DarkMode from "./darkMode/darkMode";
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
import Link from "next/link";
import { motion } from "framer-motion";
import { setLanguage, selectLanguage } from "./redux/languageSlice";
import { toggleDarkMode } from "./redux/darkm"; // add this

import { useSelector, useDispatch } from "react-redux";
import NoiseBackground from "./helpers/NoiseBackground";

import Noise from "./noise/noise";
import { useContext } from "react";

export default function Home() {
  const darkMode = useSelector((state) => state.darkMode); // updated from useState
  const dispatch = useDispatch();
  const language = useSelector(selectLanguage);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  // Esto se ejecutará cuando 'darkMode' cambie.
  useEffect(() => {
    // Cambia la clase CSS del body dependiendo de 'darkMode'.
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <main className={styles.effects}>
      <div>
        <div className={styles.NoiseBackground}></div>
        <div className={styles.contenedorPr}>
          <AboutMe language={language} />
          <div className={styles.contenedorPrB}>
            <div className={styles.prueba}>
              <Language
                language={language}
                setLanguage={(lang) => dispatch(setLanguage(lang))}
              />
              <DarkMode />
            </div>
          </div>
        </div>
        <div className={styles.segundoRenglon}>
          <Edad language={language} />
          <Linkedin language={language} />
          <Link href="/proyects">
            <Proyectos language={language} />
          </Link>
        </div>
        <div className={styles.tercerRenglon}>
          <Github language={language} />
          <Stack />
          <English language={language} />
        </div>
        <div className={styles.cuartoRenglon}>
          <VideoPortfolio language={language} />
          <Whatsapp />
          <Email />
        </div>
        <div className={styles.quintoRenglon}>
          <SoyHenry language={language} />
          <Spotify language={language} />
          <Recomendaciones language={language} />
        </div>
      </div>
      <Noise />
    </main>
  );
}
