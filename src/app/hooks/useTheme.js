import { useSelector } from "react-redux";
import { selectDarkMode } from "../redux/selectors";

/**
 * Custom hook para acceder al estado de darkMode
 * Centraliza la lógica de tema en toda la aplicación
 * Usa selectores memoizados para optimizar rendimiento
 *
 * @returns {boolean} darkMode - Estado actual del tema (true = dark, false = light)
 *
 * @example
 * const darkMode = useTheme();
 * const styles = darkMode ? styles.dark : styles.light;
 */
export function useTheme() {
  return useSelector(selectDarkMode);
}
