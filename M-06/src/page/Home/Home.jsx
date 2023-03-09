/** @format */

import React from "react";
import AsideHomeFilter from "../../components/AsideHomeFilter/AsideHomeFilter.jsx";

import AllPostContainer from "../../components/AllPostContainer/AllPostContainer.jsx";

const Home = () => {
  return (
    <>
      {/* <!-- main --> */}
      <section className="wrapper">
        <AsideHomeFilter />
        <AllPostContainer />
      </section>
    </>
  );
};

export default Home;
