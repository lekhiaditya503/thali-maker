import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      className='home container'
      initial={{ rotateZ: 180 }}
      animate={{ rotateZ: 0 }}>
      <motion.h2>Welcome to Thali Maker</motion.h2>
      <Link to='/size'>
        <motion.button whileHover={{ scale: 1.5,textShadow: '0 10px 10px black' }}>
          Create Your Thali
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
