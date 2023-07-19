import React from "react";
import styles from "./linkedin.module.css";
import linkedin from "../../../public/linkedin.svg";
import Image from "next/image";

function Linkedin(props) {
  return (
    <a
      href="https://www.linkedin.com/in/iair-kaplun-97145a88/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles.generalContainer}>
        <svg
          width="225"
          height="225"
          viewBox="0 0 150 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M43.375 31.25C43.3733 34.5652 42.0548 37.744 39.7094 40.087C37.364 42.4301 34.184 43.7454 30.8688 43.7438C27.5535 43.7421 24.3748 42.4236 22.0317 40.0782C19.6887 37.7328 18.3733 34.5527 18.375 31.2375C18.3767 27.9223 19.6952 24.7436 22.0406 22.4005C24.386 20.0575 27.566 18.7421 30.8813 18.7438C34.1965 18.7454 37.3752 20.064 39.7183 22.4094C42.0613 24.7547 43.3767 27.9348 43.375 31.25ZM43.75 53H18.75V131.25H43.75V53ZM83.25 53H58.375V131.25H83V90.1875C83 67.3125 112.812 65.1875 112.812 90.1875V131.25H137.5V81.6875C137.5 43.125 93.375 44.5625 83 63.5L83.25 53Z"
            fill="white"
          />
        </svg>
      </div>
    </a>
  );
}

export default Linkedin;
