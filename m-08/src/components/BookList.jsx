/** @format */

import React from "react";
import { useGetBooksQuery } from "../features/api/apiSlice";
import Book from "./Book";

function BookList() {
  const {
    data: books,
    isError,
    isLoading,
    isFetching,
    isSuccess,
    refetch,
    error,
  } = useGetBooksQuery(undefined, {
    // pollingInterval: 3000, // milliseconds // // continuously refetch automatically after 3second
    // skip: true, // skip on first load & control with any type of value or event
  });
  // use refetch  for refetch data with event as on click or etc.

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
    content = books?.map(book => <Book book={book} key={book.id} refetch={refetch} />);
  }

  return (
    <>
      <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">{content}</div>
    </>
  );
}

export default BookList;
