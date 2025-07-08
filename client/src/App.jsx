
import { Routes, Route, useLocation } from "react-router-dom";

// Core Components
import Navbar from "./components/Home/Navbar";
import Home from "./Home";
import Signin from "./components/Auth/Signin";
import Signup from "./components/Auth/Signup";
import PrivateRoute from "./components/Auth/PrivateRoute";

// Protected Pages
import Checkout from "./components/Checkout/Checkout";
import Dashboard from "./components/OtherPages/Dashboard";
import Profile from "./components/OtherPages/Profile";
import Cart from "./components/OtherPages/Cart";
import ProductPage from "./components/OtherPages/ProductPage";

// Categories
import Bagcharm from "./pages/Bagcharm/Bagcharm";
import Bouquet from "./pages/Bouquets/Bouquet";
import Phonecharm from "./pages/Phonecharm/Phonecharm";
import Keychain from "./pages/Keychains/Keychain";
import Bracelet from "./pages/Bracelet/Bracelet";
import Neckchain from "./pages/Neckchain/Neckchain";

// Product Detail Pages - Bagcharm
import Bpage1 from "./pages/Page1/Bpage1";
import Bpage2 from "./pages/Page2/Bpage2";
import Bpage3 from "./pages/Page3/Bpage3";

// Product Detail Pages - Bouquet
import Page1 from "./pages/Page1/Page1";
import Page2 from "./pages/Page2/Page2";
import Page3 from "./pages/Page3/Page3";
import Page4 from "./pages/Page4/Page4";
import Page5 from "./pages/Page5/Page5";
import Page6 from "./pages/Page6/Page6";
import Page7 from "./pages/Page7/Page7";
import Page9 from "./pages/Page9/Page9";

// Product Detail Pages - Phonecharm
import Ppage1 from "./pages/Page1/Ppage1";
import Ppage2 from "./pages/Page2/Ppage2";
import Ppage3 from "./pages/Page3/Ppage3";
import Ppage4 from "./pages/Page4/Ppage4";

// Product Detail Pages - Bracelet
import Brpage1 from "./pages/Page1/Brpage1";
import Brpage2 from "./pages/Page2/Brpage2";

// Product Detail Pages - Neckchain
import Npage1 from "./pages/Page1/Npage1";
import Npage2 from "./pages/Page2/Npage2";

// Product Detail Pages - Keychains
import Kpage1 from "./pages/Page1/Kpage1";
import Kpage2 from "./pages/Page2/Kpage2";
import Kpage3 from "./pages/Page3/Kpage3";
import Kpage4 from "./pages/Page4/Kpage4";
import Kpage5 from "./pages/Page5/Kpage5";
import Kpage6 from "./pages/Page6/Kpage6";
import Kpage7 from "./pages/Page7/Kpage7";
import Kpage8 from "./pages/Page8/Kpage8";
import Kpage9 from "./pages/Page9/Kpage9";
import Kpage10 from "./pages/Page10/Kpage10";
import Kpage11 from "./pages/Page11/Kpage11";
import Kpage12 from "./pages/Page12/Kpage12";

function App() {
  const location = useLocation();

  const showNavbarOnPaths = [
    "/",
    "/signin",
    "/signup",
    "/cart",
    "/dashboard",
    "/profile",
    "/categories/bouquet",
    "/categories/phonecharm",
    "/categories/keychain",
    "/categories/bagcharm",
    "/categories/bracelet",
    "/categories/neckchain",
  ];

  const showNavbar =
    showNavbarOnPaths.some((path) => location.pathname.startsWith(path)) ||
    location.pathname.startsWith("/products/");

  return (
    <>
      {showNavbar && <Navbar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products/:id" element={<ProductPage />} />

        {/* Protected Routes */}
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />

        {/* Category Routes */}
        <Route path="/categories/bouquet" element={<Bouquet />} />
        <Route path="/categories/phonecharm" element={<Phonecharm />} />
        <Route path="/categories/keychain" element={<Keychain />} />
        <Route path="/categories/bagcharm" element={<Bagcharm />} />
        <Route path="/categories/bracelet" element={<Bracelet />} />
        <Route path="/categories/neckchain" element={<Neckchain />} />

        {/* Bagcharm Product Details */}
        <Route path="/categories/bagcharm/PeachCharm" element={<Bpage1 />} />
        <Route path="/categories/bagcharm/StarCharm" element={<Bpage2 />} />
        <Route path="/categories/bagcharm/BowButterfly" element={<Bpage3 />} />

        {/* Bouquet Product Details */}
        <Route path="/categories/bouquet/Sunflower" element={<Page1 />} />
        <Route path="/categories/bouquet/PinkandWhiteRose" element={<Page2 />} />
        <Route path="/categories/bouquet/RoseBouquet" element={<Page3 />} />
        <Route path="/categories/bouquet/DoubleLayeredRose" element={<Page4 />} />
        <Route path="/categories/bouquet/Tulip-Roses" element={<Page5 />} />
        <Route path="/categories/bouquet/BlueRose" element={<Page6 />} />
        <Route path="/categories/bouquet/MixedBouquet" element={<Page7 />} />
        <Route path="/categories/bouquet/RedRose" element={<Page9 />} />

        {/* Phonecharm Product Details */}
        <Route path="/categories/phonecharm/Cinnamonroll" element={<Ppage1 />} />
        <Route path="/categories/phonecharm/GreenButterfly" element={<Ppage2 />} />
        <Route path="/categories/phonecharm/PinkButterfly" element={<Ppage3 />} />
        <Route path="/categories/phonecharm/Kuromi" element={<Ppage4 />} />

        {/* Bracelet Product Details */}
        <Route path="/categories/bracelet/StarBracelet" element={<Brpage1 />} />
        <Route path="/categories/bracelet/BlueBracelet" element={<Brpage2 />} />

        {/* Neckchain Product Details */}
        <Route path="/categories/neckchain/HeartsAndBows" element={<Npage1 />} />
        <Route path="/categories/neckchain/CherryBow" element={<Npage2 />} />

        {/* Keychain Product Details */}
        <Route path="/categories/keychain/Capybara" element={<Kpage1 />} />
        <Route path="/categories/keychain/Pompompurin" element={<Kpage2 />} />
        <Route path="/categories/keychain/crochetcat" element={<Kpage3 />} />
        <Route path="/categories/keychain/Frog" element={<Kpage4 />} />
        <Route path="/categories/keychain/Tata" element={<Kpage5 />} />
        <Route path="/categories/keychain/Miffy" element={<Kpage6 />} />
        <Route path="/categories/keychain/Piggy" element={<Kpage7 />} />
        <Route path="/categories/keychain/StrawberryPiggy" element={<Kpage8 />} />
        <Route path="/categories/keychain/Duck" element={<Kpage9 />} />
        <Route path="/categories/keychain/MiniBouquet" element={<Kpage10 />} />
        <Route path="/categories/keychain/Teddy" element={<Kpage11 />} />
        <Route path="/categories/keychain/Turtle" element={<Kpage12 />} />
      </Routes>
    </>
  );
}

export default App;
