import React from "react";
import { motion } from "framer-motion";
import styles from "../../projects/cardpaginas.module.css";

/**
 * Contenido interno del modal de proyecto
 * Extraído para cumplir con max-lines-per-function
 */
export function ProjectModalContent({ project, language, textStyles }) {
  return (
    <motion.div
      className={styles[textStyles]}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.4 }}
    >
      <h1 className={styles.name}>{project.name}</h1>
      
      {/* Detectar si es proyecto con Front/Back o proyecto normal */}
      {project.frontExplainEn ? (
        // Proyecto con estructura Front/Back  
        <>
          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontWeight: 700, fontSize: "1.25rem", marginBottom: "0.75rem" }}>
              Frontend Development
            </h3>
            <h3 className={styles.parrafo}>
              {language === "ES" ? project.frontExplainEs : project.frontExplainEn}
            </h3>
          </div>
          
          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontWeight: 700, fontSize: "1.25rem", marginBottom: "0.75rem" }}>
              Backend Development
            </h3>
            <h3 className={styles.parrafo}>
              {language === "ES" ? project.backExplainEs : project.backExplainEn}
            </h3>
          </div>
        </>
      ) : (
        // Proyecto normal
        <h3 className={styles.parrafo}>
          {language === "ES" ? project.textExplainEs : project.textExplainEn}
        </h3>
      )}
      
      <div className={styles.stackAll}>
        {project.stack?.map((tech, index) => (
          <motion.h3
            key={index}
            className={styles.stackfa}
            style={{ backgroundColor: project.backgroundContainer }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
          >
            {tech}
          </motion.h3>
        ))}
      </div>
      <div className={styles.linkContainer}>
        <h2 className={styles.website}>Web site:</h2>
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
          {project.demo}
        </a>
      </div>
      <div className={styles.linkContainer}>
        <h2 className={styles.website}>GitHub:</h2>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
          {project.github}
        </a>
      </div>
    </motion.div>
  );
}
