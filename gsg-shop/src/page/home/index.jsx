import React from 'react';
import './home.css';

const Home = () => {
  // TODO Step 1 : get all product from https://fakestoreapi.com/

  return (
    <div className="home-div">
      {/* Filter */}
      <div className="filter-div"></div>
      {/* Product List */}
      <div className="product-list">
        {
          //TODO Step 2 : using ProductCard to display all products by using map
        }
      </div>
    </div>
  );
};

export default Home;
