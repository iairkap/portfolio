import React from "react";
import Link from "next/link";
import Image from "next/image";

function headerProjects({ styles, language }) {
  const resumes = {
    EN: "https://firebasestorage.googleapis.com/v0/b/real-cover.appspot.com/o/iair%2FCV-%20Iair%20Kaplun%20Eng.pdf?alt=media&token=ae1fbb62-55d2-4ec6-b877-d818fec180b2",
    ES: "https://firebasestorage.googleapis.com/v0/b/real-cover.appspot.com/o/iair%2FCV-%20Iair%20Kaplun.pdf?alt=media&token=21cd6428-0e47-4c14-bf3e-b11a729c36c4",
  };
  return (
    <div className={styles.contenedorTitulo}>
      <div className={styles.tituloba}>
        <div className={styles.arrow}>
          <Link href="/">
            <Image
              src={"/prevArrow.svg"}
              className={styles.Arrow}
              width={100}
              height={100}
              alt="Back to home"
            />
          </Link>
        </div>
        <div className={styles.titileContainer}>
          <h1 className={styles.titulo}>
            {language === "ES" ? "PORTFOLIO AUDIOVISUAL" : "AUDIOVISUAL PORTFOLIO"}
          </h1>{" "}
          <a href={resumes[language]} target="_blank" rel="noopener noreferrer">
            <span className={styles.subtitle}>
              {language === "ES" ? "Descargar CV" : "Download Resume"}{" "}
            </span>
          </a>
        </div>
      </div>
      {/*       <div>
        <a href={resumes[language]} target="_blank" rel="noopener noreferrer">
          Download Resume
        </a>
      </div> */}
      <Image
        className={styles.imagen}
        src="https://firebasestorage.googleapis.com/v0/b/real-cover.appspot.com/o/projects.png?alt=media&token=0efecff7-c43b-4536-970d-2d1e3c3ae5a7"
        alt="Projects"
        width={172}
        height={233}
      />
    </div>
  );
}

export default headerProjects;
