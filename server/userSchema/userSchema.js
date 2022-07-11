import mongoose from "mongoose";

const userSchema =mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: String,
});

const collection= "user";
const User =mongoose.model(collection, userSchema);

export default User;