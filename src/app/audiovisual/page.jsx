"use client";
import React from "react";
import styles from "../projects/projects.module.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { setLanguage, selectLanguage } from "../redux";
import { useSelector, useDispatch } from "react-redux";
import { HeaderProjects, VideoGrid, ErrorBoundary } from "../components";
import { useTheme, useLanguage } from "../hooks";

const AudiovisualPortfolioPage = (props) => {
  const dispatch = useDispatch();
  const language = useLanguage();
  const darkMode = useTheme();

  // Aplicar tema al body cuando se monta el componente
  React.useEffect(() => {
    const theme = darkMode ? "dark" : "light";
    document.documentElement.className = theme; // html
    document.body.className = theme; // body
  }, [darkMode]);

  console.log(language);

  const background = darkMode ? styles.backgroundDark : styles.backgroundLight;

  return (
    <ErrorBoundary>
      <div className={background}>
        <div className={styles.NoiseBackground}></div>
        <HeaderProjects styles={styles} language={language} />
        <div>
          <VideoGrid />
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default AudiovisualPortfolioPage;
