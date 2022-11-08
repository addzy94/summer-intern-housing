import express from "express";

import { createApartment, 
         deleteApartment, 
         getAllApartments, 
         getApartment, 
         updateApartment, 
         getApartmentsByCity } from "../controllers/apartmentController.js";

const router = express.Router();

// Create Apartment Listing
router.post("/", createApartment);

// Update Apartment Listing
router.put("/:id", updateApartment);

// Delete Apartment Listing
router.delete("/:id", deleteApartment);

// Get Apartment Listing based on ID
router.get("find/:id", getApartment);

// Get All Apartments
router.get("/", getAllApartments);

// Get By City
router.get("/count-by-city", getApartmentsByCity);

export default router;