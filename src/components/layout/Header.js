import React from 'react';
import { Link } from 'react-router-dom';

import notificationIcon from '../../assets/icons/bell.svg';
import userImg from '../../assets/user-img.svg';
import bannerImg from '../../assets/icons/meals.svg';

import styles from '../../scss/modules/Header.module.scss';

export default function Header() {
  return (
    <div className={`${styles.header_styles} app-header`}>
      <header
        className={`${styles.header_border} d-flex ai-center jc-space-between`}
      >
        <div className="app-logo">
          <h3 className="text-white italic font-exo">Foodzy</h3>
        </div>
        <div className="app-user">
          <ul className="app-header-details d-flex">
            <li className="app-notification d-flex ai-center jc-center">
              <img src={notificationIcon} alt="bell icon" />
              <span className="notification-color"></span>
            </li>
            <li className="app-user-img">
              <img src={userImg} alt="user" />
            </li>
          </ul>
        </div>
      </header>
      <div className="app-banner d-flex ai-center">
          <div className="app-banner-content">
              <h5 className="banner-title-small text-white italic">Upto</h5>
              <h1 className="banner-title-main font-exo text-white italic">60% OFF</h1>
              <p className="banner-title-extra-small text-white mb-4">on your first order</p>
              <Link to="/restaurant"><button className="btn btn--primary">Order Now</button></Link>
              <img className="app-banner-img" src={bannerImg} alt="Burger" />
          </div>
      </div>
    </div>
  );
}
