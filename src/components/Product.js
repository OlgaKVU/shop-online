import React from 'react';
import  '../styles/Product.css';

function Product(props) {

 const{product,onAdd}=props;
  return (
    <div>
        <img className='img' src={product.image}alt={product.name} />
        <h3 className='name-product'>{product.name}</h3>
        <h3  className='price-price'>€{product.price}</h3>
        <div>
            <button className='btn' onClick={()=>onAdd(product)}>Add to cart</button>
        </div>
    </div>
  )
}

export default Product;