import { useSelector } from "react-redux";
import { selectLanguage } from "../redux/languageSlice";

/**
 * Custom hook para acceder al estado de idioma
 * Centraliza la lógica de internacionalización en toda la aplicación
 *
 * @returns {string} language - Código del idioma actual ("ES" | "EN")
 *
 * @example
 * const language = useLanguage();
 * const text = language === "ES" ? "Hola" : "Hello";
 */
export function useLanguage() {
  return useSelector(selectLanguage);
}
