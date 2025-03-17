import { verifyToken } from "../utils/authUtils.js";

export const authMiddleware = (req, res, next) => {
  const token = req.token;
  if (!token) throw error("unauthorized access");
  const tokenData = verifyToken(token);
  const { name, email, _id } = tokenData;
  req.user = { name, email, _id };
  next();
};
