import ProductDetails from "../../components/ProductCard/Productdetails";
import img1 from '../../assets/Bouquets/Sunflower.jpg'
import '../../components/ProductCard/ProductDetails.css'
import Header from "../../components/Home/Header"
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";



function Page1(){
    return(
        <>
        <Header/>
        <Navbar/>
        <ProductDetails className='Product-details' 
        image={img1} name='Sunflower' price='300'
        />
        
        <Footer/>

         

      </>
    );
}
export default Page1
