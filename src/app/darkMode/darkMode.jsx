import React, { useContext } from "react";
import Switch from "react-switch";
import { DarkModeContext } from "../contexts/DarkModeContext";
import styles from "./dark.module.css";

function DarkMode() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <div className={styles.generalBackground}>
      <Switch
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
        onColor="#000"
        offColor="#fff"
        checkedIcon={false}
        uncheckedIcon={false}
      />
    </div>
  );
}

export default DarkMode;
