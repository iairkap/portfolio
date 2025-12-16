import { useState, useCallback } from "react";

/**
 * Custom hook para gestionar el estado de modales
 * @returns {Object} { isOpen, open, close }
 */
export function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback((e) => {
    e?.stopPropagation();
    setIsOpen(false);
  }, []);

  return { isOpen, open, close };
}
