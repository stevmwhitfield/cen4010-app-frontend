import React from "react";
import { useEffect, useState } from "react";
import { Link } from "gatsby";

import * as styles from "../../styles/Home/Hero.module.scss";

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

const Hero = () => {
  const size = useWindowSize();

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.headings}>
          <h1>Featured</h1>
          <h3>HyperX Cloud II Wired Headphones</h3>
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
      {size.width < 480 ? (
        <Link className={styles.button} to="/products">
          Buy Now
        </Link>
      ) : null}
    </section>
  );
};

export default Hero;
