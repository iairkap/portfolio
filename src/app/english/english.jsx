import React, { memo } from "react";
import styles from "./english.module.css";
import Image from "next/image";
import click from "../../../public/click.svg";
import Link from "next/link";

const English = memo(function English({ language }) {
  return (
    <Link href="https://www.efset.org/cert/Lonahf">
      <div className={styles.generalContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.titulo}>C2</h1>
          <h6 className={styles.subtitulob}>{language === "ES" ? "EF SET" : "EF SET"}</h6>
        </div>
      </div>
    </Link>
  );
});

export default English;
