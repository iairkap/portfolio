import React, { memo, useCallback } from "react";
import styles from "./language.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../redux";

const Language = memo(function Language() {
  const language = useSelector((state) => state.language.value);
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.value);

  const handleLanguageChange = useCallback(() => {
    const newLanguage = language === "ES" ? "EN" : "ES";
    dispatch(setLanguage(newLanguage));
  }, [dispatch, language]);

  return (
    <div
      className={styles.generalBackground}
      onClick={() => {
        handleLanguageChange();
      }}
    >
      <div className={styles.contenedor}>
        <div className={styles.titulo}>
          <h1>{language}</h1>
        </div>
        <div className={styles.idiomas}>
          <div className={styles.languageContainer}>
            <div>
              <h6
                className={
                  language === "ES" ? (darkMode ? styles.selectedDark : styles.selectedLight) : null
                }
              >
                ES
              </h6>
            </div>
          </div>
          <div className={styles.languageContainer}>
            <div>
              <h6
                className={
                  language === "EN" ? (darkMode ? styles.selectedDark : styles.selectedLight) : null
                }
              >
                EN
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Language;
