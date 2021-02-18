import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const buttonVariants = {
  visible: {
    x: [0, -20, 0, 20, 0, -20, 0, 20, 0], // keyframes
    scale: [1, 1.1, 0.9, 1], // keyframes
    transition: { delay: 2 },
  },
  hover: {
    scale: 1.1,
    textShadow: '0px 0px 8px #fff',
    boxShadow: '0px 0px 8px #fff',
  },
};

const Home = () => {
  return (
    <motion.div
      className="home container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 1 }}
    >
      <h2>Welcome to Pizza Joint</h2>

      <Link to="/base">
        <motion.button variants={buttonVariants} animate="visible" whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
