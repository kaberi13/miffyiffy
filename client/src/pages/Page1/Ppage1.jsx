import ProductDetails from "../../components/ProductCard/ProductDetails";
import img1 from '../../assets/Phonecharm/bluecinnamonroll.jpg'
import '../../components/ProductCard/ProductDetails.css'
import Header from "../../components/Home/Header"
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";



function Ppage1(){
    return(
        <>
        <Header/>
        <Navbar/>
        <ProductDetails className='Product-details' 
        id='bluecinnamonroll-phonecharm'
        image={img1} name='Macaron Cinnamonroll' price='220'
        />
        
        <Footer/>

         

      </>
    );
}
export default Ppage1
