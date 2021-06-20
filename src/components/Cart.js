import React, { useState } from 'react';
import {AnimatePresence, motion, useAnimation} from 'framer-motion';
import { useHistory } from 'react-router-dom';

import styles from '../utilities/style.module.scss';

import behrouz from '../assets/behrouz-cart.svg';
import swipe from '../assets/icons/swipe.svg';
import tick from '../assets/icons/tick.svg';


export const Cart = () => {

  const history = useHistory();
  const controls = useAnimation()
  
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const handleSwipe = (info) => {
    if(info.point.x > 200){
        controls.start({
            x: 260,
            transition: { duration: 0.5 },
          })
        
    }  
  }

  const handleStop = () => {
    controls.start({
        transition: { duration: 0.3 },
        opacity: 0
      })
    setIsOrderPlaced(true)
  }

  return (
    <AnimatePresence>
      <motion.div
        className={`${styles.cart}`}
        animate={{y: -260}}
        transition={{duration: 0.4, ease: 'easeIn'}}
        exit={{y: 0}}
        >
        <div className={`${styles.app_cart_restaurant_logo} d-flex ai-center jc-center`}>
            {isOrderPlaced ? <img src={tick} alt="" />  : <img src={behrouz} alt="" />}
        </div>
        <div className={`${styles.app_cart_details}`}>
          {!isOrderPlaced ? <h2 className="title mb-2">Behrouz Biryani</h2>: null}
          {!isOrderPlaced ? <p className={`${styles.app_cart_acc} title-sm fw-400`}>Acc No: 12345678</p>: null}
          <span className={`${styles.app_cart_total} my-4`}>₹ 440</span>
          {isOrderPlaced ? <h2 className="title mb-2">Behrouz Biryani</h2>: null}
          {isOrderPlaced ? <p className={`${styles.app_cart_acc} title-sm fw-400`}>Transaction ID: 037374621513274</p>: null}
        </div>
        <div className={`${styles.app_cart}`}>
          <button onClick={ isOrderPlaced ? () => history.push('/') : null}className="btn btn--swipe d-flex ai-center jc-center">
              <motion.div className={styles.btn_swipe}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={
                        (event, info) => handleSwipe(info)
                    }
                    animate={controls}
                    onAnimationComplete={handleStop}
               >
                  <img src={swipe} alt="" />
                </motion.div>
              {isOrderPlaced ? <span>Go to home</span> : <span>Swipe to Pay</span>}
            </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
