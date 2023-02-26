/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cart/actions";

const ProductItem = ({ product, carts }) => {
  const dispatch = useDispatch();

  const { name, category, image, price, quantity, id } = product;

  let cartItem = carts.filter(cart => cart.productId === id);

  const handleAddToCart = productId => {
    dispatch(
      addToCart({
        productId,
        cartItem: product,
      })
    );
  };
  const shockQty = cartItem.length ? quantity - cartItem[0].count : quantity;

  return (
    <>
      <div className="lws-productCard">
        <img className="lws-productImage" src={image} alt="product" />
        <div className="p-4 space-y-2">
          <h4 className="lws-productName">{name}</h4>
          <p className="lws-productCategory">{category}</p>
          <div className="flex items-center justify-between pb-2">
            <p className="productPrice">
              BDT <span className="lws-price">{price}</span>
            </p>
            <p className="productQuantity">
              QTY <span className="lws-quantity">{shockQty}</span>
            </p>
          </div>
          <button disabled={shockQty <= 0} onClick={() => handleAddToCart(id)} className="lws-btnAddToCart">
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
