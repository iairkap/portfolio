import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode, selectDarkMode } from "../redux/DarkModeSlice";
import styles from "./dark.module.css";
import SwitchComponent from "./switch";

function DarkMode() {
  const dispatch = useDispatch();
  const darkMode = useSelector(selectDarkMode);

  return (
    <div className={styles.generalBackground}>
      <SwitchComponent
        isChecked={darkMode}
        handleToggle={() => {
          dispatch(toggleDarkMode());
        }}
      />
    </div>
  );
}

export default DarkMode;
