const mongoose = require('mongoose');

const productSchema =mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    ubication:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    creationDate:{
        type: Date,
        default: Date.now()
    },
});

const collection= "product";
const Product =mongoose.model(collection, productSchema);

module.exports = Product;