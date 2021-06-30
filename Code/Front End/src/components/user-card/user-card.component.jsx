import React, {useState} from 'react';
import Popup from 'reactjs-popup';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import 'reactjs-popup/dist/index.css';
import './user-card.styles.scss';

import {firestore} from '../../firebase/firebase.utils';



const UserCard = ({id, user}) => {
    const [newBalance, setnewBalance] = useState(0);

    const handleChange = e=>{
        setnewBalance(e.target.value)
        console.log(e.target.value)
    }

    const handleSubmit = event=>{
        event.preventDefault();
        
        firestore.collection('users').doc(id).get().then((snapShot)=>{
            let currentBalance = snapShot.data().balance;
            console.log(typeof newBalance)
            let balanceToAssing = Number(newBalance) + currentBalance;

            firestore.collection('users').doc(id).update(
                {
                    balance: balanceToAssing
                }
            )

        }).catch(error=>console.log(error));

    }

    return(
        <div className="user-card">
                <h2>{user.email}</h2>
                <CustomButton redButton>Lista de Calificaciones</CustomButton>
                <CustomButton redButton>Contenidos Descargados</CustomButton>
                <Popup trigger={<CustomButton redButton>Agregar Saldo</CustomButton>} modal>
                    <h2>Introduzca la cantidad de saldo que desea agregar</h2>
                    <form onSubmit={handleSubmit}>
                        <FormInput type="number" name="newBalance" onChange = {handleChange}></FormInput>
                        <CustomButton greenButton>Agregar Saldo</CustomButton>
                    </form>
                </Popup>
        </div>
    )
}

export default UserCard;