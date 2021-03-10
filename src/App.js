import React from 'react';
import './App.css';
import Header from '../src/components/HeaderComponents/Header.js';
import Main from '../src/components/MainComponents/Main.js';
import Footer from '../src/components/FooterComponents/Footer.js';

export default function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
