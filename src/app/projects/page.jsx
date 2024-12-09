"use client";
import React from "react";
import styles from "./projects.module.css";
import prevArrow from "../../../public/prevArrow.svg";
import Image from "next/image";
import Link from "next/link";

import Card from "./cardpaginas";
import { motion } from "framer-motion";
import { setLanguage, selectLanguage } from "../redux/languageSlice";
import { useSelector, useDispatch } from "react-redux";

function Projects() {
  const dispatch = useDispatch();
  const language = useSelector(selectLanguage);
  const darkMode = useSelector((state) => state.darkMode.value); // Utilizas el selector para acceder a darkMode

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
                <Image src={prevArrow} className={styles.Arrow} />
              </Link>
            </div>
            <h1 className={styles.titulo}>
              {language === "ES" ? "PROYECTOS" : "PROJECTS"}
            </h1>{" "}
          </div>
          <img
            className={styles.imagen}
            src="https://firebasestorage.googleapis.com/v0/b/real-cover.appspot.com/o/proyects.png?alt=media&token=0efecff7-c43b-4536-970d-2d1e3c3ae5a7"
            alt=""
            width={172}
            height={233}
          />
        </div>
        <Card />
      </motion.div>
    </div>
  );
}

export default Projects;
