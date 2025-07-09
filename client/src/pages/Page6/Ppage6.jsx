import ProductDetails from "../../components/ProductCard/ProductDetails";
import img6 from '../../assets/Phonecharm/cinnamoncharm.jpg'
import '../../components/ProductCard/ProductDetails.css'
import Header from "../../components/Home/Header"
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";



function Ppage6(){
    return(
        <>
        <Header/>
        <Navbar/>
        <ProductDetails className='Product-details' 
        image={img6} name='cinnamon charm' price='220'
        />
        
        <Footer/>

         

      </>
    );
}
export default Ppage6
