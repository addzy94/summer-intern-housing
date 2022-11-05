import express from "express";
import { register, login } from "../controllers/authController.js";

const router = express.Router();

// Create a user
router.post("/register", register);

// User login
router.post("/login", login)

export default router;