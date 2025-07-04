
import ProductDetails from "../../components/ProductCard/Productdetails";
import img2 from '../../assets/bracelet2.jpg'
import '../../components/ProductCard/ProductDetails.css'
import Header from "../../components/Home/Header"
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";



function Brpage2(){
    return(
        <>
        <Header/>
        <Navbar/>
        <ProductDetails className='Product-details' 
        image={img2} name='blue bracelet' price='220'
        />
        
        <Footer/>

         

      </>
    );
}
export default Brpage2
