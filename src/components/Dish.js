import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Aloomutter from '../assests/Aloomutter.png';
import DalMakhani from '../assests/DalMakhani.png';
import KadaiBhindi from '../assests/KadaiBhindi.png';
import gobialoo from '../assests/gobialoo.png';
import Chanamasala from '../assests/Chanamasala.png';
import PaneerJalfrezi from '../assests/PaneerJalfrezi.png';

const Dish = ({ addDish, thali }) => {
  // let dishes = ['gobi aloo', 'PaneerJalfrezi', 'KadaiBhindi', 'Chanamasala', ' DalMakhani', 'Aloo-mutter'];
  let dishes = [
    { displayName: 'gobi aloo', fileName: gobialoo },
    { displayName: 'Paneer Jalfrezi', fileName: PaneerJalfrezi },
    { displayName: 'Kadai Bhindi', fileName: KadaiBhindi },
    { displayName: 'Chana masala', fileName: Chanamasala },
    { displayName: 'Aloo mutter', fileName: Aloomutter },
    { displayName: 'Dal Makhani', fileName: DalMakhani },
  ];
  return (
    <div className='dishes container'>
      <h3>Step 2: Choose Dish</h3>
      <ul>
        {dishes.map((item, inx) => {
          let spanClass = thali.dishes.includes(item.displayName) ? 'active' : '';
          return (
            <motion.li
              key={inx}
              onClick={() => addDish(item.displayName)}
              whileHover={{ scale: 1.2, x: 20 }}>
              <img src={item.fileName} alt='' />
              <span className={spanClass}>{item.displayName}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to='/order'>
        <motion.button
          whileHover={{ 
            scale: 1.1, 
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
        >Order</motion.button>
      </Link>
    </div>
  );
};

export default Dish;
