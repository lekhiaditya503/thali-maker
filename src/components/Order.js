import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {odersActions} from '../redux/oders/oderstReducer'

const Order = ({ thali }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function addItemToCart(){
    console.log('Hello')
    dispatch(odersActions.addItemToCart(thali))

  }
  return (
    <div className="container order">
      <h2>Thank you for your order :</h2>
      <p>You ordered a {thali.size} thali with:</p>
      {thali.dishes.map(item => <div key={item}>{item}</div>)}
      <div className="flex">
        <button onClick={() => navigate('/')}>Order Again</button>
        <button onClick={() => addItemToCart(thali)}>Add to Cart</button>
      </div>
    </div>
  )
}

export default Order;