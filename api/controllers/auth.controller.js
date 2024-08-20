import User from "../models/user.model.js";
import bcryptjs from "bcryptjs/dist/bcrypt.js";
import { errorHandler } from "../utils/error.js";
import JWT from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All input is required"));
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
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === "" || password === "") {
    return next(errorHandler(400, "All input is required"));
  }

  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return next(errorHandler(404, "Email or Password not found"));
    }

    const isMatch = bcryptjs.compareSync(password, user.password);
    if (!isMatch) {
      return next(errorHandler(400, "Email or Password not found"));
    }

    const token = JWT.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    const { password: userPassword, ...userInfo } = user._doc;

    res.status(200).cookie("access_token", token, {
      httpOnly: true,
    })
    .json(userInfo);
  } catch (error) {
    next(error);
  }
};
