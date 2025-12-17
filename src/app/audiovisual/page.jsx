"use client";
import React from "react";
import styles from "../projects/projects.module.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { setLanguage, selectLanguage } from "../redux/languageSlice";
import { useSelector, useDispatch } from "react-redux";
import HeaderProjects from "../components/headerProjects";
import VideoGrid from "../components/VideoGrid";
import { useTheme, useLanguage } from "../hooks";

const AudiovisualPortfolioPage = (props) => {
  const dispatch = useDispatch();
  const language = useLanguage();
  const darkMode = useTheme();

  console.log(language);

  const background = darkMode ? styles.backgroundDark : styles.backgroundLight;

  return (
    <div className={background}>
      <div className={styles.NoiseBackground}></div>
      <HeaderProjects styles={styles} language={language} />
      <div>
        <VideoGrid />
      </div>
    </div>
  );
};

export default AudiovisualPortfolioPage;
