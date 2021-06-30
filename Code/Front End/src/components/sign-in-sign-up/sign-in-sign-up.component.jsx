import React from 'react';


import SignIn from '../sign-in/sign-in.component';
import SignUp from '../sign-up/sign-up.component';

import './sign-in-sign-up.styles.scss';

class SignInSignUp extends React.Component{
    constructor(props){
        super(props);

        this.handleSwitch = this.handleSwitch.bind(this);

        this.state = {
            wantToRegister: false
        }
    }

    handleSwitch(){
        if(this.state.wantToRegister === false){
            this.setState({wantToRegister: true})
        }
        else{
            this.setState({wantToRegister: false})
        }
    }

    

    render(){
        if(this.state.wantToRegister === false){
            return(
                <SignIn switcher={this.handleSwitch}/>
            );
        }else{
            return(
                <SignUp switcher={this.handleSwitch}/>
            );
        }
    }
}

export default SignInSignUp;