import React from 'react';
import { motion } from 'framer-motion';

const svgVariants = {
  hidden: { rotate: -180, y: -30 },
  visible: { rotate: 0, y: 0, transition: { duration: 1 } },
};

const pathVariants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: { opacity: 1, pathLength: 1, transition: { duration: 2, ease: 'easeInOut' } },
};

const Header = () => {
  return (
    <header>
      <div className="logo">
        <motion.svg
          className="pizza-svg"
          variants={svgVariants}
          drag
          dragConstraints={{ top: 0, right: 0, bottom: 50, left: 0 }}
          dragElastic={0.2}
          initial="hidden"
          animate="visible"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <motion.path
            variants={pathVariants}
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <motion.path
            variants={pathVariants}
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </motion.svg>
      </div>
      <motion.div
        className="title"
        initial={{ y: -200 }}
        animate={{ y: -10 }}
        transition={{ type: 'spring', delay: 0.4, stiffness: 80 }} // types: "tween", "inertia", "keyframes", "just", "spring" (default)
      >
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  );
};

export default Header;

// no need to add neither 'initial' nor 'animate' props to child elements remember?
// these child guys just inherit the animation execution from their parents

// just add drag and make the element draggable. RIDICULOUSLY EASY!
// dragConstraints={{ top: 0, right: 0, bottom: 50, left: 0 }} <- limita área onde se pode arrastar o elemento
// dragElastic={0.2} lower numbers to make it harder to drag the element around
