import React, { memo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../redux";
import styles from "./dark.module.css";
import SwitchComponent from "./switch";

const DarkMode = memo(function DarkMode() {
  const dispatch = useDispatch();

  const handleToggle = useCallback(() => {
    dispatch(toggleDarkMode());
  }, [dispatch]);

  return (
    <div className={styles.generalBackground} onClick={() => handleToggle()}>
      <SwitchComponent />
    </div>
  );
});

export default DarkMode;
