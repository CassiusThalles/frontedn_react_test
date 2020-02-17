import React from "react";

import "./App.css";
import Header from "../../Components/header";
import Content1 from "../../Components/content1";
import Content3 from "../../Components/content3";
import Footer from "../../Components/footer";

function Home() {
  return (
    <div>
      <Header />
      <Content1 />
      <span></span>
      <Content3 />
      <Footer />
    </div>
  );
}

export default Home;
