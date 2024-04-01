// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Sidebar from "./Sidebar/Sidebar";
// import AddProduct from "./AddProduct/AddProduct";
// import DisplayAllProduct from "./DisplayAllProduct/DisplayAllProduct";
// import UpdateProduct from "./UpdateProduct/UpdateProduct";
// import ViewProduct from "./ViewProduct/ViewProduct";
// const Admin = () => {

//     return (
//         <div className="admin">
//             <Sidebar />
//             <Routes>
//                 <Route path="/adminpanel/addproduct" element={<AddProduct />} />
//                 <Route path="/adminpanel/listproduct" element={<DisplayAllProduct />} />
//                 <Route path="/adminpanel/update/:id" element={<UpdateProduct />} />
//                 <Route path="/adminpanel/view/:id" element={<ViewProduct />} />

//             </Routes>
//         </div>
//     );
// };

// export default Admin;

// Dans Admin.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import AddProduct from "./AddProduct";
import DisplayAllProduct from "./DisplayAllProduct";
import UpdateProduct from "./UpdateProduct";
import ViewProduct from "./ViewProduct";

const Admin = () => {
    return (
        <div className="admin">
            <Sidebar />
            <Routes>
                <Route path="/adminpanel/addproduct" element={<AddProduct />} />
                <Route path="/adminpanel/listproduct" element={<DisplayAllProduct />} />
                <Route path="/adminpanel/update/:id" element={<UpdateProduct />} />
                <Route path="/adminpanel/view/:id" element={<ViewProduct />} />
            </Routes>
        </div>
    );
};

export default Admin;