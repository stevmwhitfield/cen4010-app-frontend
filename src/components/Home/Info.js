import React from "react";
import { Link } from "gatsby";
import { useEffect, useState } from "react";

import * as styles from "../../styles/Home/Info.module.scss";

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

const Info = ({ imgSide, heading, text, imgSrc, imgAlt }) => {
  const size = useWindowSize();

  return (
    <section id={styles.info}>
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
