import React, { useState } from 'react';
import axios from 'axios';


export const ProductForm = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
  });

  const handleInputChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('description', product.description);
    formData.append('price', product.price);

    try {
      const response = await axios.post('http://localhost:3001/products/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);
    } catch (error) {
      console.error('Error uploading product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={product.name} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Description:
        <textarea name="description" value={product.description} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Price:
        <input type="number" name="price" value={product.price} onChange={handleInputChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProductForm;
