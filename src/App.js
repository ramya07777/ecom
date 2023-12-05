import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Subnav from "./components/Subnav";
import Banner from "./components/Banner";
import Small from "./components/Small";
import Category from "./components/Category";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Product from "./productpage/Product";
import Cart from "./cart/Cart";
import Checkout from "./cart/Checkout";
import Payment from "./cart/Payment";
import ProductDetails from "./Product Details/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Subnav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner /> <Small /> <Category /> <Home />
            </>
          }
        />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/check" element={<Checkout />} />
        <Route path="/pay" element={<Payment />} />
        <Route path="/detail" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
