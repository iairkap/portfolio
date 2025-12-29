"use client";
import React from "react";
import styles from "./projects.module.css";
import prevArrow from "../../../public/prevArrow.svg";
import Image from "next/image";
import Link from "next/link";

import Card from "./cardpaginas";
import { ErrorBoundary } from "../components";
import { motion } from "framer-motion";
import { setLanguage, selectLanguage } from "../redux";
import { useSelector, useDispatch } from "react-redux";
import { useTheme, useLanguage } from "../hooks";

function Projects() {
  const dispatch = useDispatch();
  const language = useLanguage();
  const darkMode = useTheme();

  const pageVariants = {
    initial: { opacity: 0, scale: 0.9 },
    in: { opacity: 1, scale: 1 },
    out: { opacity: 0, scale: 1 },
  };

  const background = darkMode ? styles.backgroundDark : styles.backgroundLight;

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  };
  return (
    <ErrorBoundary>
      <div className={background}>
        <div className={styles.NoiseBackground}></div>

        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <br />
          <br />
          <div className={styles.contenedorTitulo}>
            <div className={styles.tituloba}>
              <div className={styles.arrow}>
                <Link href="/">
                  <Image src={prevArrow} className={styles.Arrow} alt="Back to home" />
                </Link>
              </div>
              <h1 className={styles.titulo}>{language === "ES" ? "PROYECTOS" : "PROJECTS"}</h1>{" "}
            </div>
          </div>
          <Card />
        </motion.div>
      </div>
    </ErrorBoundary>
  );
}

export default Projects;
