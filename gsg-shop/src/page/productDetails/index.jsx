import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const ProductDetailsPage = () => {
  const params = useParams();
  const { id } = params;

  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  console.log('params', params);
  return (
    <div>
      <h1>Product Details</h1>
      <div className="product-image">
        <img src={product.image} />
      </div>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <div>
        <h4>{product?.rating?.rate}</h4>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
