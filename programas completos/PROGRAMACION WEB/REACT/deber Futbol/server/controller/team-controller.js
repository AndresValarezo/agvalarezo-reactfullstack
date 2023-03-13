import Team from '../Schema/teamSchema.js';

export const addTeam = async (request, response) => {
    const team = request.body;
    const newTeam= new Team(team);
    
    try{
        await newTeam.save();
        response.status(201).json(newTeam);
    }catch(error){
        response.status(409).json({message: error.message});
    }

};

export const getAllTeams = async (request, response) => {
    try {
        
        const teams = await Team.find({});
        response.status(200).json(teams);
    } catch (error) {
        response.status(404).json({message: error.message});
    }

};

