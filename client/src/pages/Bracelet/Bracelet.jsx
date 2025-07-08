
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
      <h1>Bracelet</h1>

      {wishlist.length > 0 && (
        <div className="wishlist-info">
          <p>❤️ {wishlist.length} item{wishlist.length > 1 ? 's' : ''} in your wishlist</p>
        </div>
      )}

      <div className="card-container">
        <Card
          image={img1}
          tittle="Star bracelet"
          price="200"
          onWishlistToggle={handleWishlistToggle}
          link="/categories/bracelet/StarBracelet" // ✅ Link to detail page
        />
        <Card
          image={img2}
          tittle="Blue bracelet"
          price="200"
          onWishlistToggle={handleWishlistToggle}
          link="/categories/bracelet/BlueBracelet" // ✅ Link to detail page
        />
      </div>

      <Footer />
    </>
  );
}

export default Bracelet;
