//  productDetail.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const ProductDetail = ({ productId }) => {
  const router = useRouter();
  const { id } = router.query; // Mengambil id dari query parameter
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>Brand: {product.brand}, ( {product.sku} )</p>
      <p>{product.description}</p>
      <p>Category : {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Discount: {product.discountPercentage}%</p>
      <img src={product.thumbnail} alt={product.title} />
      <h3>Reviews:</h3>
      <ul>
        {product.reviews.map((review, index) => (
          <li key={index}>
            <p><strong>{review.reviewerName}</strong> - {review.date}</p>
            <p>Rating: {review.rating}</p>
            <p>{review.comment}</p>
          </li>
        ))}
      </ul>
      <p>
        Tags:
        {product.tags.map((tag, index) => (
          <span key={index}>#{tag} </span>
        ))}
      </p>
    </div>
  );
};

export default ProductDetail;
