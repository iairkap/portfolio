import React from "react";
import styles from "./stack.module.css";

function Stack(props) {
  const icons = [
    { src: "/uil_html5.svg", alt: "HTML5" },
    { src: "/uiw_css3.svg", alt: "CSS3" },
    { src: "/javascript.svg", alt: "JavaScript" },
    { src: "/nextjs.svg", alt: "Next.js" },
    { src: "/typescript.svg", alt: "TypeScript" },
    { src: "/react.svg", alt: "React" },
    { src: "/premiere.svg", alt: "Premiere" },
    { src: "/postgress.svg", alt: "PostgreSQL" },
    { src: "/nodejs.svg", alt: "Node.js" },
    { src: "/git.svg", alt: "Git" },
    { src: "/figma.svg", alt: "Figma" },
    { src: "/aftereffects.svg", alt: "After Effects" },
  ];

  return (
    <div className={styles.generalContainer}>
      <div className={styles.iconContainer}>
        {icons.map((icon, index) => (
          <div key={index} className={styles.icon}>
            <img src={icon.src} width={45} height={45} alt={icon.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stack;
