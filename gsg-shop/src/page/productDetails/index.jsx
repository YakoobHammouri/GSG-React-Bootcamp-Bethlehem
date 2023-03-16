import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
const ProductDetailsPage = () => {
  const params = useParams();
  const { id } = params;

  useEffect(() => {


        
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => console.log('data', data));



  }, []);

  console.log('params', params);
  return (
    <div>
      <h1>Product Details | {id}</h1>
    </div>
  );
};

export default ProductDetailsPage;
