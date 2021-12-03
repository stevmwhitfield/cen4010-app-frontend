import React from "react";
import { Link } from "gatsby";

import * as styles from "../../../styles/Layout/Navigation/DesktopNav.module.scss";

// The navigation for desktop screen sizes
// Navigation is positioned at the top of the page
const DesktopNav = () => {
  return (
    <>
      {/* Desktop Nav */}
      <header id={styles.header}>
        <div className={styles.branding}>
          <span>
            <Link to="/">Phoenix Tech</Link>
          </span>
        </div>
        <nav className={styles.desktopNav}>
          <ul>
            <li>
              <Link activeClassName={styles.activeLink} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link activeClassName={styles.activeLink} to="/products">
                Products
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.cart}>
          <Link to="/cart">
            <i className={"fas fa-shopping-cart"}></i>
          </Link>
        </div>
      </header>
    </>
  );
};

export default DesktopNav;
