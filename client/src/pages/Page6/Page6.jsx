import img6 from '../../assets/Bouquets/BlueRose.jpg'
import ProductDetails from '../../components/ProductCard/ProductDetails'
import Header from '../../components/Home/Header'
import Footer from '../../components/Footer/Footer'
import '../../components/ProductCard/ProductDetails.css'
import Navbar from '../../components/Navbar/Navbar'

function Page6(){
    return( 
        <> 
        <Header/>
        <Navbar/>
        <ProductDetails className='Product-details'
        image={img6} name='Blue Rose' price='200'/>
        <Footer/>
        </>
    );
}
export default Page6