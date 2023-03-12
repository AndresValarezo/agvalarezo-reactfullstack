import mongoose from "mongoose";
const database= "tasksdb";

async function Conection (username: String, password: String){
    const URL= "mongodb+srv://"+username+":"+password+"@cluster0.yxwn5.mongodb.net/"+database+"?retryWrites=true&w=majority";
    try{
        await mongoose.connect(URL);
        console.log("Connected to MongoDBAtlas successfully");
    }catch(error){
        console.log("Error with connect to the MongoDBAtlas: " + error);
    };

}

export default Conection;