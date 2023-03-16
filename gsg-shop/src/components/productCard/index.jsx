import React from 'react';
import './productCard.css';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
  const { product } = props;
  //     const product = {
  //       id: 1,
  //       title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  //       price: 109.95,
  //       description:
  //         'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  //       category: "men's clothing",
  //       image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  //       rating: {
  //         rate: 3.9,
  //         count: 120,
  //       },
  //     };

  return (
    <Link to={`/product/${product.id}`}>
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
    </Link>
  );
};

export default ProductCard;
