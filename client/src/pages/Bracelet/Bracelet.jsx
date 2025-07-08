
import { useState } from 'react';
import './Bracelet.css';
import '../../components/Card/Card.css';
import '../../components/Footer/Footer.css';
import '../../components/Home/Header.css';

import Header from '../../components/Home/Header';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

import img1 from '../../assets/bracelet1.jpg';
import img2 from '../../assets/bracelet2.jpg';

function Bracelet() {
  return (
    <>
      <Header />
      <Navbar />
      <h1>Bracelet</h1>



      <div className="card-container">
        <Card
          image={img1}
          tittle="Star bracelet"
<<<<<<< HEAD
          price="200"
          onWishlistToggle={handleWishlistToggle}
=======
          price="220"
>>>>>>> cd6334f1e8ba4a00363350fd6a8cd9d2b6c05226
          link="/categories/bracelet/StarBracelet" // ✅ Link to detail page
        />
        <Card
          image={img2}
          tittle="Blue bracelet"
<<<<<<< HEAD
          price="200"
          onWishlistToggle={handleWishlistToggle}
=======
          price="260"
>>>>>>> cd6334f1e8ba4a00363350fd6a8cd9d2b6c05226
          link="/categories/bracelet/BlueBracelet" // ✅ Link to detail page
        />
      </div>

      <Footer />
    </>
  );
}

export default Bracelet;
