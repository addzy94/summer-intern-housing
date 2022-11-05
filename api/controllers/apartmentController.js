import Apartment from "../models/Apartment.js";

export const createApartment = async (req, res, next) => {

    const newApartment = new Apartment(req.body);

    try {
        const savedApartment = await newApartment.save();
        res.status(200).json(savedApartment);
    }
    catch (error) {
        return next(error);
    }
}

export const updateApartment = async (req, res, next) => {

    try {
        const updatedApartment = await Apartment.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );

        res.status(200).json(updatedApartment);
    }
    catch (error) {
        return next(error);
    }
}

export const deleteApartment = async (req, res, next) => {

    try {
        await Apartment.findByIdAndDelete(req.params.id);
        res.status(200).json("Deleted apartment!");
    }
    catch (error) {
        return next(error);
    }
}

export const getApartment = async (req, res, next) => {

    try {
        const apartment = await Apartment.findById(req.params.id);
        res.status(200).json(apartment);
    }
    catch (error) {
        return next(error);
    }
}

export const getAllApartments = async (req, res, next) => {

    console.log("I'm hitting this.");

    try {
        const apartments = await Apartment.find();
        res.status(200).json(apartments);
    }
    catch (error) {
        return next(error);
    }
}

export const getApartmentsByCity = async (req, res, next) => {

    const cities = req.query.cities.split(",");
    try {
        const citiesList = await Promise.all(cities.map(city => {
            return Apartment.countDocuments({city: city});
        }));
        res.status(200).json(citiesList);
    }
    catch (error) {
        return next(error);
    }
}