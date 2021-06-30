import React from 'react';

import CustomButton from "../custom-button/custom-button.component";
import { auth, firestore } from '../../firebase/firebase.utils';
import './product-card.styles.scss';

const ProductCard = ({product}) => {

    const onBuy = (e) => {
        e.preventDefault();
        firestore.collection('users').doc(auth.currentUser.uid).get().then((snapShot)=>{
            let currentPurchases = snapShot.data().purchases;
            let currentBalance = snapShot.data().balance;

            currentPurchases.push(product);
            currentBalance-=product.price;

            if(currentBalance+product.price > product.price){
                firestore.collection('users').doc(auth.currentUser.uid).update(
                    {
                        purchases: currentPurchases,
                        balance: currentBalance
                    }
                ).then(() => {
                    window.location.href='/main-page'
                })
            }else{
                alert("NO TIENE SALDO SUFICIENTE PARA COMPRAR ESTE PRODUCTO");
            }
        }).catch(error=>console.log(error));
    }


    return(
        <div className="product-card">
            <div className="name-price">
                <h2>{product.name}</h2>
                <h2>S/.{product.price}</h2>
            </div>
            <span>Author: {product.author}</span>
            <span>Description: {product.description}</span>
            <span>Categoría{product.category}</span>
            <span>Tipo: {product.type}</span>
            <span>Extensión: {product.mimeType}</span>
            <span>MIME Type: {product.mimeType}</span>
            
            <div>
                <CustomButton greenButton>Regalar</CustomButton>
                <span> </span>
                <CustomButton greenButton onClick={onBuy}>Comprar</CustomButton>
            </div>
        </div>
    )
};

export default ProductCard;