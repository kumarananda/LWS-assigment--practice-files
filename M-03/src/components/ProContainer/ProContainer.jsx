/** @format */

import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "../ProductItem/ProductItem";

const ProContainer = () => {
  const products = useSelector(state => state.products);
  const carts = useSelector(state => state.carts);

  return (
    <>
      <div className="productContainer" id="lws-productContainer">
        {!products.length && <div>No Product Found</div>}
        {products.map((product, index) => {
          return <ProductItem product={product} carts={carts} key={index} />;
        })}
      </div>
    </>
  );
};

export default ProContainer;
