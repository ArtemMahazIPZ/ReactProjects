import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  return (
    <motion.div
      initial={{ y: '100vh' }}
      animate={{ y: 0 }}
      exit={{ y: '-100vh' }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <h1>Our Blog</h1>
      <p>Read our latest articles and news.</p>
    </motion.div>
  );
};

export default Blog;
