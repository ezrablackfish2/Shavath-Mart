// pages/[productId]/index.tsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function ProductDetail() {
  const router = useRouter();
  const { productId } = router.query;

  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (productId) {
      // Find the product with the matching ID in the products array
      const productData = products.find((product) => product._id === productId);

      if (productData) {
        setProduct(productData);
      }
    }
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: {product.price} ETB</p>
      <p>Color: {product.color}</p>
      {/* Render other product details as needed */}
    </div>
  );
}

