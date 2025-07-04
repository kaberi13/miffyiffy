import img7 from '../../assets/Bouquets/mixedbouquet.jpg'
import ProductDetails from '../../components/ProductCard/Productdetails'
import Header from '../../components/Home/Header'
import Footer from '../../components/Footer/Footer'
import '../../components/ProductCard/ProductDetails.css'
import Navbar from '../../components/Navbar/Navbar'
function Page7(){
    return( 
        <> 
        <Header/>
        <Navbar/>
        <ProductDetails className='Product-details'
        image={img7} name='Mixed flowers' price='300'/>
        <Footer/>
        </>
    );
}
export default Page7