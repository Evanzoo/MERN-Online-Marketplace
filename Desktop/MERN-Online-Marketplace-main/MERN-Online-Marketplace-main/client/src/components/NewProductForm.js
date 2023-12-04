//components/NewProductForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const NewProductForm = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState('');
  const [contactInfo, setContactInfo] = useState('');

  const navigate = useNavigate();

  const handleProductCreated = () => {
    // Trigger a callback to update the ProductList
    // You can add more logic here if needed
  };

  const handleCreateProduct = async () => {
    try {
      // Create a new product using the Express server API
      await axios.post('http://localhost:3001/products', {
        name: productName,
        description: productDescription,
        price: productPrice,
        image: productImage,
        contactInfo: contactInfo,
      });

      // Trigger a callback to update the ProductList
      handleProductCreated();

      // Redirect to the Products page after successful product creation
      navigate('/products');
    } catch (error) {
      // Handle product creation error
      console.error(error);
    }
  };

  return (
    <div className="new-product-form">
      <h2>Create a New Product</h2>
      <form onSubmit={handleCreateProduct}>
        {/* Form inputs for Title, Picture, Description, Price, and Contact Info */}
        <div className="form-group">
          <label htmlFor="productName">Title:</label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="productImage">Picture (URL):</label>
          <input
            type="text"
            id="productImage"
            value={productImage}
            onChange={(e) => setProductImage(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productDescription">Description:</label>
          <textarea
            id="productDescription"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="productPrice">Price:</label>
          <input
            type="text"
            id="productPrice"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactInfo">Contact Info:</label>
          <input
            type="text"
            id="contactInfo"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
};

export default NewProductForm;
