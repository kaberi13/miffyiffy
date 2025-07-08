import ProductDetails from "../../components/ProductCard/Productdetails";
import img1 from '../../assets/Bagcharm/peachcharm.jpg'
import '../../components/ProductCard/ProductDetails.css'
import Header from "../../components/Home/Header"
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useCart } from "../../components/OtherPages/CartContext";



function Bpage1() {

  const { addToCart } = useCart(); // Get addToCart function from context

  // Product data
  const productData = {
    id: 'bagcharm-peach-1', // Unique ID for this product
    title: 'Peach Charm',
    price: 220,
    image: img1,
    category: 'bagcharm',
    description: 'Beautiful peach charm perfect for bags and accessories'
  };

  const handleAddToCart = (product) => {
    addToCart({
      ...product,
      quantity: 1 // Default quantity
    });

    // Optional: Show success message
    alert(`${product.title} added to cart!`);
  };

  return (
    <>
      <Header />
      <Navbar />
      <ProductDetails className='Product-details'
        image={img1} name='Peach Charm' price='220'
        product={productData}
        onAddToCart={handleAddToCart}
      />

      <Footer />



    </>
  );
}
export default Bpage1
