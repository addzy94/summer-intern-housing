import express from "express";

import { deleteUser, getAllUsers, getUser, updateUser} from "../controllers/userController.js";


const router = express.Router();

// Update User Listing
router.put("/:id", updateUser);

// Delete User Listing
router.delete("/:id", deleteUser);

// Get User Listing based on ID
router.get("/:id", getUser);

// Get All Users
router.get("/", getAllUsers);

export default router;