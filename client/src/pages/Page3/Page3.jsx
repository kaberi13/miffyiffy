import img3 from '../../assets/Bouquets/RoseBouquet.jpg'
import ProductDetails from '../../components/ProductCard/Productdetails'
import Header from '../../components/Home/Header'
import Footer from '../../components/Footer/Footer'
import '../../components/ProductCard/ProductDetails.css'
import Navbar from '../../components/Navbar/Navbar'

function Page3(){
    return( 
        <> 
        <Header/>
        <Navbar/>
        <ProductDetails className='Product-details'
        image={img3} name='Rose Bouquet' price='320'/>
        <Footer/>
        </>
    );
}
export default Page3