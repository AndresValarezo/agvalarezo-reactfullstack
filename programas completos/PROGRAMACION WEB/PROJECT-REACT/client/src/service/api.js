import axios from "axios"
const port= "3004";
const ip= "34.205.140.110";
const localhost= "localhost";
const URL= "http://"+localhost+":"+port+"/farmaveci";

export const addNewMedicine = async(medicine) => {

    try{
        return await axios.post(`${URL}/medicineIncomplete`,medicine);              
    }catch(error){
        console.log("Error with calling addNewMedicine: " + error);
    }

};

export const getMedicines= async () => {
    try{
    return await axios.get(`${URL}/all`);
    }catch(error){
        console.log("Error while calling getMedicines: " + error);
    }
};

export const getUsers= async () => {
    try{
    return await axios.get(`${URL}/users/all`);
    }catch(error){
        console.log("Error while calling getUsers: " + error);
    }
};

export const getMedicine= async (id) => {
    try {
        return await axios.get(`${URL}/${id}`);    
    } catch (error) {
        console.log("Error while calling getMedicine: " + error);
    }
};

export const editMedicine= async (medicine,id) => {
    try {
        return await axios.put(`${URL}/${id}`,medicine);    
    } catch (error) {
        console.log("Error while calling editMedicine: " + error);
    }
};

export const editQuantity= async (id) => {
    try {
        return await axios.put(`${URL}/quantity/${id}`);    
    } catch (error) {
        console.log("Error while calling editMedicine: " + error);
    }
};

export const deleteMedicine = async (id)=> {
    try {
        return await axios.delete(`${URL}/${id}`);
    } catch (error) {
        console.log("Error while calling deleteMedicine: " + error);
        
    }
};

export const getInfoMedicines= async () => {
    try{
    return await fetch(`${URL}/all`);
    }catch(error){
        console.log("Error while calling getAllMedicines: " + error);
    }
};

export const validateLogin = async (user) => {
    try{
        return await axios.post(`${URL}/login`,user);              
    }catch(error){
        console.log("Error with calling validateLogin: " + error);
    }
};

export const validateToken = async (token) => {
    try{
        return await axios.post(`${URL}/Token`,token);              
    }catch(error){
        console.log("Error with calling validateToken: " + error);
    }
};
