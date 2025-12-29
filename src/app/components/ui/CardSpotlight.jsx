import React, { useRef, useState } from "react";
import styles from "./CardSpotlight.module.css";
import { useTheme } from "../../hooks";

export default function CardSpotlight({ children }) {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const darkMode = useTheme();

  const handleMouseMove = (e) => {
    if (!cardRef.current) {
      return;
    }

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      className={`${styles.cardSpotlight} ${darkMode ? styles.dark : styles.light}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        "--mouse-x": `${mousePosition.x}px`,
        "--mouse-y": `${mousePosition.y}px`,
        "--opacity": isHovered ? "1" : "0",
      }}
    >
      {children}
    </div>
  );
}
