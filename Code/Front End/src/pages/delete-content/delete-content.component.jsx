import React from 'react';

import './delete-content.styles.scss';

import Header from '../../components/header/header.component';
import AdminPanelTitle from '../../components/admin-panel-title/admin-panel-title.component';
import SearchBar from '../../components/search-bar/search-bar.component';


class DeleteContent extends React.Component{
    state = {
        productName: ''
    }
    
    
    render(){
        return(
            <div className="delete-content">
                <Header/>
                <AdminPanelTitle title="Quitar Contenido"/>
                <SearchBar/>
            </div>
        )
    }
}

export default DeleteContent;