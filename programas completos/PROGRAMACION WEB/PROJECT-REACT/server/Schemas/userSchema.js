import mongoose from "mongoose";

const userSchema =mongoose.Schema({
    userName: String,
    password: String,
});

const collection= "user";
const User =mongoose.model(collection, userSchema);

export default User;