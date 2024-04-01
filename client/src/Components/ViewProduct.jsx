import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'; 

const ViewProduct = () => {
    const { id } = useParams();
  
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
  
  
    return (
        <div className="container d-flex flex-column justify-content-start">
            <div className="d-flex justify-content-between align-item-center">
                <Link to='/adminpanel'>Admin Panel</Link>
            </div>

            <div className='border rounded-5 bg-white p-4 m-5 w-75 shadow-lg mx-auto'>
                <h2>Product Details</h2>
                <p>Title: {productDetails.name}</p>
                <p>Description: {productDetails.description}</p>
                <p>Category: {productDetails.category}</p>
                <p>Old Price: {productDetails.old_price}</p>
                <p>New Price: {productDetails.new_price}</p>
            </div>
        </div>
    )
}

export default ViewProduct