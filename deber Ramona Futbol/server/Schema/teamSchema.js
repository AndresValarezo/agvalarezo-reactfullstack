import mongoose from "mongoose";

const teamSchema =mongoose.Schema({
    name: String,
    category: String,
    shield: String,
    uniformColors: String,
});

const collection= "team";
const Team =mongoose.model(collection, teamSchema);

export default Team;