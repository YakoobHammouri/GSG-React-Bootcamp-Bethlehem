import React from 'react';
import './productCard.css';

const ProductCard = () => {
  // TODO step 3 : using props to  get product data
  const product = {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: {
      rate: 3.9,
      count: 120,
    },
  };

  // TODO step 9 : cerate  Link for product details Pages with id of product
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} />
      </div>
      <div>
        <h3>{product.title}</h3>
        <p>{product.price} $</p>
        <button> see More </button>
      </div>
    </div>
  );
};

export default ProductCard;
