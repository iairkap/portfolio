import { useState } from "react";
import { useSelector } from "react-redux";
import { selectLanguage } from "../redux/languageSlice";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useModal } from "./useModal";

/**
 * Custom hook para la lógica del componente Card
 * Separa la lógica de negocio de la presentación (SRP)
 */
export function useCardLogic() {
  const [isHovered, setIsHovered] = useState(false);
  const {
    isOpen: modalIsOpen,
    open: openModal,
    close: closeModal,
  } = useModal();
  const isSmallScreen = useMediaQuery("(max-width:768px)");
  const language = useSelector(selectLanguage);
  const darkMode = useSelector((state) => state.darkMode.value);

  const modalContentStyles = darkMode
    ? "modalContentDark"
    : "modalContentLight";
  const textStyles = darkMode ? "textDark" : "textLight";

  return {
    isHovered,
    setIsHovered,
    modalIsOpen,
    openModal,
    closeModal,
    isSmallScreen,
    language,
    darkMode,
    modalContentStyles,
    textStyles,
  };
}
