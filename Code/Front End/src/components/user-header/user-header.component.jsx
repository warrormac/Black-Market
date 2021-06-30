import React from 'react';

import CustomButton from '../../components/custom-button/custom-button.component';

import './user-header.styles.scss';

const UserHeader = () => {
    return(
        <div className="user-header">
            <span className="logo">Black Market</span>
            <div className="menu">
                <CustomButton menuButton onClick={(e) => {e.preventDefault();window.location.href='/categories'}}>Categorias</CustomButton>
                <CustomButton menuButton onClick={(e) => {e.preventDefault();window.location.href='/search'}}>Buscar</CustomButton>
                <CustomButton menuButton onClick={(e) => {e.preventDefault();window.location.href='/about'}}>Acerca de</CustomButton>
            </div>

        </div>
    )
    
}

export default UserHeader;
