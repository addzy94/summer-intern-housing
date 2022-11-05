import express from "express";

import { createApartment, 
         deleteApartment, 
         getAllApartments, 
         getApartment, 
         updateApartment, 
         getApartmentsByCity } from "../controllers/apartmentController.js";

import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// Create Apartment Listing
router.post("/", verifyAdmin, createApartment);

// Update Apartment Listing
router.put("/:id", verifyAdmin, updateApartment);

// Delete Apartment Listing
router.delete("/:id", verifyAdmin, deleteApartment);

// Get Apartment Listing based on ID
router.get("find/:id", getApartment);

// Get All Apartments
router.get("/", getAllApartments);

// Get By City
router.get("/count-by-city", getApartmentsByCity);

export default router;