import React from 'react';

const Order = ({ thali }) => {
  return (
    <div className="container order">
      <h2>Thank you for your order :</h2>
      <p>You ordered a {thali.size} thali with:</p>
      {thali.dishes.map(topping => <div key={topping}>{topping}</div>)}
    </div>
  )
}

export default Order;