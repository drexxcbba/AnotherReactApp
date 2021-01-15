import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import React, { Fragment, useState } from 'react';
import Product from './Components/Product';
import Car from './Components/Car';

function App() {

  const date = new Date().getFullYear();
  const [products, setProducts] = useState([
    { id:1, nombre: 'Camisa 1', precio: 50 },
    { id:2, nombre: 'Camisa 2', precio: 40 },
    { id:3, nombre: 'Camisa 3', precio: 30 },
    { id:4, nombre: 'Camisa 4', precio: 20 },
  ]);

  const [car, setCar] = useState([]);

  return (
    <Fragment>
     <Header titulo="Tienda virtual"/>
     <h1>Lista de productos</h1>
     {products.map( item => (
       <Product 
       key = {item.id} 
       item = {item}
       products = {products}
       car = {car}
       setCar = {setCar} />
     ))}
     <Footer fecha = {date}/>
     <Car car = {car}/>
    </Fragment>
  );
}

export default App;
