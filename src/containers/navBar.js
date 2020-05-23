import React, { Component } from 'react'
import Avatar from "../components/navAvatar"
import NavButton from "../components/navButton"

class NavBar extends Component{


    constructor(props){
        super(props);
        this.state = {
            selected: "",
        }
    }

    render(){
        return(
            <span id="navBar">
                <Avatar image='images/no-avatar.png'/>
                <ol id="navButtonContainer">
                    <NavButton text="About" path="/about" />
                    <NavButton text="Account" path="/account"/>
                    <NavButton text="Browse"path="/"/>
                </ol>
            </span>
        )}
}

export default NavBar