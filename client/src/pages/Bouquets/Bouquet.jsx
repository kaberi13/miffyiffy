import { useState } from 'react';
import './Bouquet.css';
import '../../components/Card/Card.css';
import '../../components/Footer/Footer.css';
import '../../components/Home/Header.css';
import Card from '../../components/Card/Card.jsx';
import Header from '../../components/Home/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Navbar from '../../components/Navbar/Navbar.jsx';

import img1 from '../../assets/Bouquets/Sunflower.jpg';
import img2 from '../../assets/Bouquets/PinkandWhiteRose.jpg';
import img3 from '../../assets/Bouquets/RoseBouquet.jpg';
import img4 from '../../assets/Bouquets/DoubleLayeredRose.jpg';
import img5 from '../../assets/Bouquets/tulip.jpg';
import img6 from '../../assets/Bouquets/BlueRose.jpg';
import img7 from '../../assets/Bouquets/mixedbouquet.jpg';
import img8 from '../../assets/Bouquets/RedRose.jpg';

function Bouquet() {
  const [wishlist, setWishlist] = useState([]);

  const handleWishlistToggle = (itemData) => {
    if (itemData.isWishlisted) {
      setWishlist(prev => [...prev, itemData]);
      console.log(`Added ${itemData.tittle} to wishlist`);
    } else {
      setWishlist(prev => prev.filter(item => item.tittle !== itemData.tittle));
      console.log(`Removed ${itemData.tittle} from wishlist`);
    }
  };

  return (
    <>
      <Header />
      <Navbar />
      <h1>Crochet Flower</h1>

      {wishlist.length > 0 && (
        <div className="wishlist-info">
          <p>❤️ {wishlist.length} item{wishlist.length > 1 ? 's' : ''} in your wishlist</p>
        </div>
      )}

      <div className='card-container'>
        <Card
          image={img1}
          tittle="Sunflower"
          price="300"
          onWishlistToggle={handleWishlistToggle}
          link="/categories/bouquet/Sunflower"
        />
        <Card
          image={img2}
          tittle="Pink and White Rose"
          price="350"
          onWishlistToggle={handleWishlistToggle}
          link="/categories/bouquet/PinkWhite"
        />
        <Card
          image={img3}
          tittle="Rose Bouquet"
          price="320"
          onWishlistToggle={handleWishlistToggle}
          link="/categories/bouquet/RoseBouquet"
        />
        <Card
          image={img4}
          tittle="Double Layered Rose"
          price="250"
          onWishlistToggle={handleWishlistToggle}
          link="/categories/bouquet/DoubleLayeredRose"
        />
        <Card
          image={img5}
          tittle="Tulip, Rose"
          price="100"
          onWishlistToggle={handleWishlistToggle}
          link="/categories/bouquet/TulipRose"
        />
        <Card
          image={img6}
          tittle="Blue Rose"
          price="200"
          onWishlistToggle={handleWishlistToggle}
          link="/categories/bouquet/BlueRose"
        />
        <Card
          image={img7}
          tittle="Mixed Bouquet"
          price="300"
          onWishlistToggle={handleWishlistToggle}
          link="/categories/bouquet/MixedBouquet"
        />
        <Card
          image={img8}
          tittle="Red Rose"
          price="150"
          onWishlistToggle={handleWishlistToggle}
          link="/categories/bouquet/RedRose"
        />
      </div>
      <Footer />
    </>
  );
}

export default Bouquet;