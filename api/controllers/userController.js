import User from "../models/User.js";

export const updateUser = async (req, res, next) => {

    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );

        const { password, ...otherDetails } = updatedUser._doc;

        res.status(200).json({ ...otherDetails });
    }
    catch (error) {
        return next(error);
    }
}

export const deleteUser = async (req, res, next) => {

    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("Deleted User!");
    }
    catch (error) {
        return next(error);
    }
}

export const getUser = async (req, res, next) => {

    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    }
    catch (error) {
        return next(error);
    }
}

export const getAllUsers = async (req, res, next) => {

    try {
        const users = await User.find();
        res.status(200).json(users);
    }
    catch (error) {
        return next(error);
    }
}