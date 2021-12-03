import React from "react";
import { useState, useEffect } from "react";
import DesktopNav from "./Navigation/DesktopNav";
import MobileNav from "./Navigation/MobileNav";

const useWindowSize = () => {
  // Creates a state for window size
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  // If the window is not loaded, update state to the window dimensions,
  // and add an event listener for window resize
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
      // Clean up by removing the event listener
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowSize;
};

// The header of each page
const Header = () => {
  const size = useWindowSize();

  // If the screen width is greater than or equal to 480px, use the desktop navigation
  if (size.width >= 480) {
    return <DesktopNav />;
  }
  // If the screen width is less than 480px, use the mobile navigation
  if (size.width < 480) {
    return <MobileNav />;
  }

  // If a screen width is not detected
  return <p>Error: screen size not detected!</p>;
};

export default Header;
