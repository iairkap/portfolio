import React, { memo } from "react";
import styles from "./soyhenry.module.css";

const SoyHenry = memo(function SoyHenry({ language }) {
  return (
    <a
      href="https://certificates.soyhenry.com/new-cert?id=5f33e93c9aeccc7f264ec49a40353bbce84af3f4be661c89da51ab7b17f4597e"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles.generalContainer}>
        <h2 className={styles.titulo}>
          {language === "ES"
            ? " Certificado Full Stack 🚀"
            : "Full Stack Certificate 🚀"}
        </h2>
      </div>
    </a>
  );
});

export default SoyHenry;
