import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

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

// Middleware (JSON)
app.use(express.json());

// Middleware (Routes)
app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/apartments", apartmentRoute);

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

app.listen(3000, () => {
    connect();
});