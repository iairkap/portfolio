"use client";
import { useEffect } from "react";
import styles from "./landing.module.css";
import { setLanguage } from "./redux/languageSlice";
import { useDispatch } from "react-redux";
import { useTheme, useLanguage } from "./hooks";
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

  useEffect(() => {
    const theme = darkMode ? "dark" : "light";
    document.documentElement.className = theme;
    document.body.className = theme;
  }, [darkMode]);

  const handleLanguageChange = (lang) => dispatch(setLanguage(lang));

  return (
    <main className={styles.effects}>
      {/* Mobile - Always rendered for SSR */}
      <div className={styles.mobileLayout}>
        <MobileHome language={language} onLanguageChange={handleLanguageChange} />
      </div>
      
      {/* Desktop - Client-side only */}
      <div className={styles.desktopLayout}>
        <GridLayoutV2 language={language} onLanguageChange={handleLanguageChange} />
      </div>
    </main>
  );
}
