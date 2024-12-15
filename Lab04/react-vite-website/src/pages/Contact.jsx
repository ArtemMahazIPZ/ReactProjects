import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h1>Contact Us</h1>
      <p>Get in touch with us for more information.</p>
    </motion.div>
  );
};

export default Contact;
