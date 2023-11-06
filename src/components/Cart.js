import React from 'react'
import { useSelector } from 'react-redux'

export default function Cart() {
   const cartData = useSelector(state => state.orders.items)
   console.log(cartData)
  return (
    <div className='container cart'>
     { cartData.map((item,idx) =>
      <div className='cartItem'>
      <span>{`Order No: ${idx+1} `}</span>
      <span>{`Thali Size: ${item.size} `}</span>
      <span>{`Dishes: ${item.dishes} `}</span>
     </div> )}
     <div>{`Total Items: ${cartData.length}`}</div>
     <button>Order Now</button>
    </div>
  )
}
