import React from 'react';

import {Frame, Page} from 'framer';

import mcDonalds from '../assets/mcdonalds.svg';
import subway from '../assets/subway.svg';
import faasos from '../assets/faasos.svg';

export default function Favourites() {
  return (
    <section className="app-section mb-5">
      <h4 className="section-title">Your favourites</h4>
      <div className="app-favourites">
        <Page defaultEffect={'wheel'} direction="horizontal" width={320} height={150} >
          <Frame background="white">
            <img className="mr-4" src={mcDonalds} alt="Mc donalds" />
            <img className="mr-4" src={subway} alt="subway" />
            <img src={faasos} alt="faasos" />
          </Frame>
          <Frame background="white">
            <img className="mr-4" src={mcDonalds} alt="Mc donalds" />
            <img className="mr-4" src={faasos} alt="faasos" />
            <img src={subway} alt="subway" />
          </Frame>
        </Page>
      </div>
    </section>
  );
}
