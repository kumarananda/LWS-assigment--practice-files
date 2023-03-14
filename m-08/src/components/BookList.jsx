/** @format */

import React from "react";
import { useGetBooksQuery } from "../features/api/apiSlice";
import Book from "./Book";

function BookList() {
  const { data: books, isError, isLoading, error } = useGetBooksQuery();

  let content = null;
  if (isLoading) {
    content = "Loading...";
  }
  if (!isLoading && isError) {
    content = "error";
  }
  if (!isLoading && !isError && books?.length === 0) {
    content = "No books found";
  }
  if (!isLoading && !isError && books?.length === 0) {
    content = "No books found";
  }
  if (!isLoading && !isError && books?.length > 0) {
    content = books?.map(book => <Book book={book} key={book.id} />);
  }

  return (
    <>
      <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">{content}</div>
    </>
  );
}

export default BookList;
