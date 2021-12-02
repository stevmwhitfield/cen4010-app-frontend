import React from "react";
import { useState, useEffect } from "react";
import DesktopNav from "./Navigation/DesktopNav";
import MobileNav from "./Navigation/MobileNav";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowSize;
};

const Header = () => {
  const size = useWindowSize();

  if (size.width >= 480) {
    return <DesktopNav />;
  }
  if (size.width < 480) {
    return <MobileNav />;
  }

  return <p>Error: screen size not detected!</p>;
};

export default Header;
