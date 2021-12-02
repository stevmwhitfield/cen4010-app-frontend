import React from "react";
import * as styles from "../../styles/Products/ProductCard.module.scss";

const ProductCard = ({ setCartItems, imgSrc, sku, name, price }) => {
  const addCartItem = (newItem) => {
    setCartItems((allItems) => [...allItems, newItem]);
  };

  const newItem = { imgSrc, sku, name, price };

  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img
          src={imgSrc ? imgSrc : "https://via.placeholder.com/256"}
          alt={name}
        />
      </div>
      <div className={styles.contentContainer}>
        <h2>{name}</h2>
        <p>{`$${price}`}</p>
      </div>
      <button onClick={() => addCartItem(newItem)}>
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
};

export default ProductCard;
