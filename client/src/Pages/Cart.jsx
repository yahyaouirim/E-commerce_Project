import React from 'react';
import CartItems from '../Components/CartItems/CartItems';
const Cart = () => {
  // const token = localStorage.getItem("auth-token");
  // const navigate = useNavigate();
  // const handleLogin = () => {
  //   navigate('/login');
  // };

  return (
    <div>
      {/* {token ? <CartItems /> : (
        <div className='d-flex p-5 m-5 align-item-center'>
          <p>You should login before starting shopping.</p>
          <button  className='btn btn-primary' onClick={handleLogin}>Login</button>
        </div>
      )} */}
      <CartItems/>
    </div>
  );
};

export default Cart;
