import React from "react";
import { useState } from "react";
import { products } from "../../data/products";
import ProductCard from "./ProductCard";

import * as styles from "../../styles/Products/ProductList.module.scss";

// Export cart information to be used in other files
export let cartData = [];

// Display the products in a grid-like fashion
const ProductList = () => {
  // Create a state for cart items
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
