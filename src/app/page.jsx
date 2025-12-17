"use client";
import { useEffect, lazy, Suspense } from "react";
import AboutMe from "./landing/aboutMe";
import Language from "./language/language";
import styles from "./landing.module.css";
import DarkMode from "./darkMode/darkMode";
import Edad from "./edad/edad";
import Linkedin from "./linkedin/linkedin";
import Proyectos from "./proyectos/proyectos";
import Link from "next/link";
import { setLanguage, selectLanguage } from "./redux/languageSlice";
import { useSelector, useDispatch } from "react-redux";
import Noise from "./noise/noise";
import { useTheme, useLanguage } from "./hooks";

// Lazy loading de componentes below-the-fold
const Github = lazy(() => import("./github/github"));
const Stack = lazy(() => import("./stack/stack"));
const English = lazy(() => import("./english/english"));
const VideoPortfolio = lazy(() => import("./videoPortfolio/videoPortfolio"));
const Whatsapp = lazy(() => import("./whatsapp/whatsapp"));
const Email = lazy(() => import("./email/email"));
const Spotify = lazy(() => import("./spotify/spotify"));
const SoyHenry = lazy(() => import("./soyHenry/soyhenry"));
const Recomendaciones = lazy(() => import("./recomendaciones/recomendaciones"));

// Fallback simple para Suspense
const ComponentLoader = () => <div style={{ minHeight: "100px" }} />;

export default function Home() {
  const darkMode = useTheme();
  const dispatch = useDispatch();
  const language = useLanguage();

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <main className={styles.effects}>
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
        <Suspense fallback={<ComponentLoader />}>
          <Github />
        </Suspense>
        <div className={styles.secondRow}>
          <Suspense fallback={<ComponentLoader />}>
            <Whatsapp />
          </Suspense>
          <Suspense fallback={<ComponentLoader />}>
            <Email />
          </Suspense>
        </div>
        <Link href={"/audiovisual"}>
          <Suspense fallback={<ComponentLoader />}>
            <VideoPortfolio language={language} />
          </Suspense>
        </Link>
        <Suspense fallback={<ComponentLoader />}>
          <Stack />
        </Suspense>
      </article>
    </main>
  );
}
