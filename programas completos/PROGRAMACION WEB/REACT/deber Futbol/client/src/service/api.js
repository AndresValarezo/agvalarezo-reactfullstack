import axios from "axios"

const URL= "http://localhost:8000";

export const addTeam = async(team) => {

    try{
        return await axios.post(`${URL}/add`,team);              
    }catch(error){
        console.log("Error with calling addUser: " + error);
    }

};

export const getTeams= async () => {
    try{
    return await axios.get(`${URL}/all`);
    }catch(error){
        console.log("Error while calling getUsers: " + error);
    }
};
