const mongoose = require('mongoose');
const database= "productsdb";

const Connection = async function (username, password){
    const URL= "mongodb+srv://"+username+":"+password+"@cluster0.yxwn5.mongodb.net/"+database+"?retryWrites=true&w=majority";
    try{
        await mongoose.connect(URL, {useUnifiedTopology:true, useNewUrlParser:true, });
        console.log("Connected to MongoDBAtlas successfully");
    }catch(error){
        console.log("Error with connect to the MongoDBAtlas: " + error);
    };

}

module.exports = Connection;
