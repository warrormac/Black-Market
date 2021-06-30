import React from 'react';

import './header.styles.scss';

import {auth} from '../../firebase/firebase.utils';

import CustomButton from "../custom-button/custom-button.component"
class Header extends React.Component{
    constructor(props){
        super(props);
        this.handleSignOut =  this.handleSignOut.bind(this);
    }
    handleSignOut =  () => {
        console.log("clicked")
        auth.signOut();
    }
    render(){
        return(
            <div className="wrapper">
                <header className='header'>
                    <span className='logo-negative'>Black Market</span>
                    <span className= 'title'>Panel Administrativo</span>
                </header>
                
                <CustomButton className="exit-button" onClick={this.handleSignOut}>SALIR</CustomButton>
            </div>
        )
    }
}

export default Header;
