import express from 'express';
import { logout, userLogin, userRegister } from '../controllers/authController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const authRouter = express.Router();

authRouter.post("/login", authMiddleware, userLogin);
authRouter.post("/register", userRegister);
authRouter.get("/logout", logout);

export default authRouter;
