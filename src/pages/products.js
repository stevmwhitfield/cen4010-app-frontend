import React from "react";

import Layout from "../components/Layout/Layout";
import Head from "../components/Layout/Head";
import ProductList from "../components/Products/ProductList";

import * as styles from "../styles/Products/Products.module.scss";

// The products page
const ProductsPage = () => {
  return (
    <>
      <Layout>
        <Head
          title="Products | Phoenix Tech - Computer Accessories and Peripherals"
          description="Browse our collection of computer accessories and peripherals."
          // url=""
        />
        <div className={styles.mainWrapper}>
          <div className={styles.heading}>
            <h1>Product Listing</h1>
          </div>
          <ProductList />
        </div>
      </Layout>
    </>
  );
};

export default ProductsPage;
