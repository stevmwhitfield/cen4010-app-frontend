import React from "react";

import * as styles from "../../styles/Home/TopBrands.module.scss";

const TopBrands = () => {
  return (
    <section id={styles.topBrands}>
      <h1>Shop Top Brands</h1>
      <div className={styles.brands}>
        <span>
          <img src="/samsung-logo.svg" alt="Samsung" />
        </span>
        <span>
          <img src="/logitech-logo.svg" alt="Logitech" />
        </span>
        <span>
          <img src="/seagate-logo.svg" alt="Seagate" />
        </span>
      </div>
    </section>
  );
};

export default TopBrands;
