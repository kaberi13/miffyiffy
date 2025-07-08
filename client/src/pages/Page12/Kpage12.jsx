import ProductDetails from "../../components/ProductCard/Productdetails";
import img12 from '../../assets/Keychains/Turtle.jpg'
import '../../components/ProductCard/ProductDetails.css'
import Header from "../../components/Home/Header"
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";



function Kpage12(){
    return(
        <>
        <Header/>
        <Navbar/>
        <ProductDetails className='Product-details' 
        image={img12} name='Turtle' price='220'
        />
        
        <Footer/>

         

      </>
    );
}
export default Kpage12
