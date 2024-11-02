import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const AnimatedPage = ({ children }) => {
    const location = useLocation();

    const animations = {
        initial: { opacity: 0, x: location.pathname === '/' ? 0 : 100, scale: 0.8, rotate: 0 },
        animate: { opacity: 1, x: 0, scale: 1, rotate: 360 },
        exit: { opacity: 0, x: location.pathname === '/' ? 0 : -100, scale: 0.8, rotate: -360 }
    };

    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={animations}
            transition={{ duration: 0.8 }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedPage;
