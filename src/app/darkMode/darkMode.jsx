import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../redux/DarkModeSlice";
import styles from "./dark.module.css";
import SwitchComponent from "./switch";

function DarkMode() {
  const dispatch = useDispatch();

  return (
    <div className={styles.generalBackground}>
      <SwitchComponent
        handleToggle={() => {
          dispatch(toggleDarkMode());
        }}
      />
    </div>
  );
}

export default DarkMode;
