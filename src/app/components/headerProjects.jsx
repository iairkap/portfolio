import React from "react";
import Link from "next/link";
import Image from "next/image";

function headerProjects({ styles, language }) {
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
            />
          </Link>
        </div>
        <h1 className={styles.titulo}>
          {language === "ES"
            ? "PORTFOLIO AUDIOVISUAL"
            : "AUDIOVISUAL PORTFOLIO"}
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
  );
}

export default headerProjects;
