/** @format */

import React from "react";
import Filter from "../components/Filter.jsx";
import BookList from "../components/BookList.jsx";

function Home() {
  return (
    <>
      <main className="py-12 px-6 2xl:px-6 container">
        <div className="order-2 xl:-order-1">
          <Filter />
          <BookList />
        </div>
      </main>
    </>
  );
}

export default Home;
