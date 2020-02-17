import React, { Component } from "react";
import Header from "./header";
import Content1 from "./content1";

class Home extends Component{
    render() {
        return (
            <div>
                <Header />
                <Content1 />
            </div>
        )
    }
};

export default Home