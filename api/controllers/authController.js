import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/User.js";
import { createError } from "../utils/error.js";

export const register = async (req, res, next) => {
    
    try {

        // Store the response details
        const { username, email, passwordOne, passwordVerify } = req.body;

        // Validation - Make sure all fields are filled up
        if (!username || !email || !passwordOne || !passwordVerify)
            return next(createError(400, "Please fill all required fields!"));
        
        // Validation - Make sure password length is minimum 6 characters
        if (passwordOne.length < 6)
            return next(createError(400, "Password length should be atleast six characters!"));

        // Validation - Make sure both passwords match
        if (passwordOne != passwordVerify)
        return next(createError(400, "Passwords do not match!"));

        // Create a hash for the password
        const salt = bcrypt.genSaltSync();
        const hash = bcrypt.hashSync(req.body.passwordOne, salt);

        // Save the details in an object and save to the database
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash
        });

        await newUser.save();

        // Get the created user
        const user = await User.findOne({username: req.body.username});

        // Create an access token for that user ID
        const token = jwt.sign({ id: newUser.username._id }, process.env.JWT);

        const { password, ...otherDetails } = user._doc;

        // Send the result of the API call along with a cookie containing the token
        res.cookie("access_token", token, { httpOnly: true })
           .status(200)
           .json({ ...otherDetails });
    }
    catch (error) {
        return next(error);
    }
}

export const login = async (req, res, next) => {
    
    try {

        // Validation - Check that the user exits
        const user = await User.findOne({username: req.body.username});

        if (!user)
            return next(createError(400, "Incorrect username or password!"));

        // Validation - Check that the password is correct
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);

        if (!isPasswordCorrect)
            return next(createError(400, "Incorrect username or password!"));

        // Create an access token for that user ID
        const token = jwt.sign({ id: user._id }, process.env.JWT);

        const { password, ...otherDetails } = user._doc;

        // Send the result of the API call along with a cookie containing the token
        res.cookie("access_token", token, { httpOnly: true })
           .status(200)
           .json({ ...otherDetails });
    }
    catch (error) {
        return next(error);
    }
}

export const logout = (req, res) => {

    // Set the cookie to empty string and set the date to the past so that
    // it is deleted by the broswer
    res.cookie("access_token", "", { httpOnly: true, expires: new Date(0) })
       .status(200)
       .json("User logged out!");
}