// routes/productRoutes.js
import express from 'express';
import { ProductModel } from '../models/products'; // Remove 'upload' import

const router = express.Router();

router.post('/upload', async (req, res) => { // Remove 'upload.single('image')' middleware
  try {
    const { name, description, price } = req.body;
    const imageUrl = req.file.path;

    const newProduct = new ProductModel({
      name,
      description,
      price,
      imageUrl,
    });

    await newProduct.save();

    res.json({ message: 'Product created successfully!' });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
