import React from 'react';

import Header from './Header';
import { Footer } from './Footer';



export default function Layout(props) {
  return (
    <main className="app d-flex jc-center ai-center">
      <div className="container">
        <Header />
        <div className="app-content">
          {props.children}
        </div>
        <Footer/>
      </div>
    </main>
  );
}
