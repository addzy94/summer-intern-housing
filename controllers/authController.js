import bcrypt from "bcryptjs";

import User from "../models/User.js";

export const register = async (req, res, next) => {
    
    try {
        const salt = bcrypt.genSaltSync();
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash
        });

        await newUser.save();
        res.status(201).send("User created!");
    }
    catch (error) {
        return next(error);
    }
}

export const login = async (req, res, next) => {
    
    try {
        const salt = bcrypt.genSaltSync();
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash
        });

        await newUser.save();
        res.status(201).send("User created!");
    }
    catch (error) {
        return next(error);
    }
}