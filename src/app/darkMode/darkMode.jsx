import React, { useContext } from "react";
import Switch from "react-switch";
import { DarkModeContext } from "../contexts/DarkModeContext";
import styles from "./dark.module.css";
import SwitchComponent from "./switch";

function DarkMode() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <div className={styles.generalBackground}>
      <SwitchComponent
        isChecked={darkMode}
        handleToggle={() => setDarkMode(!darkMode)}
      />
    </div>
  );
}

export default DarkMode;
