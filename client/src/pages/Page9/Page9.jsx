import img9 from '../../assets/Bouquets/RedRose.jpg'
import ProductDetails from '../../components/ProductCard/ProductDetails'
import Header from '../../components/Home/Header'
import Footer from '../../components/Footer/Footer'
import '../../components/ProductCard/ProductDetails.css'
import Navbar from '../../components/Navbar/Navbar'

function Page9(){
    return( 
        <> 
        <Header/>
        <Navbar/>
        <ProductDetails className='Product-details'
        image={img9} name='Red Rose' price='300'/>
        <Footer/>
        </>
    );
}
export default Page9