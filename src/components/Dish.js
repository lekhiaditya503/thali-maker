import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";
import Aloomutter from '../assests/Aloomutter.png';
import DalMakhani from '../assests/DalMakhani.png';
import KadaiBhindi from '../assests/KadaiBhindi.png';
import gobialoo from '../assests/gobialoo.png';

const Dish = ({ addDish, thali }) => {
  // let dishes = ['gobi aloo', 'PaneerJalfrezi', 'KadaiBhindi', 'Chanamasala', ' DalMakhani', 'Aloo-mutter'];
  let dishes =[
    {displayName:'gobi aloo',fileName:'gobialoo'},
    {displayName:'Paneer Jalfrezi',fileName:'PaneerJalfrezi'},
    {displayName:'Kadai Bhindi',fileName:'KadaiBhindi'},
    {displayName:'Chana masala',fileName:'Chanamasala'},
    {displayName:'Aloo mutter',fileName:'Aloomutter'},
  ]
  return (
    <div className="dishes container">
      
      <h3>Step 2: Choose Dish</h3>
      <ul>
        {dishes.map((item,inx) => {
          let spanClass = thali.dishes.includes(item) ? 'active' : '';
          return (
            <motion.li key={inx} onClick={() => addDish(item)} whileHover={{scale:1.2, x:20}}>
              <img src={"../assests/DalMakhani.png"} alt="" />
              <img src={Aloomutter} alt="" />
              <img src={`../assests/${item.fileName}.png`} alt="" />
              <span className={spanClass}>{ item.displayName }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <button>
          Order
        </button>
      </Link>

    </div>
  )
}

export default Dish;