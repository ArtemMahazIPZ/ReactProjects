import React from "react";
import { motion } from "framer-motion";
import "./styles.css";

const animations = {
    rotateFade: { initial: { opacity: 0, rotate: 90 }, animate: { opacity: 1, rotate: 0 }, exit: { opacity: 0, rotate: -90 } },
    flip: { initial: { rotateY: 90, opacity: 0 }, animate: { rotateY: 0, opacity: 1 }, exit: { rotateY: -90, opacity: 0 } },
    spring: { initial: { scale: 0.5, opacity: 0 }, animate: { scale: 1, opacity: 1 }, exit: { scale: 0.5, opacity: 0 }, transition: { type: "spring", stiffness: 100 } }
};

const AnimatedPage = ({ children, animationType }) => (
    <motion.div
        className="motion-wrapper"
        {...animations[animationType]}
        transition={{ duration: 0.5 }}
    >
        {children}
    </motion.div>
);

export default AnimatedPage;
