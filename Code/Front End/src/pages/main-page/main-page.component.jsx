import React, {useEffect, useState} from 'react';
import axios from 'axios';

import SidePanel from '../../components/side-panel/side-panel.component';

import UserHeader from '../../components/user-header/user-header.component';
import ListProducts from '../../components/list-products/list-products.component';

import './main-page.styles.scss';

const MainPage = () => {
  const [url, setUrl] = useState('http://localhost:8000/products');
  const [products, setProducts] = useState([]);

  
  useEffect(() => axios.get(url).then(res => setProducts(res.data)),[])
  

  return(
    <div className='main-page'>
      <UserHeader/>
      <div className='page'>
        <SidePanel/>
        <ListProducts products={products}/>
      </div>
    </div>
  )
}

export default MainPage;
