import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="home container"
      animate={{ rotateZ: [30, -30, 0], opacity: 0.4 }}
    >
      <motion.h2 animate={{ fontSize: 50, color: "#ff2994", y: [50, -50, 0] }}>
        Welcome to Pizza Joint
      </motion.h2>

      <Link to="/base">
        <motion.button animate={{ scale: 1.3 }}>
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
