import User from '../Schemas/userSchema.js';
import jwt from 'jsonwebtoken'


export const addUser = async (request, response) => {
    const user = request.body;
    const newUser= new User(user);
    
    try{
        await newUser.save();
        response.status(201).json(newUser);
    }catch(error){
        response.status(409).json({message: error.message});
    }

};



export const getAllUsers = async (request, response) => {
    try {
        
        const users = await User.find({});
        response.status(200).json(users);
    } catch (error) {
        response.status(404).json({message: error.message});
    }

};

export const getUser = async (request, response) => {
    try {
       
        const user = await User.findById({userName: request.params.userName});
        response.status(200).json(user);
    } catch (error) {
        response.status(404).json({message: error.message});
    }

};


export const editUser = async (request,response)=>{
    let user = request.body;
    const editUser = new User(user);
    try {
        await User.updateOne({userName: request.params.userName},editUser, { upsert: true });
        response.status(200).json(editUser);
    } catch (error) {
        response.status(404).json({message: error.message});
    }
};

export const deleteUser = async (request, response) => {
    try {
        await User.deleteOne({userName: request.params.userName});
        response.status(200).json({message: 'Deleted successfully'});        
    } catch (error) {
        response.status(404).json({message: error.message});
    }    

};

export const validateLogin = async (request, response) => {
    const {userName, password} = request.body;
    const newUser= new User({userName, password});
    const token = jwt.sign(newUser.toJSON(),'farmaveci', {expiresIn: '3m'});
    try {

        const users = await User.find({});
        users.map((objectUser) => {
        
            if(objectUser.userName === newUser.userName && objectUser.password === newUser.password)
            {
                response.status(200).json({token});  
            }
            else{
                response.status(200).json();  
            }
        })

        
    } catch (error) {
        response.status(404).json({message: error.message});
    }

};

export const validateToken = async (request, response) => {
    const tokenUsed = request.body;
    const token = jwt.verify(tokenUsed,'farmaveci', 
    (err, user) => {
        if(err) {
            response.status(403).json({message: "No authorized"});
        } else{
            response.status(200).json({message: "authorized"}, user);
        }
    })
   
};