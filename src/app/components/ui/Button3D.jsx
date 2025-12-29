import React from "react";
import styles from "./Button3D.module.css";

function Button3D({ children, onClick, href, ariaLabel }) {
  const content = (
    <button className={styles.button3D} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={styles.linkWrapper}>
        {content}
      </a>
    );
  }

  return content;
}

export default Button3D;
