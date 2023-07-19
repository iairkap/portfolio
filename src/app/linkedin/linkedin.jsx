import React from "react";
import styles from "./linkedin.module.css";
import linkedin from "../../../public/linkedin.svg";
import Image from "next/image";

function Linkedin(props) {
  return (
    <div className={styles.generalContainer}>
      <Image src={linkedin} width={150} height={150} />
    </div>
  );
}

export default Linkedin;
