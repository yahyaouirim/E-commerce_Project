// import React from 'react'
// import add_product_icon from './Assets/Product_Cart.svg'
// import list_product_icon from './Assets/Product_list_icon.svg'
// import { Link } from 'react-router-dom'

// const Sidebar = () => {
//   return (
//     <div className='col-md-12  bg-light d-flex justify-content-between mx-auto'>
//       <Link to='/adminpanel/addproduct' style={{ textDecoration: 'none' }}>
//         <div className="bg-white p-3 m-3 col-md-6 col-sm-12 rounded-3 d-flex justify-content-between shadow-lg fs-4 text-warning">
//           <img src={add_product_icon} alt="" />
//           <p>Add Product</p>
//         </div>
//       </Link>
//       <Link to='/adminpanel/listproduct' style={{ textDecoration: 'none' }}>
//       <div className="bg-white p-3 m-3 rounded-3 col-md-6 col-sm-12 d-flex justify-content-between shadow-lg fs-4 text-warning">
//           <img src={list_product_icon} alt="" />
//           <p> Product List</p>
//         </div>
//       </Link>
      
//     </div>
//   )
// }

// export default Sidebar

import React from 'react';
import add_product_icon from './Assets/Product_Cart.svg';
import list_product_icon from './Assets/Product_list_icon.svg';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='col-md-12 bg-light d-flex flex-column flex-sm-row justify-content-between mx-auto'>
      <Link to='/adminpanel/addproduct' style={{ textDecoration: 'none' }}>
        <div className="bg-white p-3 m-3 col-md-12 col-sm-12 rounded-3 d-flex flex-row justify-content-center align-items-center shadow-lg fs-4 text-warning">
          <img src={add_product_icon} alt="" style={{ width: '50px', height: '50px' }} />
          <p className="mt-2">Add Product</p>
        </div>
      </Link>
      <Link to='/adminpanel/listproduct' style={{ textDecoration: 'none' }}>
        <div className="bg-white p-3 m-3 rounded-3 col-md-12 col-sm-12 d-flex flex-row justify-content-center align-items-center shadow-lg fs-4 text-warning">
          <img src={list_product_icon} alt="" style={{ width: '50px', height: '50px' }} />
          <p className="mt-2">Product List</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;

