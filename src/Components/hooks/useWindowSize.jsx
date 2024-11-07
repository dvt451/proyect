import { useState, useEffect } from "react";

export default function useWindowSize() {
  const getSize = () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    const handleResize = () => {
      setTimeout(() => {
         setWindowSize(getSize());
      }, 5000);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}