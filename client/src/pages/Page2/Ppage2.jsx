import ProductDetails from "../../components/ProductCard/ProductDetails";
import img2 from '../../assets/Phonecharm/greenbutterfly.jpg'
import '../../components/ProductCard/ProductDetails.css'
import Header from "../../components/Home/Header"
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";



function Ppage2(){
    return(
        <>
        <Header/>
        <Navbar/>
        <ProductDetails className='Product-details' 
        image={img2} name='Green Butterfly' price='220'
        />
        
        <Footer/>

         

      </>
    );
}
export default Ppage2
