
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
  const [wishlist, setWishlist] = useState([]);

  const handleWishlistToggle = (itemData) => {
    if (itemData.isWishlisted) {
      setWishlist((prev) => [...prev, itemData]);
      console.log(`Added ${itemData.tittle} to wishlist`);
    } else {
      setWishlist((prev) => prev.filter((item) => item.tittle !== itemData.tittle));
      console.log(`Removed ${itemData.tittle} from wishlist`);
    }
  };

  return (
    <>
      <Header />
      <Navbar />
      <h1>Neckchains</h1>

      {wishlist.length > 0 && (
        <div className="wishlist-info">
          <p>❤️ {wishlist.length} item{wishlist.length > 1 ? 's' : ''} in your wishlist</p>
        </div>
      )}

      <div className="card-container">
        <Card
          image={img1}
          tittle="Hearts & Bows"
          price="200"
          onWishlistToggle={handleWishlistToggle}
          link="/categories/neckchain/HeartsAndBows"
        />
        <Card
          image={img2}
          tittle="Cherry Bow"
          price="200"
          onWishlistToggle={handleWishlistToggle}
          link="/categories/neckchain/CherryBow"
        />
      </div>

      <Footer />
    </>
  );
}

export default Neckchain;
