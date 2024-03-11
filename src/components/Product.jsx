import React from 'react';
import products from '../assets/products';
import './css/Product.css'


const Product = ({ products }) => {
  return (
    <div className="product-listing">
      {products.map((product, index) => (
        <div key={index} className="product">
          <img src={product.image} alt={product.name} />
          <div className="details">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
