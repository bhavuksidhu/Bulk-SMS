import express from 'express';
import { userLogin, userRegister } from '../controllers/authController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const authRouter = express.Router();

authRouter.post("/login", authMiddleware, userLogin);
authRouter.post("/register", userRegister);


export default authRouter;
