import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      exit={{ x: '100vw' }}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      <h1>Welcome to the Home Page</h1>
      <p>This is the starting page of the website.</p>
    </motion.div>
  );
};

export default Home;
