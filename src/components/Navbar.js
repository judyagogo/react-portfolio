import React, { Component } from 'react';
import Navitem from './Navitem';

class Navbar extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'NavItemActive':''
        }
    }
    activeitem=(x)=>
    {
        if(this.state.NavItemActive.length>0){
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({'NavItemActive':x},()=>{
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };
   
    render() {
        return (
            <nav id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
            <ul id="menu">
            <Navitem item="Home" tolink="./"  activec={this.activeitem}></Navitem>
            <Navitem item="About" tolink="./About"  activec={this.activeitem}></Navitem>
            <Navitem item="Education" tolink="./Education"  activec={this.activeitem}></Navitem>
            <Navitem item="Projects" tolink="./Projects"  activec={this.activeitem}></Navitem>
            <Navitem item="Contact" tolink="./Contact"  activec={this.activeitem}></Navitem>
            </ul>
            </nav>
            )
        }
    }
    
export default Navbar