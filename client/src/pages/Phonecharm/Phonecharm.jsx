
import { useState } from 'react';
import './Phonecharm.css';
import '../../components/Card/Card.css';
import '../../components/Footer/Footer.css';
import '../../components/Home/Header.css';
import Header from '../../components/Home/Header';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

import img1 from '../../assets/Phonecharm/bluecinnamonroll.jpg';
import img2 from '../../assets/Phonecharm/greenbutterfly.jpg';
import img3 from '../../assets/Phonecharm/pinkbutterfly.jpg';
import img4 from '../../assets/Phonecharm/kuromi.jpg';
import img5 from '../../assets/Phonecharm/kuromicharm.jpg';
import img6 from '../../assets/Phonecharm/cinnamoncharm.jpg';
import img7 from '../../assets/Phonecharm/pompomcharm.jpg';
import img8 from '../../assets/Phonecharm/hellokittycharm.jpg';

function Phonecharm() {


  return (
    <>
      <Header />
      <Navbar />
      <h1>Phonecharms</h1>



      <div className='card-container'>
        <Card
          image={img1}
          tittle="Macaron Cinnamonroll"
          price="220"
          link="/categories/phonecharm/bluecinnamonroll"
        />
<<<<<<< HEAD
        <Card 
          image={img2} 
          tittle="Green Butterfly" 
          price="220" 
          onWishlistToggle={handleWishlistToggle}
          link="/categories/phonecharm/GreenButterfly"
        />
        <Card 
          image={img3} 
          tittle="Pink Butterfly" 
          price="220" 
          onWishlistToggle={handleWishlistToggle}
          link="/categories/phonecharm/PinkButterfly"
        />
        <Card 
          image={img4} 
          tittle="Kuromi" 
          price="220" 
          onWishlistToggle={handleWishlistToggle}
          link="/categories/phonecharm/Kuromi"
=======
        <Card
          image={img2}
          tittle="Green Butterfly"
          price="260"
          link="/categories/phonecharm/greenbutterfly"
        />
        <Card
          image={img3}
          tittle="Pink Butterfly"
          price="320"
          link="/categories/phonecharm/pinkbutterfly"
        />
        <Card
          image={img4}
          tittle="Kuromi"
          price="250"
          link="/categories/phonecharm/kuromi"
        />

        <Card
          image={img5}
          tittle="Kuromi Charm"
          price="250"
          link="/categories/phonecharm/kuromicharm"
        />

        <Card
          image={img6}
          tittle="Cinnamon charm"
          price="250"
          link="/categories/phonecharm/cinnamoncharm"
        />

        <Card
          image={img7}
          tittle="Pompom charm"
          price="250"
          link="/categories/phonecharm/pompomcharm"
        />

        <Card
          image={img4}
          tittle="Hellokitty "
          price="250"
          link="/categories/phonecharm/hellokittycharm"
>>>>>>> cd6334f1e8ba4a00363350fd6a8cd9d2b6c05226
        />
      </div>

      <Footer />
    </>
  );
}

export default Phonecharm;
