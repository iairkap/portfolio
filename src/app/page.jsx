"use client";
import { useEffect, useState } from "react";
import styles from "./landing.module.css";
import { setLanguage } from "./redux/languageSlice";
import { useDispatch } from "react-redux";
import { useTheme, useLanguage, useIsMobile } from "./hooks";
import MobileHome from "./landing/MobileHome";
import dynamic from "next/dynamic";

// Desktop lazy loads only when needed
const GridLayoutV2 = dynamic(() => import("./components/layouts/GridLayoutV2"), {
  ssr: false,
});

export default function Home() {
  const darkMode = useTheme();
  const dispatch = useDispatch();
  const language = useLanguage();
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const theme = darkMode ? "dark" : "light";
    document.documentElement.className = theme;
    document.body.className = theme;
  }, [darkMode]);

  const handleLanguageChange = (lang) => dispatch(setLanguage(lang));

  return (
    <main className={styles.effects}>
      {/* Always render mobile for SSR (Lighthouse) */}
      {(!mounted || isMobile) && (
        <div className={styles.mobileLayout}>
          <MobileHome language={language} onLanguageChange={handleLanguageChange} />
        </div>
      )}
      
      {/* Desktop only after hydration */}
      {mounted && !isMobile && (
        <div className={styles.desktopLayout}>
          <GridLayoutV2 language={language} onLanguageChange={handleLanguageChange} />
        </div>
      )}
    </main>
  );
}
