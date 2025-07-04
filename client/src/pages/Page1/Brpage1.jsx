
import ProductDetails from "../../components/ProductCard/Productdetails";
import img1 from '../../assets/bracelet1.jpg'
import '../../components/ProductCard/ProductDetails.css'
import Header from "../../components/Home/Header"
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";



function Brpage1(){
    return(
        <>
        <Header/>
        <Navbar/>
        <ProductDetails className='Product-details' 
        image={img1} name='star bracelet' price='220'
        />
        
        <Footer/>

         

      </>
    );
}
export default Brpage1
