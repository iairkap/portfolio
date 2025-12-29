import React, { useEffect, useState, memo, useCallback } from "react";
import Image from "next/image";
import axios from "axios";
import styles from "./spotify.module.css";
import ReactPlayer from "react-player";
import { IoPlaySharp, IoPauseSharp } from "react-icons/io5";

const SpotifyRecentTrack = memo(function SpotifyRecentTrack({ language }) {
  const iconCV = {
    src: "/resume.svg",
    alt: "CV",
  };

  const resumePDF = "CV_Iair_Kaplun.pdf";

  const handleDownload = useCallback(() => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "CV_Iair_Kaplun.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <div className={styles.generalContainer} onClick={handleDownload}>
      <div className={styles.iconContainer}>
        <Image src={iconCV.src} width={50} height={50} alt={iconCV.alt} />
      </div>
      <div className={styles.textContainer}>
        {/*         <h1 className={styles.title}>{language === "ES" ? "Descargar CV" : "Download CV"}</h1>
         */}{" "}
      </div>
    </div>
  );
});

export default SpotifyRecentTrack;
