import React, { lazy, Suspense } from "react";
import Link from "next/link";
import styles from "../landing.module.css";
import AboutMe from "../landing/aboutMe";
import Language from "../language/language";
import DarkMode from "../darkMode/darkMode";
import Edad from "../edad/edad";
import Linkedin from "../linkedin/linkedin";
import Proyectos from "../proyectos/proyectos";

// Lazy loading de componentes below-the-fold
const Github = lazy(() => import("../github/github"));
const Stack = lazy(() => import("../stack/stack"));
const English = lazy(() => import("../english/english"));
const VideoPortfolio = lazy(() => import("../videoPortfolio/videoPortfolio"));
const Whatsapp = lazy(() => import("../whatsapp/whatsapp"));
const Email = lazy(() => import("../email/email"));
const Spotify = lazy(() => import("../spotify/spotify"));
const SoyHenry = lazy(() => import("../soyHenry/soyhenry"));
const Recomendaciones = lazy(() => import("../recomendaciones/recomendaciones"));

// Fallback simple para Suspense
const ComponentLoader = () => <div style={{ minHeight: "100px" }} />;

/**
 * Componente GridLayout - Organiza los componentes en grid
 * Extrae la lógica de layout de page.jsx (SRP)
 * 
 * @param {Object} props
 * @param {string} props.language - Código de idioma actual ("ES" | "EN")
 * @param {Function} props.onLanguageChange - Callback para cambio de idioma
 */
export default function GridLayout({ language, onLanguageChange }) {
  return (
    <div className={styles.contenedorGrid}>
      <div className={styles.NoiseBackground}></div>
      
      <div className={styles.aboutMeContainer}>
        <AboutMe language={language} />
      </div>
      
      <div className={styles.languageContainer}>
        <Language language={language} setLanguage={onLanguageChange} />
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
        <Suspense fallback={<ComponentLoader />}>
          <VideoPortfolio language={language} />
        </Suspense>
      </div>
      
      <div className={styles.stackContainer}>
        <Suspense fallback={<ComponentLoader />}>
          <Stack />
        </Suspense>
      </div>
      
      <div className={styles.englishContainer}>
        <Suspense fallback={<ComponentLoader />}>
          <English language={language} />
        </Suspense>
      </div>
      
      <div className={styles.videoContainer}>
        <Suspense fallback={<ComponentLoader />}>
          <Github language={language} />
        </Suspense>
      </div>
      
      <div className={styles.whatsappContainer}>
        <Suspense fallback={<ComponentLoader />}>
          <Whatsapp />
        </Suspense>
      </div>
      
      <div className={styles.emailContainer}>
        <Suspense fallback={<ComponentLoader />}>
          <Email />
        </Suspense>
      </div>
      
      <div className={styles.henryContainer}>
        <Suspense fallback={<ComponentLoader />}>
          <SoyHenry language={language} />
        </Suspense>
      </div>
      
      <div className={styles.spotifyContainer}>
        <Suspense fallback={<ComponentLoader />}>
          <Spotify language={language} />
        </Suspense>
      </div>
      
      <div className={styles.recomendacionesContainer}>
        <Suspense fallback={<ComponentLoader />}>
          <Recomendaciones language={language} />
        </Suspense>
      </div>
    </div>
  );
}
