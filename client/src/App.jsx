import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Checkout from "./components/Checkout/Checkout";

// Components
import Navbar from "./components/Home/Navbar";
import Home from "./Home";
import Signin from "./components/Auth/Signin";
import Signup from "./components/Auth/Signup";
import Dashboard from "./components/OtherPages/Dashboard";
import Profile from "./components/OtherPages/Profile";
import Cart from "./components/OtherPages/Cart";
import PrivateRoute from "./components/Auth/PrivateRoute";
import ProductPage from "./components/OtherPages/ProductPage";

// Product Pages for keychain
import Kpage1 from "./pages/Page1/Kpage1";
import Kpage2 from "./pages/Page2/Kpage2";
import Kpage3 from "./pages/Page3/Kpage3";
import Kpage4 from "./pages/Page4/Kpage4";
import Kpage5 from "./pages/Page5/Kpage5";
import Kpage6 from "./pages/Page6/Kpage6";
import Kpage7 from "./pages/Page7/Kpage7";
// import Kpage8 from "./pages/Page8/Kpage8";
import Kpage9 from "./pages/Page9/Kpage9";
import Kpage10 from "./pages/Page10/Kpage10";

//Product pages for bouquet
import Page1 from './pages/Page1/Page1'
import Page2 from './pages/Page2/Page2'
import Page3 from './pages/Page3/Page3'
import Page4 from './pages/Page4/Page4'
import Page5 from './pages/Page5/Page5'
import Page6 from './pages/Page6/Page6'
import Page7 from './pages/Page7/Page7'
import Page9 from './pages/Page9/Page9'
import Page10 from "./pages/Page10/Page10";



// Categories
import Bagcharm from "./pages/Bagcharm/Bagcharm";
import Bouquet from "./pages/Bouquets/Bouquet";
import Phonecharm from "./pages/Phonecharm/Phonecharm";
import Keychain from "./pages/Keychains/Keychain";

function AppWrapper() {
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
  ];
  const showNavbar =
    showNavbarOnPaths.some((path) => location.pathname.startsWith(path)) ||
    location.pathname.startsWith("/products/");

  return (
    <>
      {showNavbar}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />

        <Route path="/categories/bouquet" element={<Bouquet />} />
        <Route path="/categories/phonecharm" element={<Phonecharm />} />
        <Route path="/categories/keychain" element={<Keychain />} />
        <Route path="/categories/bagcharm" element={<Bagcharm />} />

        <Route path="/categories/keychain/Capybara" element={<Kpage1 />} />
        <Route path="/categories/keychain/Pompompurin" element={<Kpage2 />} />
        <Route path="/categories/keychain/crochetcat" element={<Kpage3 />} />
        <Route path="/categories/keychain/Frog" element={<Kpage4 />} />
        <Route path="/categories/keychain/Tata" element={<Kpage5 />} />
        <Route path="/categories/keychain/Miffy" element={<Kpage6 />} />
        <Route path="/categories/keychain/Piggy" element={<Kpage7 />} />
        <Route path="/categories/keychain/Duck" element={<Kpage9 />} />
        <Route path="/categories/keychain/MiniBouquet" element={<Kpage10 />} />

        
        <Route path="/categories/bouquet/Sunflower" element={<Page1 />} />
        <Route path="/categories/bouquet/PinkandWhiteRose" element={<Page2 />} />
        <Route path="/categories/bouquet/RoseBouquet" element={<Page3 />} />
        <Route path="/categories/bouquet/DoubleLayeredRose" element={<Page4 />} />
        <Route path="/categories/bouquet/tulip" element={<Page5 />} />
        <Route path="/categories/bouquet/BlueRose" element={<Page6 />} />
        <Route path="/categories/bouquet/mixedbouquet" element={<Page7 />} />
        <Route path="/categories/bouquet/RedRose" element={<Page9 />} />
        <Route path="/categories/bouquet/Lily" element={<Page10 />} />
        

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
      </Routes>
    </>
  );
}

export default AppWrapper;
