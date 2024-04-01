
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'; 
import upload_area from "./Assets/upload_area.svg";
import { Link } from 'react-router-dom'; 

const UpdateProduct = () => {
  const { id } = useParams();
  const [image, setImage] = useState(false);
  const nav = useNavigate();

  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "",
    new_price: "",
    old_price: "",
    description: ""
  });

  useEffect(() => {
    axios.get("http://localhost:5000/api/getoneproduct/" + id)
      .then(res => {
        console.log(res.data);
        setProductDetails(res.data);
      })
      .catch(err => {
        console.log(err)
      });
  }, [id]);

  const changeHandler = (e) => {
    setProductDetails({
      ...productDetails,
      [e.target.name]: e.target.value
    });
  };

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        const addProductResponse = await axios.patch("http://localhost:5000/api/updateproduct/" + id, product, {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (addProductResponse.data.success) {
          console.log(addProductResponse.data);
          nav("/adminpanel/listproduct");
          toast.success("Product Updated");
        } else {
          toast.error("Failed");
        }
      }
    } catch (error) {
      console.error('Error updating product:', error);
      toast.error("Failed");
    }
  };

  return (
    <div className="container d-flex flex-column justify-content-start">
      <div className="d-flex justify-content-between align-item-center">
        <Link to='/adminpanel'>Admin Panel</Link>
      </div>

     
      <div className="container w-75 border rounded-5 p-4 m-5 shadow-lg bg-white mx-auto">
        <h2>Update Product</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label>Product title</label>
            <input type="text" name="name" value={productDetails.name} onChange={changeHandler} className="form-control" placeholder="Type the title" />
          </div>
          <div className='form-group mt-2'>
            <label>Product description</label>
            <textarea name="description" value={productDetails.description} onChange={changeHandler} className="form-control" placeholder="Type the Description" />
          </div>
          <div className="form-group row mt-2">
            <div className="form-group col-md-6">
              <label>Price</label>
              <input type="text" name="old_price" value={productDetails.old_price} onChange={changeHandler} className="form-control" placeholder="Price" />
            </div>
            <div className="form-group col-md-6">
              <label>Offer Price</label>
              <input type="text" name="new_price" value={productDetails.new_price} onChange={changeHandler} className="form-control" placeholder="Offer Price" />
            </div>
          </div>
          <div className="form-group mt-2">
            <label>Product category</label>
            <select value={productDetails.category} name="category" className="form-control" onChange={changeHandler}>
              <option value="women">Women</option>
              <option value="men">Men</option>
              <option value="kid">Kid</option>
            </select>
          </div>
          <div className="form-group mt-2">
            <label>Product Image</label>
            <label htmlFor="file-input">
              <img style={{width:"70px"}} src={!image ? productDetails.image || upload_area : URL.createObjectURL(image)} alt="" />
            </label>
            <input onChange={imageHandler} type="file" name="image" id="file-input" className="form-control-file" />
          </div>
          <button type="submit" className="btn btn-warning mt-5 w-50 mx-auto fs-4 ">Update</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UpdateProduct;
