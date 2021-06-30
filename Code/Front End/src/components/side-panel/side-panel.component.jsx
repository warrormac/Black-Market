import React, {useState, useEffect} from 'react';

import CustomButton from '../../components/custom-button/custom-button.component';

import { auth, firestore } from '../../firebase/firebase.utils';

import './side-panel.styles.scss';


const SidePanel = () => {
    const [currentUserData, setCurrentUserData] = useState({email:""});
    
    const loadUserData = () => {
        firestore.collection('users').doc(auth.currentUser.uid).get().then((snapShot) => {
            setCurrentUserData(snapShot.data());
        }).catch(
            e => {
                console.log(e)          //ERROR AL CARGAR PURCHASES HISTORY Y ABOUT, EN OTRAS PALABRAS, TODO LO QUE TENGA QUE VER CON SIDEPANEL
            }
        );
    }
    useEffect(loadUserData, []);
    return(
        <div className="side-panel">
            <span>{currentUserData.displayName}</span>
            <span>Saldo:  S/.{currentUserData.balance}</span>
            <CustomButton redButton onClick = {() => {auth.currentUser.delete().then().catch()}}>Cerrar Cuenta</CustomButton>
            <div className="options">
                <CustomButton greyButton onClick={() => {window.location.href='/purchases-history'}}>Historial de Compras</CustomButton>
                <CustomButton redButton onClick={() => auth.signOut()}>Salir</CustomButton>
            </div>
        </div>
    )
    
}

export default SidePanel;
