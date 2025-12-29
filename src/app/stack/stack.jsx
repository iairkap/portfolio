import React, { memo, useMemo } from "react";
import Image from "next/image";
import styles from "./stack.module.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Stack = memo(function Stack({ language }) {
  const darkMode = useSelector((state) => state.darkMode.value);
  const icons = useMemo(
    () => [
      { src: "/typescript.svg", alt: "TypeScript" },
      { src: "/uil_html5.svg", alt: "HTML5" },
      { src: "/uiw_css3.svg", alt: "CSS3" },
      { src: "/react.svg", alt: "React" },
      { src: "/python.svg", alt: "Python" },
      { src: "/vue.svg", alt: "Vue.js" },
      { src: "/nextjs.svg", alt: "Next.js" },
      { src: "/postgress.svg", alt: "PostgreSQL" },
      { src: "/mongodb.svg", alt: "MongoDB" },
      { src: "/nodejs.svg", alt: "Node.js" },
      { src: "/git.svg", alt: "Git" },
      { src: "/javascript.svg", alt: "JavaScript" },
      { src: "java.svg", alt: "Java" },
      { src: "astro.svg", alt: "Astro" },
      { src: "docker.svg", alt: "Docker" },
    ],
    []
  );

  const duplicatedIcons = [...icons, ...icons, ...icons, ...icons, ...icons, ...icons];

  return (
    <div className={styles.generalContainer}>
      <h2 className={styles.title}>Tech stack</h2>

      <div className={styles.carouselWrapper}>
        <motion.div
          className={styles.iconCarousel}
          animate={{
            x: [-93, -(icons.length * 93) - 93], // 45px icon + 48px gap = 93px por icono
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {duplicatedIcons.map((icon, index) => (
            <div
              key={index}
              className={`${styles.icon} ${darkMode ? styles.iconDark : styles.iconLight}`}
            >
              <Image src={icon.src} width={45} height={45} alt={icon.alt} />
            </div>
          ))}
        </motion.div>
      </div>

      <p className={styles.description}>
        {language === "ES"
          ? "Principalmente con experiencia en stacks modernos de frontend, backend e infraestructura, y siempre con interés en explorar y aprender nuevas herramientas y plataformas."
          : "Primarily experienced across modern frontend, backend, and infrastructure stacks, while always eager to explore and learn new tools and platforms."}
      </p>
    </div>
  );
});

export default Stack;
