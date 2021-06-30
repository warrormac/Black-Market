import React from 'react';

import './admin-panel.styles.scss';

import Header from '../../components/header/header.component'
import CustomButton from '../../components/custom-button/custom-button.component';

class AdminPanel extends React.Component{
    render(){
        return(
            <div className="admin-panel">
                <Header/>
                <div className="main-menu">
                    <div className="row-buttons">
                        <CustomButton className="main-menu-button" onClick={(e) => {e.preventDefault();window.location.href='/add-content';}}>AGREGAR CONTENIDO</CustomButton>
                        <CustomButton className="main-menu-button" onClick={(e) => {e.preventDefault();window.location.href='/users';}}>USUARIOS</CustomButton>
                        <CustomButton className="main-menu-button" onClick={(e) => {e.preventDefault();window.location.href='/add-content';}}>RANKINGS</CustomButton>
                    </div>
                    <div className="row-buttons">
                        <CustomButton className="main-menu-button" onClick={(e) => {e.preventDefault();window.location.href='/delete-content';}}>QUITAR CONTENIDO</CustomButton>
                        <CustomButton className="main-menu-button" onClick={(e) => {e.preventDefault();window.location.href='/add-content';}}>PROMOCIONES</CustomButton>
                        <CustomButton className="main-menu-button" onClick={(e) => {e.preventDefault();window.location.href='/add-category';}}>AGREGAR CATEGORÍA</CustomButton>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminPanel;