"use client";
import React from "react";
import styles from "./projects.module.css";
import prevArrow from "../../../public/prevArrow.svg";
import Image from "next/image";
import { LanguageContext } from "../contexts/LanguageContext";
import { useContext } from "react";
import { useState } from "react";
import Card from "./cardpaginas";

function Proyects(props) {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div>
      <div className={styles.contenedorTitulo}>
        <div className={styles.tituloba}>
          <a href="/">
            <Image src={prevArrow} className={styles.Arrow} />
          </a>
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
    </div>
  );
}

export default Proyects;
