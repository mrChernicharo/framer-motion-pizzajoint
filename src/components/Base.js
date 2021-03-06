import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, x: '100vw' },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', delay: 0.5 } },
  exit: { x: '-100vw', transition: { ease: 'easeInOut' } },
};

const nextVariants = {
  startState: { x: '-100vw' },
  endState: { x: 0, transition: { type: 'spring', stiffness: 300 } },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: '0px 0px 8px #fff',
    boxShadow: '0px 0px 8px #fff',
    transition: { yoyo: Infinity, duration: 0.3 },
  },
};

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div
      className="base container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
          className="next"
          variants={nextVariants}
          // initial="startState" -> child inherits animation execution from parent, so no need to declare initial / animate
          // animate="endState"
        >
          <Link to="/toppings">
            <motion.button variants={buttonVariants} whileHover="hover">
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
