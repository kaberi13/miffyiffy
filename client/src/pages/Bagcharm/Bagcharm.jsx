
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
  const [wishlist, setWishlist] = useState([]);

  const handleWishlistToggle = (itemData) => {
    if (itemData.isWishlisted) {
      setWishlist(prev => [...prev, itemData]);
    } else {
      setWishlist(prev => prev.filter(item => item.title !== itemData.title));
    }
  };

  return (
    <>
      <Header />
      <Navbar />
      <h1>Bagcharm</h1>

      {wishlist.length > 0 && (
        <div className="wishlist-info">
          <p>❤️ {wishlist.length} item{wishlist.length > 1 ? 's' : ''} in your wishlist</p>
        </div>
      )}

      <div className='card-container'>
        <Card
          image={img1}
          tittle="Peach Charm"
          price="220"
          link="/categories/bagcharm/PeachCharm"
          onWishlistToggle={handleWishlistToggle}
        />

        <Card
          image={img2}
          tittle="Star Charm"
          price="260"
          link="/categories/bagcharm/StarCharm"
          onWishlistToggle={handleWishlistToggle}
        />

        <Card
          image={img3}
          tittle="Bow Butterfly"
          price="320"
          link="/categories/bagcharm/BowButterfly"
          onWishlistToggle={handleWishlistToggle}
        />
      </div>

      <Footer />
    </>
  );
}

export default Bagcharm;
