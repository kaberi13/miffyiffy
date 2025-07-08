<<<<<<< HEAD

import ProductDetails from "../../components/ProductCard/Productdetails";
import img10 from '../../assets/Keychains/Teddy.jpg'
=======
import ProductDetails from "../../components/ProductCard/Productdetails";
import img11 from '../../assets/Keychains/Teddy.jpg'
>>>>>>> cd6334f1e8ba4a00363350fd6a8cd9d2b6c05226
import '../../components/ProductCard/ProductDetails.css'
import Header from "../../components/Home/Header"
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";



function Kpage11(){
    return(
        <>
        <Header/>
        <Navbar/>
        <ProductDetails className='Product-details' 
<<<<<<< HEAD
        image={img10} name='Mini Teddy' price='250'
=======
        image={img11} name='Teddy' price='220'
>>>>>>> cd6334f1e8ba4a00363350fd6a8cd9d2b6c05226
        />
        
        <Footer/>

         

      </>
    );
}
export default Kpage11
