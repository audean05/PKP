// ProductList.js
import { useState, useEffect } from 'react';
import axios from 'axios'; 
import { useRouter } from 'next/router';

export default function ProductList() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/search?q=${searchQuery}`); 
        setProducts(response.data.products); 
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, [searchQuery]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleProductClick = (productId) => {
    router.push(`/product/ProductDetail?id=${productId}`);
  };

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchInputChange}
          placeholder="Search products..."
          className="search-input"
        />
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card" onClick={() => handleProductClick(product.id)}>
            <h2>{product.title}</h2>
            <p>Brand: {product.brand}, ( {product.sku} )</p>
            <p>{product.description}</p>
            <p>Category : {product.category}</p>
            <p>Price: ${product.price}</p>
            <p>Discount: {product.discountPercentage}%</p>

            <img src={product.thumbnail} alt={product.title} />
            <h3>Reviews:</h3>
            <ul className="reviews">
              {product.reviews.map((review, index) => (
                <li key={index} className="review-item">
                  <p><strong>{review.reviewerName}</strong> - {review.date}</p>
                  <p className="rating">Rating: {review.rating}</p>
                  <p>{review.comment}</p>
                </li>
              ))}
            </ul>
            <p>
              {product.tags.map((tag, index) => (
                <span key={index}>#{tag} </span>
              ))}
            </p>
          </div>
        ))}
      </div>
  
      <style jsx>{`
        .search-container {
          margin-bottom: 20px;
        }
  
        .search-input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 16px;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          grid-gap: 20px;
        }
  
        .product-card {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 16px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
  
        .product-card h2 {
          font-size: 1.2rem;
          margin-bottom: 8px;
        }
  
        .product-card p {
          margin-bottom: 12px;
        }
  
        .product-card img {
          max-width: 100%;
          border-radius: 8px;
          margin-bottom: 12px;
        }
  
        .product-card .reviews {
          margin-top: 20px;
        }
  
        .product-card .review-item {
          margin-bottom: 12px;
        }
  
        .product-card .review-item strong {
          font-weight: bold;
        }
  
        .product-card .review-item p {
          margin: 4px 0;
        }
  
        .product-card .review-item p.rating {
          color: #007bff;
        }
  
        /* Optional: Style for tags */
        .product-card .tags {
          margin-top: 10px;
        }
  
        .product-card .tags span {
          display: inline-block;
          margin-right: 6px;
          background-color: #007bff;
          color: #fff;
          padding: 4px 8px;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
  
}
