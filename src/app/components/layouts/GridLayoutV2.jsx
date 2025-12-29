import React, { lazy, Suspense } from "react";
import Link from "next/link";
import styles from "../../landing.v2.module.css";
import AboutMeV2 from "../../landing/aboutMeV2";
import Language from "../../language/language";
import DarkMode from "../../darkMode/darkMode";
import Edad from "../../edad/edad";
import Linkedin from "../../linkedin/linkedin";
import Proyectos from "../../proyectos/proyectos";
import CardSpotlight from "../ui/CardSpotlight";

// Lazy loading de componentes below-the-fold
const Github = lazy(() => import("../../github/github"));
const Stack = lazy(() => import("../../stack/stack"));
const English = lazy(() => import("../../english/english"));
const VideoPortfolio = lazy(() => import("../../videoPortfolio/videoPortfolio"));
const Whatsapp = lazy(() => import("../../whatsapp/whatsapp"));
const Email = lazy(() => import("../../email/email"));
const Spotify = lazy(() => import("../../spotify/spotify"));
const SoyHenry = lazy(() => import("../../soyHenry/soyhenry"));
const Recomendaciones = lazy(() => import("../../recomendaciones/recomendaciones"));
const HeroSection = lazy(() => import("../../heroSection/heroction"));
// Fallback simple para Suspense
const ComponentLoader = () => <div style={{ minHeight: "100px" }} />;

/**
 * GridLayoutV2 - Nueva versión del layout
 * Con título principal fuera del card de AboutMe
 *
 * @param {Object} props
 * @param {string} props.language - Código de idioma actual ("ES" | "EN")
 * @param {Function} props.onLanguageChange - Callback para cambio de idioma
 */
export default function GridLayoutV2({ language, onLanguageChange }) {
  return (
    <div className={styles.contenedorGrid}>
      {/* Hero Title - 1/3 of viewport height */}
      <HeroSection language={language} />

      <section className={styles.gridSection}>
        {/* Main Grid Container */}
        <div className={styles.mainGrid}>
          {/* Left Column - About Me (sin título) */}
          <div className={styles.leftColumn}>
            <CardSpotlight>
              <AboutMeV2 language={language} />
            </CardSpotlight>
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            {/* Top Row - Language + Dark Mode */}
            <div className={styles.topRow}>
              <CardSpotlight>
                <Language language={language} setLanguage={onLanguageChange} />
              </CardSpotlight>
              <CardSpotlight>
                <DarkMode />
              </CardSpotlight>
              <CardSpotlight>
                <Edad language={language} />
              </CardSpotlight>
              <CardSpotlight>
                <English language={language} />
              </CardSpotlight>
            </div>

            {/* Bottom - Projects Card */}
            <div className={styles.bottomCard}>
              <Link href="/projects">
                <CardSpotlight>
                  <Proyectos language={language} />
                </CardSpotlight>
              </Link>
            </div>
          </div>
        </div>

        {/* Rest of the grid - todas las demás cards */}
        <div className={styles.restGrid}>
          {/* Github - spans 6 columns, 1 row */}
          <div className={styles.githubContainer}>
            <Suspense fallback={<ComponentLoader />}>
              <CardSpotlight>
                <Github language={language} />
              </CardSpotlight>
            </Suspense>
          </div>

          {/* Stack - spans 6 columns, 2 rows */}
          <div className={styles.stackContainer}>
            <Suspense fallback={<ComponentLoader />}>
              <CardSpotlight>
                <Stack language={language} />
              </CardSpotlight>
            </Suspense>
          </div>

          {/* VideoPortfolio - spans 3 columns, 1 row */}
          <div className={styles.videoContainer}>
            <Suspense fallback={<ComponentLoader />}>
              <CardSpotlight>
                <VideoPortfolio language={language} />
              </CardSpotlight>
            </Suspense>
          </div>

          {/* Recomendaciones - spans 3 columns, 1 row */}
          <div className={styles.recomendacionesContainer}>
            <Suspense fallback={<ComponentLoader />}>
              <CardSpotlight>
                <Recomendaciones language={language} />
              </CardSpotlight>
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  );
}
