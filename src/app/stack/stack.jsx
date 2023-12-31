import React from "react";
import styles from "./stack.module.css";
import uil_html5 from "../../../public/uil_html5.svg";
import uiw_css3 from "../../../public/uiw_css3.svg";
import javascript from "../../../public/javascript.svg";
import nextjs from "../../../public/nextjs.svg";
import typescript from "../../../public/typescript.svg";
import react from "../../../public/react.svg";
import premiere from "../../../public/premiere.svg";
import postgress from "../../../public/postgress.svg";
import nodejs from "../../../public/nodejs.svg";
import git from "../../../public/git.svg";
import figma from "../../../public/figma.svg";
import aftereffects from "../../../public/aftereffects.svg";
import Image from "next/image";

function Stack(props) {
  const icons = [
    uil_html5,
    uiw_css3,
    javascript,
    nextjs,
    typescript,
    react,
    premiere,
    postgress,
    nodejs,
    git,
    figma,
    aftereffects,
  ];

  return (
    <div className={styles.generalContainer}>
      <div className={styles.iconContainer}>
        {icons.map((icon, index) => (
          <div key={index} className={styles.icon}>
            <Image src={icon} width={45} height={45} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stack;
