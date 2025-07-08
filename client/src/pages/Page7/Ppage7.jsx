import ProductDetails from "../../components/ProductCard/Productdetails";
import img7 from '../../assets/Phonecharm/pompomcharm.jpg'
import '../../components/ProductCard/ProductDetails.css'
import Header from "../../components/Home/Header"
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";



function Ppage7(){
    return(
        <>
        <Header/>
        <Navbar/>
        <ProductDetails className='Product-details' 
        image={img7} name='Pompom charm' price='220'
        />
        
        <Footer/>

         

      </>
    );
}
export default Ppage7
