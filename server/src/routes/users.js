import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/Users.js";
import verifyToken from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", async (req, res) => {
    const { username, email, password } = req.body;

    const user = await UserModel.findOne({ username });

    if (user) {
        return res.json({message: "User already exists"});
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = new UserModel({username, email, password: hashedPassword});
    await newUser.save();

    res.json({message: "Successfully Registered User!"});
});
 
router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });

    if (!user) {
        return res.json({message: "User doesn't exist!"});
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.json({message: "Username or Password is incorrect"});
    }

    const token = jwt.sign({id: user._id }, "secret");
    res.json({token, userID: user._id});
});

router.get("/", async (req, res) => {
    try {
        const users = await UserModel.find();
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.get("/:userId", async (req, res) => {
    const userId = req.params.userId;

    try {
        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
//router.use(verifyToken);

router.put("/:userId", async (req, res) => {
    const userId = req.params.userId;
    const { username, email, password } = req.body;

    try {
        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        user.username = username || user.username;
        user.email = email || user.email;
        user.password = password || user.password;

        await user.save();

        res.json({ message: "User updated successfully", user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.delete("/:userId", async (req, res) => {
    const userId = req.params.userId;

    try {
        const user = await UserModel.findByIdAndDelete(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ message: "User deleted successfully", user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


export {router as userRouter};