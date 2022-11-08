import express from "express";

import { deleteUser, getUser, updateUser } from "../controllers/userController.js";
import { verifyUser } from "../utils/verifyToken.js";


const router = express.Router();

// Update User
router.put("/:id", verifyUser, updateUser);

// Delete User
router.delete("/:id", verifyUser, deleteUser);

// Get User Details
router.get("/:id", verifyUser, getUser);

export default router;