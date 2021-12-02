import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const TestPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log("Error from TestPage");
      });
  }, []);

  let productList;

  if (!products) {
    productList = <p>No products!</p>;
  } else {
    productList = products.map((product, key) => {
      return (
        <div
          id={key}
          style={{
            border: "1px solid black",
            margin: "4px",
            width: "360px",
            height: "360px",
          }}
        >
          <img
            src={product.imgSrc}
            alt={product.name}
            width={256}
            height={256}
          />
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </div>
      );
    });
  }
  return (
    <div style={{ backgroundColor: "#eee" }}>
      {console.log("Products: " + products)}
      <h1>Product List</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>{productList}</div>
    </div>
  );
};

export default TestPage;
