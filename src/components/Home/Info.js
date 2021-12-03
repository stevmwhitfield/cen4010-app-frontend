import React from "react";
import { Link } from "gatsby";
import { useEffect, useState } from "react";

import * as styles from "../../styles/Home/Info.module.scss";

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

// The Info section of the home page
const Info = ({ imgSide, heading, text, imgSrc, imgAlt }) => {
  const size = useWindowSize();

  return (
    <section id={styles.info}>
      {/* If screen width is less than 480px, position images before the content regardless of 'imgSide' */}
      {imgSide === "left" || size.width < 480 ? (
        <>
          <div className={styles.imgContainer}>
            <img src={imgSrc} alt={imgAlt} />
          </div>
          <div className={styles.contentContainer}>
            <h1>{heading}</h1>
            <p>{text}</p>
            <Link className={styles.button} to="#">
              Learn More
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className={styles.contentContainer}>
            <h1>{heading}</h1>
            <p>{text}</p>
            <Link className={styles.button} to="#">
              Learn More
            </Link>
          </div>
          <div className={styles.imgContainer}>
            <img src={imgSrc} alt={imgAlt} />
          </div>
        </>
      )}
    </section>
  );
};

export default Info;
