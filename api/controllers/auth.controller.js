import User from "../models/user.model.js";
import bcryptjs from "bcryptjs/dist/bcrypt.js";

export const signup = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password || username === "" || email === "" || password === "") {
        return res.status(400).json({ message: "All fields are required" });
    }

    if (password.length < 8) {
        return res.status(400).json({ message: "Password must be at least 8 characters long" });
    }

    if (username.length < 5) {
        return res.status(400).json({ message: "Username must be at least 5 characters long" });
    }

    const hashedPassword = bcryptjs.hashSync(password, 12);

    const newUser = new User({ 
        username: username, 
        email: email, 
        password: hashedPassword,
    });

    try {
    await newUser.save();
    res.json({ message: "Signup successful" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }

};