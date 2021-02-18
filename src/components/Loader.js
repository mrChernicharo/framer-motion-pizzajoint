import React from 'react';
import { motion } from 'framer-motion';

const loaderVariants = {
  animationOne: {
    x: [-40, 40],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: 'easeOut',
      },
    },
  },
  animationTwo: {},
};

const Loader = () => {
  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate="animationOne"
      ></motion.div>
    </>
  );
};

export default Loader;
