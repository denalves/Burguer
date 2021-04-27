import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalSytyle";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { productData, productDataTwo } from "./components/Products/data";
import Feature from "./components/Feature";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Products heading='choose your favorite ' data={productData}/>
      <Feature/>
      <Products heading='sweet treates ' data={productDataTwo}/>
      <Footer/>
    </Router>
  );
}

export default App;