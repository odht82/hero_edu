import React, { useEffect, useState } from 'react';
import './Products.css';
import ProductCard from './ProductCard/ProductCard';

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/odht82/data_heroedu_2/main/productData.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [])
  return (
    <div className="product">
      <div className="product-container">
        <h2 className='product-section-heading'>
          Products
        </h2>
        <div className="product-list-section">
          {products.map(product => <ProductCard
            key={product.key}
            product={product}
          ></ProductCard>)}
        </div>
      </div>
    </div >
  );
}

export default Products;
