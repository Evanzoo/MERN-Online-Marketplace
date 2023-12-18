import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import {userRouter} from "./routes/users.js";
import productRoutes from './routes/productRoutes.js';


const app = express();


app.use(express.json());
app.use(cors());
app.use('/products', productRoutes);
app.use("/auth", userRouter);

mongoose.connect(
    'mongodb+srv://Group4:WebAppDevCOMP229@userdata.zgbrtd1.mongodb.net/UserData?retryWrites=true&w=majority');

app.listen(3001, () => console.log("Server Started"));
