import React from "react";
import Image from "next/image";
import {
  audiovisualprojects,
  getEmbedLink,
} from "@/app/constants/audiovisualProyects.js";
import styles from "./videogrid.module.css";
function VideoGrid(props) {
  const styleByProyectCompany = (proyect) => {
    return proyect.company ? styles[proyect.company] : styles.default;
  };

  return (
    <main className={styles.generalContainer}>
      {audiovisualprojects.map((proyect) => {
        const embedLink = getEmbedLink(proyect.videoLink, proyect.src);
        return (
          <div
            key={proyect.id}
            className={`${styles.contenedorProyecto} ${styleByProyectCompany(
              proyect
            )}`}
          >
            {" "}
            <div className={styles.contenedorVideo}>
              <iframe
                className={styles.video}
                src={embedLink}
                title={proyect.title}
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className={styles.captionConteiner}>
              <div className={styles.avatarContainer}>
                <Image
                  src={`/avatar/${proyect.avatar}`}
                  alt={proyect.company}
                  className={styles.avatarImage}
                  width={30}
                  height={30}
                />
              </div>
              <div className={styles.magia}>
                <div className={styles.contenedorTituloProyect}>
                  <h4 className={styles.tituloProyecto}>{proyect.title}</h4>
                </div>
                <div className={styles.keysContainer}>
                  {proyect.keywords.map((keyword) => (
                    <span key={keyword} className={styles.keyword}>
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
}

export default VideoGrid;
