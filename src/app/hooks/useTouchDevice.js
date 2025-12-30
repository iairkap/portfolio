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

    // Check 1: Touch events support
    const hasTouch =
      "ontouchstart" in window || 
      navigator.maxTouchPoints > 0 || 
      navigator.msMaxTouchPoints > 0;
    
    // Check 2: Mobile width (viewport-based)
    const isMobileWidth = window.innerWidth <= 768;
    
    // Check 3: User agent (for Lighthouse mobile emulation)
    const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    
    // True if: (has touch AND mobile width) OR mobile user agent
    // This catches both real devices and Lighthouse emulation
    return (hasTouch && isMobileWidth) || isMobileUA;
  }, []);
}
 


/* export function useTouchDevice() {
  return true;
} 
*/