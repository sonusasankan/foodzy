import React from 'react';
import {AnimatePresence, motion} from 'framer-motion';

import styles from './style.module.scss';

export const Toast = ({cart, onClick}) => {
  return (
    <AnimatePresence>
      {cart && (
        <motion.div
          className={`${styles.toast} d-flex ai-center jc-space-between`}
          animate={{y: -90}}
          transition={{duration: 0.4, ease: 'easeIn'}}
          exit={{y: 0}}
        >
          <div className="cart-item-price">
            <p className="title-sm fw-700 text-white">
              <span>{cart.total}</span> item |<span> {cart.price}</span>
            </p>
          </div>
          <button onClick={onClick} className="btn btn--link text-white">Order Now</button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
