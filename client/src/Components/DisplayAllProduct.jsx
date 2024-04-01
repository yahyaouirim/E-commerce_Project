// import React, { useEffect, useState } from "react";
// import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify'; 
// import 'react-toastify/dist/ReactToastify.css';
// import { Link } from 'react-router-dom'; 
// import cross_icon from './Assets/cross_icon.png';
// const DisplayAllProduct = () => {
//   const [allproducts, setAllProducts] = useState([]);

//   const fetchInfo = () => {
//     axios.get('http://localhost:5000/api/getallproduct') 
//       .then((response) => {
//         setAllProducts(response.data); 
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   };

//   useEffect(() => {
//     fetchInfo();
//   }, []);

//   const removeProduct = async (id) => {
//     try {
//       await axios.delete('http://localhost:5000/api/deleteproduct', {
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//         },
//         data: { id: id },
//       });

//       fetchInfo();
//       toast.success("Product removed successfully"); 
//     } catch (error) {
//       console.error('Error deleting product:', error);
//       toast.error("Failed to remove product"); 
//     }
//   };

//   return (
//     <div className="listproduct bg-wihte d-flex flex-column ">
//       <div className="d-flex justify-content-between align-item-center ">
//       <h1>All Products</h1>
//       <Link to='/adminpanel'>Admin Panel</Link>
//       </div>
//       <table className="table table-striped table-hover shadow-lg  justify-content-center align-item-center ">
//         <thead className="table-dark">
//           <tr className="text-center">
//             <th>Products</th>
//             <th>Title</th>
//             <th>Old Price</th>
//             <th>New Price</th>
//             <th>Category</th>
//             <th>Actions</th> 
//           </tr>
//         </thead>
//         <tbody>
//           {allproducts.map((e) => (
//             <tr key={e.id} className="text-center align-item-center">
//               <td><img style={{width:"60px"}} src={e.image} alt="" /></td>
//               <td>{e.name}</td>
//               <td>${e.old_price}</td>
//               <td>${e.new_price}</td>
//               <td>{e.category}</td>
//               <td className="gap-2 w-25">
//                 <Link to={`/adminpanel/update/${e.id}`}  className="btn btn-warning me-2">Update</Link>
//                 <img className="btn btn-danger p-2" onClick={() => { removeProduct(e.id) }} src={cross_icon} alt="" />
//                 <Link to={`/adminpanel/view/${e.id}`}  className="btn btn-warning me-2">View</Link>

//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <ToastContainer /> 
//     </div>
//   );
// };

// export default DisplayAllProduct;


import React, { useEffect, useState } from "react";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import cross_icon from './Assets/cross_icon.png';

const DisplayAllProduct = () => {
    const [allproducts, setAllProducts] = useState([]);

    const fetchInfo = () => {
        axios.get('http://localhost:5000/api/getallproduct')
            .then((response) => {
                setAllProducts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    useEffect(() => {
        fetchInfo();
    }, []);

    const removeProduct = async (id) => {
        try {
            await axios.delete('http://localhost:5000/api/deleteproduct', {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                data: { id: id },
            });

            fetchInfo();
            toast.success("Product removed successfully");
        } catch (error) {
            console.error('Error deleting product:', error);
            toast.error("Failed to remove product");
        }
    };

    return (
        <div className="listproduct bg-light d-flex flex-column">
            <div className="d-flex justify-content-around align-items-center ">
                <h1 className="mb-0">All Products</h1>
                <Link to='/adminpanel' className="text-decoration-none">Admin Panel</Link>
            </div>
            <div className="table-responsive m-3 p-5">
                <table className="table bg-white table-striped shadow-lg">
                    <thead className="table-dark">
                        <tr className="text-center">
                            <th>Products</th>
                            <th>Title</th>
                            <th>Old Price</th>
                            <th>New Price</th>
                            <th>Category</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allproducts.map((e) => (
                            <tr key={e.id} className="text-center align-items-center">
                                <td><img style={{ width: "60px" }} src={e.image} alt="" /></td>
                                <td>{e.name}</td>
                                <td>${e.old_price}</td>
                                <td>${e.new_price}</td>
                                <td>{e.category}</td>
                                <td className="d-flex align-items-center gap-2">
                                    <Link to={`/adminpanel/update/${e.id}`} className="btn btn-warning">Update</Link>
                                    <img className="btn btn-danger p-2" onClick={() => { removeProduct(e.id) }} src={cross_icon} alt="" />
                                    <Link to={`/adminpanel/view/${e.id}`} className="btn btn-warning">View</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <ToastContainer />
        </div>
    );
};

export default DisplayAllProduct;
