import ProductDetails from "../../components/ProductCard/Productdetails";
import img11 from '../../assets/Keychains/Teddy.jpg'
import '../../components/ProductCard/ProductDetails.css'
import Header from "../../components/Home/Header"
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";



function Kpage11(){
    return(
        <>
        <Header/>
        <Navbar/>
        <ProductDetails className='Product-details' 
        image={img11} name='Teddy' price='220'
        />
        
        <Footer/>

         

      </>
    );
}
export default Kpage11
