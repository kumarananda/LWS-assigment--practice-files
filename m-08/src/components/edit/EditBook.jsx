/** @format */

import React from "react";
import { useParams } from "react-router-dom";
import { useGetBookQuery } from "../../features/api/apiSlice.js";
import Form from "./Form.jsx";

function EditBook() {
  const { editId } = useParams();
  const { data: book, isLoading, isSuccess, isError } = useGetBookQuery(editId);

  let content;
  if (isLoading) {
    content = "Loading...";
  }
  if (!isLoading && isError) {
    content = "Thare was an error";
  }
  if (!isLoading && !isError && book?.id) {
    content = <Form book={book} />;
  }
  return (
    <>
      <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
        <h4 className="mb-8 text-xl font-bold text-center">Edit Book</h4>
        {content}
      </div>
    </>
  );
}

export default EditBook;
