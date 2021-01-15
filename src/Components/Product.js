import React, { Fragment } from 'react';

const Product = ({item}) => {

    const { nombre, precio } = item;
    return ( 
        <Fragment>
            <h2>{nombre}</h2>
            <p>{precio}</p>
        </Fragment>
    );
}
 
export default Product;