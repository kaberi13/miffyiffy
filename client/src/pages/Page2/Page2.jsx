import img2 from '../../assets/Bouquets/PinkandWhiteRose.jpg'
import ProductDetails from '../../components/ProductCard/ProductDetails'
import Header from '../../components/Home/Header'
import Footer from '../../components/Footer/Footer'
import '../../components/ProductCard/ProductDetails.css'
import Navbar from '../../components/Navbar/Navbar'
function Page2(){
    return( 
        <> 
        <Header/>
        <Navbar/>
        <ProductDetails className='Product-details'
        image={img2} name='Pink and White Rose' price='350'/>
        <Footer/>
        </>
    );
}
export default Page2