/** @format */

import React, { useState } from "react";
import { useEditBookMutation } from "../../features/api/apiSlice";

function Form({ book = {} }) {
  const [bookData, setBookData] = useState({
    name: book?.name,
    author: book?.author,
    thumbnail: book?.thumbnail,
    price: book?.price,
    rating: book?.rating,
    featured: book?.featured,
  });

  const [editBook, {}] = useEditBookMutation();
  const { name, author, thumbnail, price, rating, featured, id } = bookData;

  const handleSetBookData = e => {
    if (e.target.type === "checkbox") {
      setBookData(prev => ({
        ...prev,
        [e.target.name]: e.target.checked,
      }));
    } else {
      setBookData(prev => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    editBook({ id: book.id, data: bookData });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="book-form">
        <div className="space-y-2">
          <label htmlFor="lws-bookName">Book Name</label>
          <input onChange={handleSetBookData} value={name} required className="text-input" type="text" id="lws-bookName" name="name" />
        </div>

        <div className="space-y-2">
          <label htmlFor="lws-author">Author</label>
          <input onChange={handleSetBookData} value={author} required className="text-input" type="text" id="lws-author" name="author" />
        </div>

        <div className="space-y-2">
          <label htmlFor="lws-thumbnail">Image Url</label>
          <input onChange={handleSetBookData} value={thumbnail} required className="text-input" type="text" id="lws-thumbnail" name="thumbnail" />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label htmlFor="lws-price">Price</label>
            <input onChange={handleSetBookData} value={price} required className="text-input" type="number" id="lws-price" name="price" />
          </div>

          <div className="space-y-2">
            <label htmlFor="lws-rating">Rating</label>
            <input
              onChange={handleSetBookData}
              value={rating}
              required
              className="text-input"
              type="number"
              id="lws-rating"
              name="rating"
              min="1"
              max="5"
            />
          </div>
        </div>

        <div className="flex items-center">
          <input onChange={handleSetBookData} checked={featured} id="lws-featured" type="checkbox" name="featured" className="w-4 h-4" />
          <label htmlFor="lws-featured" className="ml-2 text-sm">
            This is a featured book
          </label>
        </div>

        <button type="submit" className="submit" id="lws-submit">
          Edit Book
        </button>
      </form>
    </>
  );
}

export default Form;
