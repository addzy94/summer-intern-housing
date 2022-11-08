import express from "express";
import { register, login, logout } from "../controllers/authController.js";

const router = express.Router();

// User Registration
router.post("/register", register);

// User Login
router.post("/login", login)

// User Logout
router.get("/logout", logout)

export default router;