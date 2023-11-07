import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {odersActions} from '../redux/oders/oderstReducer'

import {motion} from 'framer-motion'

const Order = ({ thali,clearThali }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function addItemToCart(){
    console.log('Hello')
    dispatch(odersActions.addItemToCart(thali))
  }

  function orderAgain(){
    clearThali();
    navigate('/');
  }

  return (
    <div className="container order">
      <h2>Thank you for your order :</h2>
      <p>You ordered a {thali.size} thali with:</p>
      {thali.dishes.map(item => <div key={item}>{item}</div>)}
      <div className="flex">
        <motion.button onClick={orderAgain}
          whileHover={{ 
            scale: 1.1, 
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
        >Order Again</motion.button>
        <motion.button onClick={() => addItemToCart(thali)}
          whileHover={{ 
            scale: 1.1, 
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
        >Add to Cart</motion.button>
      </div>
    </div>
  )
}

export default Order;