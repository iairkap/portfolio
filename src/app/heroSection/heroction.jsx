import React from "react";
import styles from "./heroSection.module.css";
import { useSelector } from "react-redux";
import Button3D from "../components/ui/Button3D";

function HeroSection({ language }) {
  const darkMode = useSelector((state) => state.darkMode.value);

  console.log(darkMode);

  const text = {
    tooltip: language === "ES" ? "Disponible para contratar" : "Available to hire",
    title: language === "ES" ? "Hola, soy Iair Kaplun" : "Hello, I'm Iair Kaplun",
    subtitle:
      language === "ES"
        ? "Desarrollador Full Stack | Diseñador audiovisual"
        : "Full Stack Developer | Audiovisual Designer",
  };

  const handleEmailClick = () => {
    const message = encodeURIComponent("Hola, me gustaría trabajar con vos!");
    const email = "iairkap@gmail.com";
    window.open(`mailto:${email}?subject=Contacto&body=${message}`);
  };

  const handleCVDownload = () => {
    const link = document.createElement("a");
    link.href = "CV_Iair_Kaplun.pdf";
    link.download = "CV_Iair_Kaplun.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className={styles.heroTitle}>
      <div className={styles.tooltip}>
        <span className={styles.statusIndicator}></span>
        {text.tooltip}
      </div>
      <div className={styles.titleContainer}>
        <h1 className={darkMode ? styles.titleDark : styles.titleLight}>{text.title}</h1>
        <h2 className={styles.subtitle}>{text.subtitle}</h2>
      </div>
      <div className={styles.buttonContainer}>
        <Button3D href="https://github.com/iairkap" ariaLabel="GitHub Profile">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.buttonIcon}
          >
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
        </Button3D>

        <Button3D
          href="https://www.linkedin.com/in/iair-kaplun-97145a88/"
          ariaLabel="LinkedIn Profile"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 150 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.buttonIcon}
          >
            <path d="M43.375 31.25C43.3733 34.5652 42.0548 37.744 39.7094 40.087C37.364 42.4301 34.184 43.7454 30.8688 43.7438C27.5535 43.7421 24.3748 42.4236 22.0317 40.0782C19.6887 37.7328 18.3733 34.5527 18.375 31.2375C18.3767 27.9223 19.6952 24.7436 22.0406 22.4005C24.386 20.0575 27.566 18.7421 30.8813 18.7438C34.1965 18.7454 37.3752 20.064 39.7183 22.4094C42.0613 24.7547 43.3767 27.9348 43.375 31.25ZM43.75 53H18.75V131.25H43.75V53ZM83.25 53H58.375V131.25H83V90.1875C83 67.3125 112.812 65.1875 112.812 90.1875V131.25H137.5V81.6875C137.5 43.125 93.375 44.5625 83 63.5L83.25 53Z" />
          </svg>
        </Button3D>

        <Button3D onClick={handleCVDownload} ariaLabel="Download CV">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.buttonIcon}
          >
            <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20ZM8 15.01L9.41 16.42L11 14.84V19H13V14.84L14.59 16.43L16 15.01L12.01 11L8 15.01Z" />
          </svg>
        </Button3D>

        <Button3D onClick={handleEmailClick} ariaLabel="Send Email">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.buttonIcon}
          >
            <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
          </svg>
        </Button3D>
      </div>
    </main>
  );
}

export default HeroSection;
