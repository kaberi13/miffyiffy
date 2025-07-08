import ProductDetails from "../../components/ProductCard/Productdetails";
import img5 from '../../assets/Phonecharm/kuromicharm.jpg'
import '../../components/ProductCard/ProductDetails.css'
import Header from "../../components/Home/Header"
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";



function Ppage5(){
    return(
        <>
        <Header/>
        <Navbar/>
        <ProductDetails className='Product-details' 
        image={img5} name='Kuromi charm' price='220'
        />
        
        <Footer/>

         

      </>
    );
}
export default Ppage5
