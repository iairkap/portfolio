import { useState, useEffect } from "react";

/**
 * Hook para detectar si el viewport es mobile (< 768px)
 * @returns {boolean} true si el viewport es mobile
 */
export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check inicial
    checkMobile();

    // Listener para resize
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};
