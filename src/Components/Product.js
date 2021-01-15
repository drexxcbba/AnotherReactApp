import React, { Fragment } from 'react';

const Product = ({item, products, car, setCar}) => {

    const { nombre, precio, id } = item;

    const selectP = (id) =>{
       const selected = products.filter(it => it.id === id);
       setCar([
           ...car,
           selected
       ]);
    }

    return ( 
        <Fragment>
            <h2>{nombre}</h2>
            <p>{precio}</p>
            <button 
              type="button"
              onClick={() => selectP(id)}>
                comprar
            </button>
        </Fragment>
    );
}
 
export default Product;