import React from 'react';
import axios from 'axios';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

import './search-bar.styles.scss';

const SearchBar = ({handleChange}) => {


    return(
        <div className="search-bar">
            <FontAwesomeIcon icon={faSearch} className="search-icon"/>
            <input 
                type="search" 
                placeholder={"Nombre de Usuario"}
                className="search"
                onChange={handleChange}
            />
        </div>
    );
}

export default SearchBar;