import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Nave from "./Nave";

const Home = () => {
  return (
    <div>
      <Nave></Nave>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Home;
