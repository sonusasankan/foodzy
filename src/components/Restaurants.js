import React, { useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom';

import behrouz from '../assets/behrouz.svg';
import burgerKing from '../assets/burger-king.svg';
import oyeKiddan from '../assets/oye-kiddan.svg';

import offer from '../assets/icons/offer.svg';

export const Restaurants = () => {
  const history = useHistory();

  return (
    <section className="app-section app-popular-restaurants mb-5">
      <h4 className="section-title">Popular Restaurants</h4>
      <div className="card-wrapper">
        <div onClick={() => history.push('/restaurant')} className="card d-flex mb-5">
          <div className="card-img mr-4">
            <img src={behrouz} alt="" />
          </div>
          <div
            className="card-content"
          >
            <h5 className="card-title">Behrouz Biryani</h5>
            <h6 className="card-desc">Biryani Kebab, Mughlai</h6>
            <div className="rating d-flex ai-center jc-center my-2">4.2 ★</div>
            <p className="card-desc d-flex ai-center mb-1">
              <img className="mr-1" src={offer} />
              <span>
                {' '}
                30% off with <b>FOODZY30</b>
              </span>
            </p>
            <p className="card-desc">₹600 for two </p>
          </div>
        </div>

        <div
          onClick={() => history.push('/restaurant')}
          className="card d-flex mb-5"
        >
          <div className="card-img mr-4">
            <img src={burgerKing} alt="" />
          </div>
          <div className="card-content">
            <h5 className="card-title">Burger King</h5>
            <h6 className="card-desc">Burgers, Fries & Beverages</h6>
            <div className="rating d-flex ai-center jc-center my-2">3.5 ★</div>
            <p className="card-desc d-flex ai-center mb-1">
              <img className="mr-1" src={offer} />
              <span>
                {' '}
                50% off with <b>FREE50</b>
              </span>
            </p>
            <p className="card-desc">₹400 for two </p>
          </div>
        </div>

        <div
          onClick={() => history.push('/restaurant')}
          className="card d-flex"
        >
          <div className="card-img mr-4">
            <img src={oyeKiddan} alt="" />
          </div>
          <div className="card-content">
            <h5 className="card-title">Oye Kiddan!!</h5>
            <h6 className="card-desc">Paranthas</h6>
            <div className="rating d-flex ai-center jc-center my-2">4.2 ★</div>
            <p className="card-desc d-flex ai-center mb-1">
              <img className="mr-1" src={offer} />
              <span>
                {' '}
                30% off with <b>FOODZY30</b>
              </span>
            </p>
            <p className="card-desc">₹600 for two </p>
          </div>
        </div>
      </div>
    </section>
  );
};
