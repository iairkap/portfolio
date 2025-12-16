import React, { memo, useMemo } from "react";
import Image from "next/image";
import styles from "./stack.module.css";

const Stack = memo(function Stack(props) {
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
    ],
    []
  );

  return (
    <div className={styles.generalContainer}>
      <div className={styles.iconContainer}>
        {icons.map((icon, index) => (
          <div key={index} className={styles.icon}>
            <Image src={icon.src} width={45} height={45} alt={icon.alt} />
            {/* Tooltip por cada vez que hago hover sobre el icon se va a mostrar el nombre que figura en el icons.alt */}
            <span className={styles.tooltip}>{icon.alt}</span>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Stack;
