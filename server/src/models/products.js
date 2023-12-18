// models/products.js
import mongoose from 'mongoose';


const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true
});

export const ProductModel = mongoose.model("productForm", ProductSchema);
