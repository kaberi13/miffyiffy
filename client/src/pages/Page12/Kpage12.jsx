<<<<<<< HEAD

import ProductDetails from "../../components/ProductCard/Productdetails";
import img10 from '../../assets/Keychains/Turtle.jpg'
=======
import ProductDetails from "../../components/ProductCard/Productdetails";
import img12 from '../../assets/Keychains/Turtle.jpg'
>>>>>>> cd6334f1e8ba4a00363350fd6a8cd9d2b6c05226
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
<<<<<<< HEAD
        image={img10} name='Turtle' price='250'
=======
        image={img12} name='Turtle' price='220'
>>>>>>> cd6334f1e8ba4a00363350fd6a8cd9d2b6c05226
        />
        
        <Footer/>

         

      </>
    );
}
export default Kpage12
