import React from 'react';
import cart from '../assests/svg/shopping_cart.svg'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <div className="logo">
      </div>
      <div className="title" onClick={() => navigate('/')} style={{cursor:'pointer'}}> 
        <h1>Thali maker</h1>
      </div>
      <div style={{cursor:'pointer'}} onClick={() => navigate('/cart')}>
      <img src={cart} alt='cart' /> <span>Cart</span>
      </div>
    </header>
  )
}

export default Header;