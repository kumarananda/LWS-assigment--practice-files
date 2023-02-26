/** @format */

import React from "react";

import AddProduct from "../components/AddProduct/AddProduct";
import ProContainer from "../components/ProContainer/ProContainer";

const HomePage = () => {
  return (
    <>
      <main className="py-16">
        <div className="productWrapper">
          <ProContainer />

          <div>
            {/*  Product Input Form */}
            <AddProduct />
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
