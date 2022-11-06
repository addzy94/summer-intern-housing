import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
import apartmentRoute from "./routes/apartments.js";

const app = express();
dotenv.config();

// Connect to DB - Function
const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB!")
    }
    catch (error) {
        throw error;
    }
}

// Monitor Connection
mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected!")
});

// Middleware (Cookie Parser)
app.use(cookieParser());

// Middleware (JSON)
app.use(express.json());

// Middleware (Routes)
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/apartments", apartmentRoute);

// Middleware (Error Handling)
app.use((err, req, res, next) => {

    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";

    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    });
});

app.listen(8800, () => {
    connect();
});