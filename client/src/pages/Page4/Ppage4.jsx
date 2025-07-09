import ProductDetails from "../../components/ProductCard/ProductDetails";
import img4 from '../../assets/Phonecharm/kuromi.jpg'
import '../../components/ProductCard/ProductDetails.css'
import Header from "../../components/Home/Header"
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";



function Ppage4(){
    return(
        <>
        <Header/>
        <Navbar/>
        <ProductDetails className='Product-details' 
        image={img4} name='Kuromi' price='220'
        />
        
        <Footer/>

         

      </>
    );
}
export default Ppage4
