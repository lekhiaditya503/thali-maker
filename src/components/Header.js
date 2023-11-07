import React from 'react';
import cart from '../assests/svg/shopping_cart.svg';
import { useNavigate } from 'react-router-dom';

import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const cartData = useSelector(state => state.orders.items )
  return (
    <motion.header
      initial={{ y: -100 }}
      transition={{ duration: 0.7 }}
      animate={{ y: 0 }}>
      <div className='logo'></div>
      <div
        className='title'
        onClick={() => navigate('/')}
        style={{ cursor: 'pointer' }}>
        <h1>Thali maker</h1>
      </div>
      <motion.div
        style={{ cursor: 'pointer',display:'flex',gap:'10px', alignItems:'center' }}
        onClick={() => navigate('/cart')}
        whileHover={{
          scale: 1.1,
        }}>
          <span
                style={{
                  backgroundColor: 'transparent',
                  border:"solid 2px white",
                  borderRadius:"20px", 
                  textAlign:'center',
                  display:'block',
                  height: '30px',
                  width: '30px',
                  lineHeight:'30px',
                  borderRadius: '20px',
                  alignSelf:'center',
                  justifySelf:'center'
                }}>
                {cartData.length}
              </span>

        <img src={cart} alt='cart' /> <span>Cart</span>
      </motion.div>
    </motion.header>
  );
};

export default Header;
