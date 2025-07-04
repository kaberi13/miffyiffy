import img5 from '../../assets/Bouquets/tulip.jpg'
import ProductDetails from '../../components/ProductCard/Productdetails'
import Header from '../../components/Home/Header'
import Footer from '../../components/Footer/Footer'
import '../../components/ProductCard/ProductDetails.css'
import Navbar from '../../components/Navbar/Navbar'

function Page5(){
    return( 
        <> 
        <Header/>
        <Navbar/>
        <ProductDetails className='Product-details'
        image={img5} name='Double Rose' price='300'/>
        <Footer/>
        </>
    );
}
export default Page5