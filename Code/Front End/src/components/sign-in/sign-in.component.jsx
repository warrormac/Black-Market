import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            });

        }catch(error){
            alert("Credenciales no validas")
        }  
    };

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value});
    };

    render(){
        return(
            <div className='sing-in-sign-u'>
                <h2>Donde compartimos lo que<br/> nos hace felices</h2>

                <form>
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
                    <CustomButton greenButton onClick={this.handleSubmit}>Ingresar</CustomButton>
                    <CustomButton greenButton onClick={this.props.switcher /*Esta linea provoca un warning, necesitara una rearquitectura con redux para que deje de salir la advertencia*/ }>Registrarse</CustomButton> 
                </div>
            </div>
        );
    }
}

export default SignIn;
