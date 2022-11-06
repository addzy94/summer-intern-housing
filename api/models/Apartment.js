import mongoose from "mongoose";
const { Schema } = mongoose;

const ApartmentSchema = new mongoose.Schema( {
 
    name: {
        type: String,
        require: true
    },

    state: {
        type: String,
        require: true
    },

    city: {
        type: String,
        require: true,
    },

    address: {
        type: String,
        require: true
    },

    description: String,

    photos: [String],

    squareFeet: {
        type: Number,
        require: true
    },

    price: {
        type: Number,
        require: true
    },

    genderPreference: String
});

export default mongoose.model("Apartment", ApartmentSchema);