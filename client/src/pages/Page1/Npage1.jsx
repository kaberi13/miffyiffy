
import ProductDetails from "../../components/ProductCard/ProductDetails";
import img1 from '../../assets/neckchain1.jpg'
import '../../components/ProductCard/ProductDetails.css'
import Header from "../../components/Home/Header"
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";



function Npage1(){
    return(
        <>
        <Header/>
        <Navbar/>
        <ProductDetails className='Product-details' 
        id='heartsandbows-neckchain'
        image={img1} name='HeartsAndBows' price='200'
        />
        
        <Footer/>

      </>
    );
}
export default Npage1;


      