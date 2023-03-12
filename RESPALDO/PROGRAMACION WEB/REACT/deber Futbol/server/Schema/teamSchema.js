import mongoose from "mongoose";

const teamSchema =mongoose.Schema({
    name: String,
    category: String,
    firstColor: String,
    secondColor: String,
    campus: String,
    technicalDirector: String,
    president: String,
    workerNumber: Number,
    playerNumber: Number,
});

const collection= "team";
const Team =mongoose.model(collection, teamSchema);

export default Team;