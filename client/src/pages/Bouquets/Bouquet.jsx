
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
  return (
    <>
      <Header />
      <Navbar />
      <h1>Crochet Flower</h1>

      <div className='card-container'>
        <Card image={img1} title="Sunflower" price="300" link="/categories/bouquet/Sunflower" />
        <Card image={img2} title="Pink and White Rose" price="350" link="/categories/bouquet/PinkWhite" />
        <Card image={img3} title="Rose Bouquet" price="320" link="/categories/bouquet/RoseBouquet" />
        <Card image={img4} title="Double Layered Rose" price="250" link="/categories/bouquet/DoubleLayeredRose" />
        <Card image={img5} title="Tulip, Rose" price="100" link="/categories/bouquet/TulipRose" />
        <Card image={img6} title="Blue Rose" price="200" link="/categories/bouquet/BlueRose" />
        <Card image={img7} title="Mixed Bouquet" price="300" link="/categories/bouquet/MixedBouquet" />
        <Card image={img8} title="Red Rose" price="150" link="/categories/bouquet/RedRose" />
      </div>

      <Footer />
    </>
  );
}

export default Bouquet;
