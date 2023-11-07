import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      className='home container'
      initial={{ opacity: 0, x: '100vw' }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', delay: 0.5 }}
      >
      <motion.h2>Welcome to Thali Maker</motion.h2>
      <Link to='/size'>
        <motion.button 
        whileHover={{ 
            scale: 1.1, 
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}>
          Create Your Thali
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
