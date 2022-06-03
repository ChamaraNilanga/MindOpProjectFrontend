import React, { Component } from "react";
import { Link } from "react-router-dom";
import {MenuItems} from "./MenuItems";
import logo from "../../images/logo_transparent.png";
import "./Navbar.css";


class Navbar extends Component{
     state = {clicked:false};
     handleClick=()=>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
    return(
        <nav className="NavbarItems">
            <img className="navbar-logo" src={logo}></img>
            <div className="menu-icon" onClick={this.handleClick}>
                <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

            </div>
            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item,index)=>{
                    return(
                        <li key={index}>
                            <Link to={item.url} className={item.cName}><i className={item.icon}></i>{item.title}</Link>
                        </li>
                    )}
                 )}
                
            </ul>
        
        </nav>
    )
 }
}

export default Navbar;