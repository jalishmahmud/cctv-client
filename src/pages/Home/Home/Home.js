import React from "react";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import OurServices from "../OurServices/OurServices";

import Products from "../Products/Products";
import Reviews from "../Reviews/Reviews";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OurServices></OurServices>
      <Products></Products>
      <Reviews></Reviews>
      <Contact></Contact>
    </div>
  );
};

export default Home;
