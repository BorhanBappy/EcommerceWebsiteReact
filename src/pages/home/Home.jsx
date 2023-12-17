import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import Products from "./Products";
import Collection from "./Collection";
import BestSeller from "./BestSeller";
import Newsletters from "./Newsletters";

function Home() {
  return (
    <div>
      <Banner />
      <Category />
      <Products />
      <Collection />
      <BestSeller />
      <Newsletters />
    </div>
  );
}

export default Home;
