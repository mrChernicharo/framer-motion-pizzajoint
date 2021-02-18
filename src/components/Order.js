import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, x: '-100vw' },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 7,
      when: 'beforeChildren',
      staggerChildren: 0.4,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Order = ({ pizza }) => {
  const [showTitle, setShowTItle] = useState(true);

  setTimeout(() => setShowTItle(false), 3000);

  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        {showTitle && (
          <motion.h2 exit={{ y: -400, rotate: 180, transition: { duration: 2 } }}>
            Thank you for your order :)
          </motion.h2>
        )}
      </AnimatePresence>

      <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map(topping => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
