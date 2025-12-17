"use client";
import { useEffect, lazy, Suspense } from "react";
import styles from "./landing.module.css";
import { setLanguage } from "./redux/languageSlice";
import { useDispatch } from "react-redux";
import Noise from "./noise/noise";
import { useTheme, useLanguage } from "./hooks";
import GridLayout from "./components/layouts/GridLayout";
import AboutMe from "./landing/aboutMe";
import Language from "./language/language";
import DarkMode from "./darkMode/darkMode";
import Edad from "./edad/edad";
import Linkedin from "./linkedin/linkedin";
import English from "./english/english";
import Proyectos from "./proyectos/proyectos";
import Link from "next/link";

// Lazy loading para mobile
const Github = lazy(() => import("./github/github"));
const Whatsapp = lazy(() => import("./whatsapp/whatsapp"));
const Email = lazy(() => import("./email/email"));
const VideoPortfolio = lazy(() => import("./videoPortfolio/videoPortfolio"));
const Stack = lazy(() => import("./stack/stack"));

// Fallback simple para Suspense
const ComponentLoader = () => <div style={{ minHeight: "100px" }} />;

export default function Home() {
  const darkMode = useTheme();
  const dispatch = useDispatch();
  const language = useLanguage();

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  const handleLanguageChange = (lang) => dispatch(setLanguage(lang));

  return (
    <main className={styles.effects}>
      {/* Desktop Grid Layout */}
      <GridLayout language={language} onLanguageChange={handleLanguageChange} />

      {/* Mobile Layout */}
      <article className={styles.onlyMobile}>
        <div className={styles.firstRow}>
          <AboutMe language={language} />
        </div>
        <div className={styles.secondRow}>
          <Language language={language} setLanguage={handleLanguageChange} />
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
          <Github language={language} />
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

      <Noise />
    </main>
  );
}
