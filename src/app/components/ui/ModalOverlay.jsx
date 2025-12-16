import React from "react";
import Modal from "react-modal";
import { MODAL_STYLES } from "../../config/modalStyles";

/**
 * Componente reutilizable para modales con estilos consistentes
 * @param {boolean} isOpen - Estado del modal
 * @param {function} onClose - Callback para cerrar
 * @param {React.ReactNode} children - Contenido del modal
 * @param {object} customStyles - Estilos personalizados opcionales
 */
export function ModalOverlay({
  isOpen,
  onClose,
  children,
  customStyles = {},
  className = "",
  ...props
}) {
  const mergedStyles = {
    overlay: { ...MODAL_STYLES.overlay, ...customStyles.overlay },
    content: { ...MODAL_STYLES.content, ...customStyles.content },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={mergedStyles}
      className={className}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      {...props}
    >
      {children}
    </Modal>
  );
}
