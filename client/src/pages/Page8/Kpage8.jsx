import ProductDetails from "../../components/ProductCard/ProductDetails";
import img8 from '../../assets/Keychains/StrawberryPiggy.jpg'
import '../../components/ProductCard/ProductDetails.css'
import Header from "../../components/Home/Header"
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";



function Kpage8(){
    return(
        <>
        <Header/>
        <Navbar/>
        <ProductDetails className='Product-details' 
        image={img8} name=' Strawberry Piggy' price='220'
        />
        
        <Footer/>

         

      </>
    );
}
export default Kpage8
