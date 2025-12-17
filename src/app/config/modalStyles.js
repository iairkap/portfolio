/**
 * Configuración centralizada de estilos para modales
 */
export const MODAL_STYLES = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.75)",
    backdropFilter: "blur(5px)",
  },
  overlayWithHeight: {
    backgroundColor: "rgba(0,0,0,0.75)",
    backdropFilter: "blur(5px)",
    height: "100dvh",
  },
  content: {
    backgroundColor: "transparent",
    border: "none",
    width: "90%",
    maxWidth: "1400px",
    height: "90%",
    maxHeight: "90vh",
    margin: "auto",
    overflow: "visible",
  },
};
