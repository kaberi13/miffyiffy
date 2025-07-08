
import { useState } from 'react';
import './Keychain.css';
import '../../components/Card/Card.css';
import '../../components/Footer/Footer.css';
import '../../components/Home/Header.css';
import Header from '../../components/Home/Header';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

import img1 from '../../assets/Keychains/Capybara.jpg';
import img2 from '../../assets/Keychains/Pompompurin.jpg';
import img3 from '../../assets/Keychains/CrochetCat.jpg';
import img4 from '../../assets/Keychains/Frog.jpg';
import img5 from '../../assets/Keychains/Tata.jpg';
import img6 from '../../assets/Keychains/Miffy.jpg';
import img7 from '../../assets/Keychains/Piggy.jpg';
import img8 from '../../assets/Keychains/StrawberryPiggy.jpg';
import img9 from '../../assets/Keychains/Duck.jpg';
import img10 from '../../assets/Keychains/MiniBouquet.jpg';
import img11 from '../../assets/Keychains/Teddy.jpg';
import img12 from '../../assets/Keychains/Turtle.jpg';

function Keychain() {
  return (
    <>
      <Header />
      <Navbar />
      <h1>Keychain</h1>


      <div className='card-container'>
        <Card
          image={img1}
          tittle="Capybara"
          price="220"
          link="/products/Capybara"
        />
        <Card
          image={img2}
          tittle="Pompompurin"
          price="260"
          link="/products/Pompompurin"
        />
        <Card
          image={img3}
          tittle="Cat"
          price="320"
          link="/products/CrochetCat"
        />
        <Card
          image={img4}
          tittle="Frog"
          price="250"
          link="/products/Frog"
        />
        <Card
          image={img5}
          tittle="Tata"
          price="250"
          link="/products/Tata"
        />
        <Card
          image={img6}
          tittle="Miffy"
          price="250"
          link="/products/Miffy"
        />
        <Card
          image={img7}
          tittle="Piggy"
          price="250"
          link="/products/Piggy"
        />
        <Card
          image={img8}
          tittle="Strawberry Piggy"
          price="250"
          link="/products/StrawberryPiggy"
        />
        <Card
          image={img9}
          tittle="Duck"
          price="250"
          link="/products/Duck"
        />
        <Card
          image={img10}
          tittle="Mini Bouquet"
          price="250"
          link="/products/MiniBouquet"
        />
        <Card
          image={img11}
          tittle="Teddy"
          price="250"
          link="products/Teddy"
        />
        <Card
          image={img12}
          tittle="Turtle"
          price="250"
          link="/products/Turtle"
        />
      </div>
      <Footer />
    </>
  );
}

export default Keychain;
