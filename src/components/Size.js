import React from 'react';
import { Link } from 'react-router-dom';

import {motion} from 'framer-motion'

const Size = ({ addSize, thali }) => {
  const size = ['Khali Bali Thali', 'Bahubali Thali', 'Dara Singh Thali'];

  return (
    <div className="size container">

      <h3>Step 1: Choose Your Thali size</h3>
      <ul>
        {size.map(base => {
          let spanClass = thali.size === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addSize(base)}
            whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {thali.size && (
        <div className="next">
          <Link to="/dish">
            <motion.button
              whileHover={{ 
                scale: 1.1, 
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
            >Next</motion.button>
          </Link>
        </div>
      )}

    </div>
  )
}

export default Size;