import { useEffect, useState } from "react";

export const useTopHeader = () => {
  const [windowSize, setWindowSize] = useState<{
    width: undefined | number;
    height: undefined | number;
  }>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.screenX,
        height: window.screenY,
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return { windowSize };
};
