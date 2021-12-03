import React from "react";
import { Link } from "gatsby";

import * as styles from "../../../styles/Layout/Navigation/MobileNav.module.scss";

// The navigation for mobile screen sizes
// Navigation is positioned at the bottom of the page
const MobileNav = () => {
  return (
    <>
      {/* Mobile Nav */}
      <header id={styles.header}>
        <span>Phoenix Tech</span>
        <div className={styles.underline}>{/* underline */}</div>
      </header>
      <nav className={styles.mobileNav}>
        <ul>
          <li>
            <Link activeClassName={styles.activeLink} to="/">
              <div>
                {/* svg icon */}
                <i className={"fas fa-home"}></i>
                <p>Home</p>
              </div>
            </Link>
          </li>
          <li>
            <Link activeClassName={styles.activeLink} to="/products">
              <div>
                {/* svg icon */}
                <i className={"fas fa-th-large"}></i>
                <p>Products</p>
              </div>
            </Link>
          </li>
          <li>
            <Link activeClassName={styles.activeLink} to="/cart">
              <div>
                {/* svg icon */}
                <i className={"fas fa-shopping-cart"}></i>
                <p>Cart</p>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MobileNav;
