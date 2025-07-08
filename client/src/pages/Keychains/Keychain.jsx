
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
<<<<<<< HEAD
          onWishlistToggle={handleWishlistToggle}
          link="/categories/keychain/Capybara"
=======
          link="/products/Capybara"
>>>>>>> cd6334f1e8ba4a00363350fd6a8cd9d2b6c05226
        />
        <Card
          image={img2}
          tittle="Pompompurin"
<<<<<<< HEAD
          price="220"
          onWishlistToggle={handleWishlistToggle}
          link="/categories/keychain/Pompompurin"
=======
          price="260"
          link="/products/Pompompurin"
>>>>>>> cd6334f1e8ba4a00363350fd6a8cd9d2b6c05226
        />
        <Card
          image={img3}
          tittle="Cat"
<<<<<<< HEAD
          price="220"
          onWishlistToggle={handleWishlistToggle}
          link="/categories/keychain/crochetcat"
=======
          price="320"
          link="/products/CrochetCat"
>>>>>>> cd6334f1e8ba4a00363350fd6a8cd9d2b6c05226
        />
        <Card
          image={img4}
          tittle="Frog"
<<<<<<< HEAD
          price="220"
          onWishlistToggle={handleWishlistToggle}
          link="/categories/keychain/Frog"
=======
          price="250"
          link="/products/Frog"
>>>>>>> cd6334f1e8ba4a00363350fd6a8cd9d2b6c05226
        />
        <Card
          image={img5}
          tittle="Tata"
<<<<<<< HEAD
          price="220"
          onWishlistToggle={handleWishlistToggle}
          link="/categories/keychain/Tata"
=======
          price="250"
          link="/products/Tata"
>>>>>>> cd6334f1e8ba4a00363350fd6a8cd9d2b6c05226
        />
        <Card
          image={img6}
          tittle="Miffy"
<<<<<<< HEAD
          price="220"
          onWishlistToggle={handleWishlistToggle}
          link="/categories/keychain/Miffy"
=======
          price="250"
          link="/products/Miffy"
>>>>>>> cd6334f1e8ba4a00363350fd6a8cd9d2b6c05226
        />
        <Card
          image={img7}
          tittle="Piggy"
<<<<<<< HEAD
          price="220"
          onWishlistToggle={handleWishlistToggle}
          link="/categories/keychain/Piggy"
=======
          price="250"
          link="/products/Piggy"
>>>>>>> cd6334f1e8ba4a00363350fd6a8cd9d2b6c05226
        />
        <Card
          image={img8}
          tittle="Strawberry Piggy"
<<<<<<< HEAD
          price="220"
          onWishlistToggle={handleWishlistToggle}
          link="/categories/keychain/StrawberryPiggy"
=======
          price="250"
          link="/products/StrawberryPiggy"
>>>>>>> cd6334f1e8ba4a00363350fd6a8cd9d2b6c05226
        />
        <Card
          image={img9}
          tittle="Duck"
<<<<<<< HEAD
          price="220"
          onWishlistToggle={handleWishlistToggle}
          link="/categories/keychain/Duck"
=======
          price="250"
          link="/products/Duck"
>>>>>>> cd6334f1e8ba4a00363350fd6a8cd9d2b6c05226
        />
        <Card
          image={img10}
          tittle="Mini Bouquet"
<<<<<<< HEAD
          price="220"
          onWishlistToggle={handleWishlistToggle}
          link="/categories/keychain/MiniBouquet"
=======
          price="250"
          link="/products/MiniBouquet"
>>>>>>> cd6334f1e8ba4a00363350fd6a8cd9d2b6c05226
        />
        <Card
          image={img11}
          tittle="Teddy"
          price="250"
<<<<<<< HEAD
          onWishlistToggle={handleWishlistToggle}
          link="/categories/keychain/Teddy"
=======
          link="products/Teddy"
>>>>>>> cd6334f1e8ba4a00363350fd6a8cd9d2b6c05226
        />
        <Card
          image={img12}
          tittle="Turtle"
          price="250"
<<<<<<< HEAD
          onWishlistToggle={handleWishlistToggle}
          link="/categories/keychain/Turtle"
=======
          link="/products/Turtle"
>>>>>>> cd6334f1e8ba4a00363350fd6a8cd9d2b6c05226
        />
      </div>
      <Footer />
    </>
  );
}

export default Keychain;
