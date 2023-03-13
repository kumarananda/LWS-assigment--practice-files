/** @format */

import React from "react";
import Book from "./Book.jsx";

function BookList() {
  return (
    <>
      <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/*Card 1  */}

        <Book />
      </div>
    </>
  );
}

export default BookList;
