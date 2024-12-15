import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <h1>About Us</h1>
      <p>Learn more about our project and team.</p>
    </motion.div>
  );
};

export default About;
