//components/ProductList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []); // Fetch products on mount

  const handleProductCreated = () => {
    // Trigger a refetch of products when a new product is created
    fetchProducts();
  };

  return (
    <div className="product-list">
      <h2>Product Listings</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            {/* Link to view more details for the product */}
            <Link to={`/products/${product._id}`}>
              <button>View Details</button>
            </Link>
          </li>
        ))}
      </ul>
      <p>Product count: {products.length}</p>
      {/* You can add more UI or components related to the product list here */}
    </div>
  );
};

export default ProductList;
