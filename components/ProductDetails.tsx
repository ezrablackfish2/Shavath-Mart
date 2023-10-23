import React from 'react';

type ProductDetailsProps = {
  product: {
    _id: string;
    name: string;
    price: string;
    color: string;
  };
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: {product.price} ETB</p>
      <p>Color: {product.color}</p>
      {/* Render other product details as needed */}
    </div>
  );
};

export default ProductDetails;

