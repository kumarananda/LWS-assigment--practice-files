/** @format */

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewProduct } from "../../redux/product/actions";

const AddProduct = () => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  // form data state
  const [porductForn, setProductForm] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    quantity: "",
  });

  // handle form input data
  const handleFormData = e => {
    setProductForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // handle Product Add
  const handleProductAdd = e => {
    e.preventDefault();

    dispatch(addNewProduct(porductForn));
    setProductForm({
      name: "",
      category: "",
      image: "",
      price: "",
      quantity: "",
    });
    return;
  };

  return (
    <>
      {/*  Product Input Form */}
      <div className="formContainer">
        <h4 className="formTitle">Add New Product</h4>
        <form onSubmit={handleProductAdd} className="space-y-4 text-[#534F4F]" id="lws-addProductForm">
          {/*  product name */}
          <div className="space-y-2">
            <label htmlFor="lws-inputName">Product Name</label>
            <input
              value={porductForn.name}
              onChange={handleFormData}
              name="name"
              className="addProductInput"
              id="lws-inputName"
              type="text"
              required
            />
          </div>
          {/*  product category */}
          <div className="space-y-2">
            <label htmlFor="lws-inputCategory">Category</label>
            <input
              value={porductForn.category}
              onChange={handleFormData}
              name="category"
              className="addProductInput"
              id="lws-inputCategory"
              type="text"
              required
            />
          </div>
          {/*  product image url */}
          <div className="space-y-2">
            <label htmlFor="lws-inputImage">Image Url</label>
            <input
              value={porductForn.image}
              onChange={handleFormData}
              name="image"
              className="addProductInput"
              id="lws-inputImage"
              type="text"
              required
            />
          </div>
          {/*  price & quantity container */}
          <div className="grid grid-cols-2 gap-8 pb-4">
            {/*  price */}
            <div className="space-y-2">
              <label htmlFor="lws-inputPrice">Price</label>
              <input
                value={porductForn.price}
                onChange={handleFormData}
                name="price"
                className="addProductInput"
                type="number"
                id="lws-inputPrice"
                required
              />
            </div>
            {/*  quantity */}
            <div className="space-y-2">
              <label htmlFor="lws-inputQuantity">Quantity</label>
              <input
                value={porductForn.quantity}
                onChange={handleFormData}
                name="quantity"
                className="addProductInput"
                type="number"
                id="lws-inputQuantity"
                required
              />
            </div>
          </div>
          {/*  submit button */}
          <button type="submit" id="lws-inputSubmit" className="submit">
            Add Product
          </button>
        </form>
      </div>
      {/*  Product Input Form Ends */}
    </>
  );
};

export default AddProduct;
