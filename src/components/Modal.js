import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modal = {
  hidden: { y: '-100vh', opacity: 0 },
  visible: { y: 60, opacity: 1, transition: { delay: 0.5 } },
};

const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div className="modal" variants={modal}>
            <p>Want more pizza?</p>
            <Link to="/">
              {/* <button onClick={() => setShowModal(false)}>Start Again</button> */}
              <button>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;

// usar setShowModal no evento de click até funciona, porém, se ao invés de clicar o botão, o usuário
// der um navigate back, o modal não vai sumir, pois o evento de click não foi disparado

// a solção é usar a propriedade onExitComplete direto no <AnimatePresence>, passando a function
// setShowModal(false) pra prop
