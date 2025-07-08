import { useState } from 'react';
import './Bagcharm.css';
import '../../components/Card/Card.css';
import '../../components/Footer/Footer.css';
import '../../components/Home/Header.css';
import Header from '../../components/Home/Header';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

import img1 from '../../assets/Bagcharm/peachcharm.jpg';
import img2 from '../../assets/Bagcharm/starcharm.jpg';
import img3 from '../../assets/Bagcharm/Bowbutterfly.jpg';

function Bagcharm() {
  return (
    <>
      <Header />
      <Navbar />
      <h1>Bagcharm</h1>

      <div className='card-container'>
        <Card
          image={img1}
          tittle="Peach Charm"
          price="220"
          link="/categories/bagcharm/PeachCharm"
        />

        <Card
          image={img2}
          tittle="Star Charm"
          price="260"
          link="/categories/bagcharm/StarCharm"
        />

        <Card
          image={img3}
          tittle="Bow Butterfly"
          price="320"
          link="/categories/bagcharm/BowButterfly"
        />
      </div>

      <Footer />
    </>
  );
}

export default Bagcharm;