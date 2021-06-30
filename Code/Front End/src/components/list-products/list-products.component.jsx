import React from 'react';

import ProductCard from '../product-card/product-card.component';

import './list-products.styles.scss';

const ListProducts = ({products}) => {
    return(
        <div className='list-products'>
            {
                products.map(product =><ProductCard product = {product}></ProductCard>)
            }
        </div>
    )
};

export default ListProducts;