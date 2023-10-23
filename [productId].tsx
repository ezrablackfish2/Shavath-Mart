// pages/[productId].tsx
import { useRouter } from 'next/router';
import useProducts from '../hooks/useProducts';
import ProductDetails from '../components/ProductDetails';

export default function ProductPage(user, token) {
  const router = useRouter();
  const { products } = useProducts(user, token); // Make sure you have user and token defined

  // Get the productId from the route parameter
  const { productId } = router.query;

  // Find the product with the matching ID in the products array
  const product = products.find((p) => product._id === productId);
	console.log(product);

  return (
    <div>
      {product ? <ProductDetails product={product} /> : <p>Product not found</p>}
    </div>
  );
}

