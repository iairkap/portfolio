import React from "react";
import styles from "./videoPortfolio.module.css";
import { LanguageContext } from "../contexts/LanguageContext";
import { useContext } from "react";
import Fithub from "../../../public/github.svg";
import Image from "next/image";

function VideoPortfolio(props) {
  const { language } = LanguageContext;

  return <div className={styles.generalContainer}></div>;
}
export default VideoPortfolio;
