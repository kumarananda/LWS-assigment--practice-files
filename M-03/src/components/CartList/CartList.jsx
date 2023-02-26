/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import { decreaseCartCount, deleteCart, increaseCartCount } from "../../redux/cart/actions";

const CartList = ({ cart, products }) => {
  const dispatch = useDispatch();
  const product = products.filter(product => product.id === cart.productId)[0];

  const handleCartDelete = cartId => {
    dispatch(deleteCart(cartId));
  };
  const handleIncreaseCart = cartId => {
    dispatch(increaseCartCount(cartId));
  };
  const handleDecreaseCart = cartId => {
    dispatch(decreaseCartCount(cartId));
  };

  return (
    <>
      {/*  Cart Item */}
      <div className="cartCard">
        <div className="flex items-center col-span-6 space-x-6">
          {/*  cart image */}
          <img className="lws-cartImage" src={product.image} alt="product" />
          {/*  cart item info */}
          <div className="space-y-2">
            <h4 className="lws-cartName">{product.name}</h4>
            <p className="lws-cartCategory">{product.category}</p>
            <p>
              BDT <span className="lws-cartPrice">{product.price}</span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
          {/*  amount buttons */}
          <div className="flex items-center space-x-4">
            <button disabled={cart.count >= product.quantity} onClick={() => handleIncreaseCart(cart.cartId)} className="lws-incrementQuantity">
              <i className="text-lg fa-solid fa-plus"></i>
            </button>
            <span className="lws-cartQuantity">{cart.count}</span>
            <button disabled={cart.count <= 1} onClick={() => handleDecreaseCart(cart.cartId)} className="lws-decrementQuantity">
              <i className="text-lg fa-solid fa-minus"></i>
            </button>
          </div>
          {/*  price */}
          <p className="text-lg font-bold">
            BDT <span className="lws-calculatedPrice">{product.price * cart.count}</span>
          </p>
        </div>
        {/*  delete button */}
        <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
          <button onClick={() => handleCartDelete(cart.cartId)} className="lws-removeFromCart">
            <i className="text-lg text-red-400 fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
      {/*  Cart Items Ends */}
    </>
  );
};

export default CartList;
