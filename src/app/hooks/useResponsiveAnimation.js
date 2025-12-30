import { useState, useEffect } from "react";

/**
 * Hook para detectar breakpoint específico y retornar tipo de animación
 * @returns {Object} { isSmallMac, isMobile, isDesktop }
 */
export function useResponsiveAnimation() {
  const [breakpoint, setBreakpoint] = useState({
    isSmallMac: false,  // 1018-1280px
    isMobile: false,    // < 1018px
    isDesktop: false,   // > 1280px
  });

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      
      setBreakpoint({
        isSmallMac: width >= 1018 && width <= 1280,
        isMobile: width < 1018,
        isDesktop: width > 1280,
      });
    };

    // Initial check
    updateBreakpoint();

    // Listen for resize
    window.addEventListener("resize", updateBreakpoint);
    return () => window.removeEventListener("resize", updateBreakpoint);
  }, []);

  return breakpoint;
}
