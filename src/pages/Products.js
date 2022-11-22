import React from 'react';
import Product from '../components/Product';
import '../styles/Products.css';




  function Clothing(props) {
    const {products, onAdd} = props;
  return (
 
    <main  className='Clothing'>
   
    <h2 className='clothing'>Our products</h2>
    <div className='row'>
      {products.map((product)=>(
        <Product key ={product.id} product={product} onAdd={onAdd}></Product>
      ))}
    </div>

    </main>
  ) 
}

export default Clothing