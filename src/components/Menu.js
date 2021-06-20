import React from 'react';

import southIndian from '../assets/south-indian.svg';
import beverages from '../assets/beverages.svg';
import sandwich from '../assets/sandwich.svg';
import sweets from '../assets/sweets.svg';
import northIndian from '../assets/north-indian.svg';
import continental from '../assets/continental.svg';
import dessert from '../assets/dessert.svg';
import iceCream from '../assets/ice-cream.svg';

export const Menu = () => {
  return (
    <section className="app-section app-menu mb-5">
      <h4 className="section-title">Choose from the best</h4>
      <ul className="list d-flex fw-wrap jc-space-between">
        <li className="list-item d-flex fd-column mb-5">
          <div className="img">
            <img src={southIndian} alt="" />
          </div>
          <span>South Indian</span>
        </li>
        <li className="list-item d-flex fd-column mb-5">
          <div className="img">
            <img src={beverages} alt="" />
          </div>
          <span>Beverages</span>
        </li>
        <li className="list-item d-flex fd-column mb-5">
          <div className="img">
            <img src={sandwich} alt="" />
          </div>
          <span>Sandwiches</span>
        </li>
        <li className="list-item d-flex fd-column mb-5">
          <div className="img">
            <img src={sweets} alt="" />
          </div>
          <span>Sweets</span>
        </li>
        <li className="list-item d-flex fd-column">
          <div className="img">
            <img src={northIndian} alt="" />
          </div>
          <span>North Indian</span>
        </li>
        <li className="list-item d-flex fd-column">
          <div className="img">
            <img src={continental} alt="" />
          </div>
          <span>Continental</span>
        </li>
        <li className="list-item d-flex fd-column">
          <div className="img">
            <img src={dessert} alt="" />
          </div>
          <span>Desserts</span>
        </li>
        <li className="list-item d-flex fd-column">
          <div className="img">
            <img src={iceCream} alt="" />
          </div>
          <span>Ice Cream</span>
        </li>
      </ul>
    </section>
  );
};
