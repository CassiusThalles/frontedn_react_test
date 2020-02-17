import React, { Component } from "react";

class Content1 extends Component{
    render() {
        return (
            <div className="content1BaseDiv">
                <div className="content1ColorBackground">
                    <div className="content1Image"></div>
                    <div className="content1TextHead"><h2>Razão 1 por ter que usar nosso serviço</h2></div>
                    <div className="content1Text"><h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3></div>
                    <span className="content1Button"><a style={{"vertical-align": "middle"}} href="/">Saiba mais</a></span>
                </div>
            </div>
        )
    }
}

export default Content1