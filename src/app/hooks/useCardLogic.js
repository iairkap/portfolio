"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectLanguage } from "../redux";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useModal } from "./useModal";
import { useTheme, useLanguage } from "./index";

/**
 * Custom hook para la lógica del componente Card
 * Separa la lógica de negocio de la presentación (SRP)
 */
export function useCardLogic() {
  const [isHovered, setIsHovered] = useState(false);
  const { isOpen: modalIsOpen, open: openModal, close: closeModal } = useModal();
  const isSmallScreen = useMediaQuery("(max-width:1017px)"); // Extendido para cubrir gap 768-1017px
  const language = useLanguage();
  const darkMode = useTheme();

  const modalContentStyles = darkMode ? "modalContentDark" : "modalContentLight";
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
