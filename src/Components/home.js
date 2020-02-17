import React, { Component } from "react";
import Header from "./header";
import Content1 from "./content1";
import Content3 from "./content3";
import Footer from "./footer";

class Home extends Component{
    render() {
        return (
            <div>
                <Header />
                <Content1 />
                <span></span>
                <Content3 />
                <Footer />
            </div>
        )
    }
};

export default Home