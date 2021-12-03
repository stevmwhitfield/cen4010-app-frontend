import React from "react";
import { useEffect, useState } from "react";
import { Link } from "gatsby";

import * as styles from "../../styles/Home/Hero.module.scss";

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

// The hero section of the home page.
const Hero = () => {
  const size = useWindowSize();

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.headings}>
          <h1>Featured</h1>
          <h3>HyperX Cloud II Wired Headphones</h3>
          {/* If screen width is greater than or equal to 480px, place button before image*/}
          {size.width >= 480 ? (
            <Link className={styles.button} to="/products">
              Buy Now
            </Link>
          ) : null}
        </div>
        <img
          src="/images/headphones.png"
          alt="Featured product -- headphones"
        />
      </div>
      {/* If screen width is less than 480px, place button after image*/}
      {size.width < 480 ? (
        <Link className={styles.button} to="/products">
          Buy Now
        </Link>
      ) : null}
    </section>
  );
};

export default Hero;
