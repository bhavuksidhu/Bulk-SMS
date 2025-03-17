import express from 'express';
import { userLogin, userRegister } from '../controllers/authController.js';

const authRouter = express.Router();

authRouter.post("/login", userLogin);
authRouter.post("/register", userRegister);


export default authRouter;
