import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 5
    },
    email: {
        type: String,
        required: true,
        unique: true,   
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
}, { timestamps: true }
);

const user = mongoose.model('User', userSchema);

export default user;