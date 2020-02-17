import React, { Component } from "react";
// import { Navbar, Navitem, Row} from 'react-materialize';

class Header extends Component{
    render() {
        return (
            <div className="headerDiv">
                <header>
                    <span className="facepayHeader">FacePay</span>
                </header>
            </div>
        )
    }
}

export default Header;