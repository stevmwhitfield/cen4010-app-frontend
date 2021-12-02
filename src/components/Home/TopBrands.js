import React from "react";

import * as styles from "../../styles/Home/TopBrands.module.scss";

const TopBrands = () => {
  return (
    <section id={styles.topBrands}>
      <h1>Shop Top Brands</h1>
      <div className={styles.brands}>
        <span>
          <img src="/bose-logo.svg" alt="Bose" />
        </span>
        <span>
          <img src="/msi-logo.svg" alt="MSI" />
        </span>
        <span>
          <img src="/logitech-logo.svg" alt="Logitech" />
        </span>
      </div>
    </section>
  );
};

export default TopBrands;
