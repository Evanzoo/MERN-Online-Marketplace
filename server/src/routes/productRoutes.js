
import express from 'express';
import { ProductModel } from '../models/products.js';

const router = express.Router();

router.post('/upload', async (req, res) => { 
  try {
    const { name, description, price } = req.body;

    const newProduct = new ProductModel({
      name,
      description,
      price,
    });

    await newProduct.save();

    res.json({ message: 'Product created successfully!' });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
