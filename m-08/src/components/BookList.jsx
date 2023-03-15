/** @format */

import React from "react";
import { useSelector } from "react-redux";
import { useGetBooksQuery } from "../features/api/apiSlice";
import Book from "./Book";
import { Empty, Error, Updating } from "./ui/InfoPopups";

function BookList() {
  const { featuredShow, searchValue } = useSelector(state => state.filter);
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

  const filterByFeatured = item => {
    if (featuredShow === "All") {
      return true;
    } else if (featuredShow === "Featured") {
      return item.featured;
    }
  };
  const filterBySearchValue = item => {
    console.log(searchValue);
    if (!searchValue) {
      return true;
    } else if (searchValue) {
      return item.name.toLowerCase().includes(searchValue.toLowerCase());
    }
  };

  const showCount = books?.filter(filterByFeatured).filter(filterBySearchValue).length;

  let content = null;
  if (isLoading) {
    content = <Updating>LOADING....</Updating>;
  }
  if (!isLoading && isError) {
    content = <Error />;
  }
  if (!isLoading && !isError && books?.length === 0) {
    content = <Empty />;
  }
  if (!isLoading && !isError && books?.length > 0) {
    if (showCount === 0) {
      content = <Updating>No item to show</Updating>;
    } else {
      content = books
        ?.filter(filterByFeatured)
        .filter(filterBySearchValue)
        .map(book => <Book book={book} key={book.id} refetch={refetch} />);
    }
  }

  return (
    <>
      <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">{content}</div>
    </>
  );
}

export default BookList;
