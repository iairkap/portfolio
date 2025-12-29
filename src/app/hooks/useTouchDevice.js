import { useMemo } from "react";

/**
 * Custom hook para detectar dispositivos táctiles
 * @returns {boolean} true si el dispositivo soporta eventos táctiles
 */
export function useTouchDevice() {
  return useMemo(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return (
      "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
    );
  }, []);
}
