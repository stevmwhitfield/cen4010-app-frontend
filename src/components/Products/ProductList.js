import React from "react";
import { useState } from "react";
import { products } from "../../data/products";
import ProductCard from "./ProductCard";

import * as styles from "../../styles/Products/ProductList.module.scss";

export let cartData = [];

const ProductList = () => {
  const [cartItems, setCartItems] = useState([]);
  cartData = cartItems;
  console.log("STATE " + cartItems);
  console.log("JSON " + JSON.stringify(cartItems));

  return (
    <div className={styles.products}>
      {products.map((product) => {
        const { imgSrc, sku, name, price } = product;
        return (
          <ProductCard
            setCartItems={setCartItems}
            key={sku}
            imgSrc={imgSrc}
            sku={sku}
            name={name}
            price={price}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
