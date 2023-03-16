import React, { useEffect, useState } from 'react';
import './home.css';

import ProductCard from '../../components/productCard';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data);
        setProducts(data);
      })
      .catch((err) => console.log('err', err));
  }, []);

  return (
    <div className="home-div">
      {/* Filter */}
      <div className="filter-div"></div>
      {/* Product List */}
      <div className="product-list">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Home;
