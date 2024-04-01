
  
import React, { useState } from "react";
import axios from 'axios'; 
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import upload_area from "./Assets/upload_area.svg";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: "",
    description: ""
  });

  const AddProduct = async () => {
    try {
      let formData = new FormData();
      formData.append('product', image);

      const uploadResponse = await axios.post('http://localhost:5000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (uploadResponse.data.success) {
        const product = { ...productDetails, image: uploadResponse.data.image_url };
        const addProductResponse = await axios.post('http://localhost:5000/api/addproduct', product, {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (addProductResponse.data.success) {
          toast.success("Product Added");
        } else {
          toast.error("Failed");
        }
      }
    } catch (error) {
      console.error('Error adding product:', error);
      toast.error("Failed");
    }
  }

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  }

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    AddProduct();
  }

  return (
    <div className="container w-50 p-3 bg-white mt-5  mb-5 mx-auto shadow-lg ">
      <div className="d-flex justify-content-between align-item-center">
      <h1>Add Product</h1>
      <Link to='/adminpanel'>Admin Panel</Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Product title</label>
          <input type="text" name="name" value={productDetails.name} onChange={(e) => { changeHandler(e) }} className="form-control" placeholder="Type the title" />
        </div>
        <div className="form-group mt-3">
          <label>Product description</label>
          <textarea name="description" value={productDetails.description} onChange={(e) => { changeHandler(e) }} className="form-control" placeholder="Type the Description" />
        </div>
        <div className="form-group row mt-3">
          <div className="form-group col-md-6">
            <label>Price</label>
            <input type="text" name="old_price" value={productDetails.old_price} onChange={(e) => { changeHandler(e) }} className="form-control" placeholder="Price" />
          </div>
          <div className="form-group col-md-6">
            <label>Offer Price</label>
            <input type="text" name="new_price" value={productDetails.new_price} onChange={(e) => { changeHandler(e) }} className="form-control" placeholder="Offer Price" />
          </div>
        </div>
        <div className="form-group mt-3">
          <label>Product category</label>
          <select value={productDetails.category} name="category" className="form-control" onChange={changeHandler}>
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="kid">Kid</option>
          </select>
        </div>
        <div className="form-group mt-3">
          <label>Product Image</label>
          <input onChange={(e) => { imageHandler(e) }} type="file" name="image" className="form-control-file" />
          <img className="addproduct-thumbnail-img" src={!image ? upload_area : URL.createObjectURL(image)} alt="" />
        </div>
        <button type="submit" className="btn btn-primary w-50 fs-4 mt-5">ADD</button>
      </form>
      <ToastContainer /> 
    </div>
  );
};

export default AddProduct;
