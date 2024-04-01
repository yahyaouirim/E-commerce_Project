
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from './Components/Menu/Menu';
import Home from './Pages/Home';
import LoginRegister from './Pages/LoginRegister';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import OneProduct from './Pages/OneProduct';
import Footer from './Components/Footer/Footer';
import banner_men from './Components/Assets/banner_Sale22.jpg';
import banner_kids from './Components/Assets/banner_kids.jpg';
import banner_women from './Components/Assets/banner_women1.jpg';
import AdminPanel from './Pages/AdminPanel';
import ViewProduct from './Components/ViewProduct';
import UpdateProduct from './Components/UpdateProduct';
import DisplayAllProduct from './Components/DisplayAllProduct';
import AddProduct from './Components/AddProduct';

function App() {
  return (
    <div>
      <Router>
        
        <Routes>
          <Route path="/" element={ <><Menu womens="Womens" men="Men" kids="Kids" /><Home /> </>} />
          <Route path="/women" element={<><Menu  womens="Womens" men="Men" kids="Kids" /><ShopCategory /></>} />
          <Route path="/login" element={<><Menu  womens="Womens" men="Men" kids="Kids" /><LoginRegister /></>} />
          <Route path="/cart" element={<><Menu  womens="Womens" men="Men" kids="Kids" /><Cart /></>} />
          <Route path="/mens" element={<><Menu  womens="Womens" men="Men" kids="Kids" /><ShopCategory banner={banner_men} category="men" /></>} />
          <Route path="/womens" element={<><Menu womens="Womens" men="Men" kids="Kids" /><ShopCategory banner={banner_women} category="women" /></>} />
          <Route path="/kids" element={<><Menu womens="Womens" men="Men" kids="Kids" /><ShopCategory banner={banner_kids} category="kid" /></>} />
          <Route path="/product/:productId" element={<><Menu home="Home" womens="Womens" men="Men" kids="Kids" /><OneProduct /></>} />
          <Route path="/adminpanel/*" element={<> <Menu adminpanel="AdminPanel" /> <AdminPanel /></>} />
          <Route path="/adminpanel/addproduct" element={<> <Menu adminpanel="AdminPanel" /> <AddProduct /></>} />
          <Route path="/adminpanel/listproduct" element={<> <Menu adminpanel="AdminPanel" /> <DisplayAllProduct /></>} /> 
          <Route path="/adminpanel/update/:id" element={<> <Menu adminpanel="AdminPanel" /><UpdateProduct /></>} />
          <Route path="/adminpanel/view/:id" element={<> <Menu adminpanel="AdminPanel" /><ViewProduct/></>}/> 

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;