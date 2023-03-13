
import Toy from '../model/toySchema.js';


export const addToy = async (request, response) => {
    const toy = request.body;
    const newToy= new Toy(toy);
    
    try{
        await newToy.save();
        response.status(201).json("New User created successfully -> " + JSON.stringify(newToy));
    }catch(error){
        response.status(409).json({message: error.message});
    }

};
