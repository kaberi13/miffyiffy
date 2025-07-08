
import { useState } from 'react';
import './Neckchain.css';
import '../../components/Card/Card.css';
import '../../components/Footer/Footer.css';
import '../../components/Home/Header.css';

import Header from '../../components/Home/Header';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

import img1 from '../../assets/neckchain1.jpg';
import img2 from '../../assets/neckchain2.jpg';

function Neckchain() {
  

  return (
    <>
      <Header />
      <Navbar />
      <h1>Neckchains</h1>

      

      <div className="card-container">
        <Card
          image={img1}
          tittle="Hearts & Bows"
          price="200"
          link="/categories/neckchain/HeartsAndBows"
        />
        <Card
          image={img2}
          tittle="Cherry Bow"
          price="200"
          link="/categories/neckchain/CherryBow"
        />
      </div>

      <Footer />
    </>
  );
}

export default Neckchain;
