import express from "express";
import jwt from "jsonwebtoken";

import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/userController.js";
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

// // Verify Authentication
// router.get("/check-authentication", verifyToken, (req, res, next) => {
//     res.send("You are authenticated!");
// });

// // Verify User
// router.get("/check-user/:id", verifyUser, (req, res, next) => {
//     res.send("You are logged in and you can delete the account!");
// });

// // Verify Admin
// router.get("/check-admin/:id", verifyAdmin, (req, res, next) => {
//     res.send("Hello Admin, you are logged in and you can delete all the accounts!");
// });

// Update User Listing
router.put("/:id", verifyUser, updateUser);

// Delete User Listing
router.delete("/:id", verifyUser, deleteUser);

// Get User Listing based on ID
router.get("/:id", verifyUser, getUser);

// Get All Users
router.get("/", verifyAdmin, getAllUsers);

export default router;