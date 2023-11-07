import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {odersActions} from '../redux/oders/oderstReducer'

import {motion} from 'framer-motion'
import Modal from './Modal'

export default function Cart({clearThali}) {
  const [show,setShow] = useState(false);
   const cartData = useSelector(state => state.orders.items)
   const dispatch = useDispatch();

   console.log(cartData)

   function closeModal(){
    setShow(false)
   }

   function onOrderClick(){
    setShow(true)
    clearThali();
    dispatch(odersActions.clearCart())

   }

  return (
    <>
    {show && <Modal closeModal={closeModal}/>}
    <motion.div className='container cart'
      initial={{ opacity: 0, x: '100vw' }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', delay: 0.5 }}
    >
      
     { cartData.map((item,idx) =>
      <div className='cartItem' key={idx}>
      <span>{`Order No: ${idx+1} `}</span>
      <span>{`Thali Size: ${item.size} `}</span>
      <span>{`Dishes: ${item.dishes} `}</span>
     </div> )}
     <div>{`Total Items: ${cartData.length}`}</div>
     <motion.button


      whileHover={{ 
        scale: 1.1, 
        textShadow: "0px 0px 8px rgb(255,255,255)",
        boxShadow: "0px 0px 8px rgb(255,255,255)",
      }}
      onClick={onOrderClick}
    
     >Order Now</motion.button>
    </motion.div>
    </>
  )
}
