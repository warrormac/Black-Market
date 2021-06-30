import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';


import './sign-up.styles.scss';

class SignUp extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            purchases: [],
            isAdmin: false,
            balance: 0
        };
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({[name]: value});
    };

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, purchases, isAdmin, balance} = this.state;

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName, purchases, isAdmin, balance});

            this.setState({
                displayName: '',
                email: '',
                password: ''
            });

        }catch(error){
            alert("El email ingresado ya esta en uso")
        }  
    }

    render(){
        return(
            <div className='sing-in-sign-up'>
                <h2>¡Unete y Comparte con Nosotros!</h2>

                <form>
                    <FormInput
                        name="displayName"
                        type="text"
                        value={this.state.displayName}
                        placeholder="Nombre Completo"
                        required
                        onChange={this.handleChange}
                    />
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        placeholder="Email"
                        required
                        onChange={this.handleChange}
                    />
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        placeholder="Contraseña"
                        required
                        onChange={this.handleChange}
                    />
                </form>
                <div className='buttons'>
                    <CustomButton greenButton onClick={this.props.switcher}>Ir a Ingreso</CustomButton>
                    <CustomButton greenButton onClick={this.handleSubmit}>Registrarse</CustomButton>
                </div>
            </div>
        );
    }
}

export default SignUp;