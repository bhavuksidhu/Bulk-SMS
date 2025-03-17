import UserModel from "../models/userModel.js";
import { comparePassword, generateToken , hashPassword} from "../utils/authUtils.js";

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userData = await UserModel.findOne({ email });

    if (!userData) {
      return res.status(404).json({ msg: "Please enter correct email" });
    }

    const isMatch = await comparePassword(password, userData.password);
    if (!isMatch) {
      return res.status(404).json({ msg: "Please enter correct password" });
    }

    // Convert to plain object before deleting password
    const userObject = userData.toObject();
    delete userObject.password;

    const token = generateToken(userObject);

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: "Strict",
    });

    return res.status(200).json({
      msg: "Login successfully",
      data: userObject,
    });
  } catch (error) {
    console.error("Login Error:", error.message); 
    return res.status(500).json({ msg: "Server error", error: error.message });
  }
};

export const userRegister = async (req, res) => {
    try {
      const password = await hashPassword(req.body.password);
      const saveData = await UserModel.create({ ...req.body,password });
  
      const userObject = saveData.toObject();
      delete userObject.password;
  
      return res.status(201).json({
        msg: "Registration successful",
        data: userObject,
      });
  
    } catch (error) {
      console.error("Registration Error:", error.message);
      return res.status(500).json({
        msg: "Server error",
        error: error.message,
      });
    }
  };
  
