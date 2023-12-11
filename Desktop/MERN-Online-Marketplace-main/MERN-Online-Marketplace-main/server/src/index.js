import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import {userRouter} from "./routes/users.js";
import productRoutes from './routes/productRoutes.js';
import { ProductModel, upload } from '../models/products';

const multer = require('multer');

const app = express();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Specify the directory where you want to store the uploaded files
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname); // Use the original name of the file
    },
  });
  
  const upload = multer({ storage: storage });
  
  app.post('/upload', upload.single('file'), (req, res) => {
    // 'file' should match the name attribute in your form input for the file
    res.json({ message: 'File uploaded successfully!' });
  });

app.use(express.json());
app.use(cors());
app.use('/products', productRoutes);
app.use("/auth", userRouter);

mongoose.connect(
    'mongodb+srv://Group4:WebAppDevCOMP229@userdata.zgbrtd1.mongodb.net/UserData?retryWrites=true&w=majority');

app.listen(3001, () => console.log("Server Started"));
