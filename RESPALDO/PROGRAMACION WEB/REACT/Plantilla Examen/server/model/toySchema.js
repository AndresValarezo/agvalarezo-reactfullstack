import mongoose from "mongoose";

const toySchema =mongoose.Schema({
    id: Number,
    name: String,
    description: String,
    elaborationDate: String,
    avaliable: Boolean,
});

const collection= "toy";
const Toy =mongoose.model(collection, toySchema);

export default Toy;