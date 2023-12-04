//server/Users.js
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    email: {
        type: String, 
        trim: true, 
        unique: 'Email already exists',
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
        required: 'Email is required'},
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true },
    created: {type: Date, default: Date.now},
    updated: {type: Date, default: Date.now},
});

export const UserModel = mongoose.model("users", UserSchema)
