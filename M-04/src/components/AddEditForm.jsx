/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import addBook from "../redux/books/thunk/addBook";
import updateBook from "../redux/books/thunk/updateBook";

function AddEditForm({ editId, setEditId }) {
  const books = useSelector(state => state.books);
  const dispatch = useDispatch();

  // form data state
  const [formData, setFormData] = useState({
    name: "",
    author: "",
    thumbnail: "",
    price: "",
    rating: "",
    featured: false,
  });
  // handle form data
  const handleFormData = e => {
    if (e.target.type === "checkbox") {
      setFormData(prev => ({ ...prev, [e.target.name]: e.target.checked }));
    } else {
      setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  // add book
  const handleAddBook = e => {
    e.preventDefault();

    dispatch(addBook(formData));
    setFormData({
      name: "",
      author: "",
      thumbnail: "",
      price: "",
      rating: "",
      featured: false,
    });
  };

  const handleSetEditFormData = id => {
    let editBook = books.filter(book => book.id === id)[0];
    setFormData(editBook);
  };

  const handleUpdateBook = (e, editId) => {
    e.preventDefault();
    dispatch(updateBook(editId, formData));

    setFormData({
      name: "",
      author: "",
      thumbnail: "",
      price: "",
      rating: "",
      featured: false,
    });
    setEditId(null);
  };

  console.log(formData);
  useEffect(() => {
    if (editId) {
      handleSetEditFormData(editId);
    }
  }, [editId]);

  return (
    <>
      <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
        <h4 className="mb-8 text-xl font-bold text-center">{editId ? "Update Book" : "Add New Book"}</h4>
        <form onSubmit={editId ? e => handleUpdateBook(e, editId) : handleAddBook} className="book-form">
          <div className="space-y-2">
            <label htmlFor="name">Book Name</label>
            <input onChange={handleFormData} value={formData.name} required className="text-input" type="text" id="input-Bookname" name="name" />
          </div>

          <div className="space-y-2">
            <label htmlFor="category">Author</label>
            <input
              onChange={handleFormData}
              value={formData.author}
              required
              className="text-input"
              type="text"
              id="input-Bookauthor"
              name="author"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="image">Image Url</label>
            <input
              onChange={handleFormData}
              value={formData.thumbnail}
              required
              className="text-input"
              type="text"
              id="input-Bookthumbnail"
              name="thumbnail"
            />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="price">Price</label>
              <input
                onChange={handleFormData}
                value={formData.price}
                required
                className="text-input"
                type="number"
                id="input-Bookprice"
                name="price"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="quantity">Rating</label>
              <input
                onChange={handleFormData}
                value={formData.rating}
                required
                className="text-input"
                type="number"
                id="input-Bookrating"
                name="rating"
                min="1"
                max="5"
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              checked={formData.featured}
              onChange={handleFormData}
              id="input-Bookfeatured"
              type="checkbox"
              name="featured"
              className="w-4 h-4"
            />
            <label htmlFor="input-Bookfeatured" className="ml-2 text-sm">
              {" "}
              This is a featured book{" "}
            </label>
          </div>

          <button type="submit" className="submit" id="submit">
            {editId ? "Update Book" : "Add Book"}
          </button>
        </form>
      </div>
    </>
  );
}

export default AddEditForm;
