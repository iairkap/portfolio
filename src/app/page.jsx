"use client";
import { useEffect, lazy, Suspense } from "react";
import styles from "./landing.module.css";
import { setLanguage } from "./redux/languageSlice";
import { useDispatch } from "react-redux";
import Noise from "./helpers/noise";
import { useTheme, useLanguage } from "./hooks";
import GridLayoutV2 from "./components/layouts/GridLayoutV2";
import AboutMe from "./landing/aboutMe";
import AboutMeV2 from "./landing/aboutMeV2";
import HeroSection from "./heroSection/heroction";
import Language from "./language/language";
import DarkMode from "./darkMode/darkMode";
import Edad from "./edad/edad";
import Linkedin from "./linkedin/linkedin";
import English from "./english/english";
import Proyectos from "./proyectos/proyectos";
import Link from "next/link";

// Lazy loading solo para componentes pesados
const VideoPortfolio = lazy(() => import("./videoPortfolio/videoPortfolio"));
const Stack = lazy(() => import("./stack/stack"));
const Recomendaciones = lazy(() => import("./recomendaciones/recomendaciones"));

// Importar componentes ligeros directamente
import Github from "./github/github";
import Whatsapp from "./whatsapp/whatsapp";
import Email from "./email/email";

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
      {/* Desktop Grid Layout V2 */}
      <div className={styles.desktopLayout}>
        <GridLayoutV2 language={language} onLanguageChange={handleLanguageChange} />
      </div>

      {/* Mobile Layout */}
      <article className={styles.onlyMobile}>
        <HeroSection language={language} />

        {/* About Me */}
        <div className={styles.firstRow}>
          <AboutMeV2 language={language} />
        </div>

        {/* Language + Dark Mode */}
        <div className={styles.secondRow}>
          <Language language={language} setLanguage={handleLanguageChange} />
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
          <Suspense fallback={<ComponentLoader />}>
            <div className={styles.videoMobile}>
              <VideoPortfolio language={language} />
            </div>
          </Suspense>
          <Suspense fallback={<ComponentLoader />}>
            <Recomendaciones language={language} />
          </Suspense>
        </div>

        {/* Tech Stack */}
        <Suspense fallback={<ComponentLoader />}>
          <Stack />
        </Suspense>
      </article>

      <Noise />
    </main>
  );
}
