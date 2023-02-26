/** @format */

import React from "react";
import { useSelector } from "react-redux";
import BillDetails from "../components/BillDetails/BillDetails.jsx";
import CartList from "../components/CartList/CartList.jsx";

const CartPage = () => {
  const carts = useSelector(state => state.carts);
  const products = useSelector(state => state.products);

  return (
    <>
      <main className="py-16">
        <div className="container 2xl:px-8 px-2 mx-auto">
          <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
          <div className="cartListContainer">
            <div className="space-y-6">
              {carts.length <= 0 && <div>Your Cart Is Empty</div>}
              {carts.map((cart, index) => {
                return <CartList cart={cart} products={products} key={index} />;
              })}
            </div>

            {/*  Bill Details */}
            <div>
              <BillDetails />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CartPage;
