import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Fragment } from "react";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <div className=" bg-gray-100   ">
          <Navbar className="" />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/product/:id/:title" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
