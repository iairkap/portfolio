import React from "react";
import {
  audiovisualProyects,
  getEmbedLink,
} from "../constants/audiovisualProyects";
import styles from "./videogrid.module.css";
function VideoGrid(props) {
  const styleByProyectCompany = (proyect) => {
    return proyect.company ? styles[proyect.company] : styles.default;
  };

  return (
    <main className={styles.generalContainer}>
      {audiovisualProyects.map((proyect) => {
        const embedLink = getEmbedLink(proyect.videoLink, proyect.src);
        return (
          <div
            key={proyect.id}
            className={`${styles.contenedorProyecto} ${styleByProyectCompany(
              proyect
            )}`}
          >
            {" "}
            <div className={styles.contenedorTituloProyect}>
              <h4 className={styles.tituloProyecto}>{proyect.title}</h4>
            </div>
            <div className={styles.contenedorVideo}>
              <iframe
                width="100%"
                height="350px"
                src={embedLink}
                title={proyect.title}
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className={styles.keysContainer}>
              {proyect.keywords.map((keyword) => (
                <span key={keyword} className={styles.keyword}>
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </main>
  );
}

export default VideoGrid;
