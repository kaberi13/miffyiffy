
import ProductDetails from "../../components/ProductCard/Productdetails";
import img1 from '../../assets/neckchain2.jpg'
import '../../components/ProductCard/ProductDetails.css'
import Header from "../../components/Home/Header"
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";



function Npage2(){
    return(
        <>
        <Header/>
        <Navbar/>
        <ProductDetails className='Product-details' 
        image={img1} name='Cherry Bow' price='200'
        />
        
        <Footer/>

         

      </>
    );
}
export default Npage2;
