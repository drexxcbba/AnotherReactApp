import React from 'react';
import './Carr.css';
import Product from './Product';

const Car = ({car}) => {
    return ( 
        <div className="car">
            <h1>Tu carrito de compras</h1>
            {car.map( it => (
                <Product 
                key = {it.id} 
                item = {it}/>
            ))}
        </div>
     );
}
 
export default Car;