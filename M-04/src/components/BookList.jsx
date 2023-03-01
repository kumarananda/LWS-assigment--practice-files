/** @format */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchBooks from "../redux/books/thunk/fetchBooks";
import { filterStatus } from "../redux/filters/actions";
import BookCard from "./BookCard";

function BookList({ setState }) {
  const books = useSelector(state => state.books);
  const filters = useSelector(state => state.filters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks);
  }, [dispatch]);

  const handleStatusChange = status => {
    dispatch(filterStatus(status));
  };
  // file by status
  const filterByStatus = book => {
    if (filters.status === "All") {
      return book;
    } else if (filters.status === "Featured") {
      return book.featured;
    }
  };
  // file by status
  const filterByName = book => {
    if (!filters.search) {
      return true;
    } else if (filters.search) {
      return book.name.toLowerCase().includes(filters.search.toLowerCase());
    }
  };

  return (
    <>
      <div className="flex items-center justify-between mb-12">
        <h4 className="mt-2 text-xl font-bold">Book List</h4>

        <div className="flex items-center space-x-4">
          <button onClick={() => handleStatusChange("All")} className="filter-btn active-filter" id="lws-filterAll">
            All
          </button>
          <button onClick={() => handleStatusChange("Featured")} className="filter-btn" id="lws-filterFeatured">
            Featured
          </button>
        </div>
      </div>
      <div className="lws-bookContainer">
        {/* <!-- Card 1 --> */}

        {books
          .filter(filterByStatus)
          .filter(filterByName)
          .map((book, index) => (
            <div key={index}>
              <BookCard book={book} setEditId={setState} />
            </div>
          ))}
      </div>
    </>
  );
}

export default BookList;
