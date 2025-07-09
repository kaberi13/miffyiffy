import ProductDetails from "../../components/ProductCard/ProductDetails";
import img8 from '../../assets/Phonecharm/hellokittycharm.jpg'
import '../../components/ProductCard/ProductDetails.css'
import Header from "../../components/Home/Header"
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";



function Ppage8(){
    return(
        <>
        <Header/>
        <Navbar/>
        <ProductDetails className='Product-details' 
        image={img8} name='Hello kitty' price='220'
        />
        
        <Footer/>

         

      </>
    );
}
export default Ppage8
