import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema( 
    {
        username: {
            type: String,
            require: true,
            unique: true
        },

        email: {
            type: String,
            require: true,
            unique: true
        },

        password: {
            type: String,
            require: true,
        },

        apartmentsOwned: [{ type: Schema.Types.ObjectId, ref: 'Apartment' }]
    },

    { timestamps: true }
);

export default mongoose.model("User", UserSchema);