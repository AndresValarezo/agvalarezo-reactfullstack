import { useEffect, useState } from 'react';
import {Table, TableHead, TableBody, TableRow, TableCell,styled, Typography} from '@mui/material'
import {getTeams} from '../service/api.js';

//styles
const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px auto 0 auto;

`;

const StyleTableRowHead = styled(TableRow)`   
background: #000000;
& > th {
    text-align: center;
    color: #fff;
    font-size: 20px;
}
`
const StyleTableRowBody = styled(TableRow)`   
& > td {
    font-size: 15px;
    text-align: center;
}
`
const Title4= styled(Typography)`
    text-align: center;
    margin-top: 30px;
`;


//class
function AllTeams () {

    const [teams, setTeams]= useState([]);

    useEffect(()=>{
        getAllTeams();
    },[]);

    const getAllTeams = async ()=>{
       let response= await getTeams();
       setTeams(response.data);
    };

    return(
        <div>
            <Title4 variant="h4">Equipos Registrados</Title4>
            <StyledTable>
                <TableHead>
                    <StyleTableRowHead>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Categoría</TableCell>
                        <TableCell>Primer Color</TableCell>
                        <TableCell>Segundo Color</TableCell>
                        <TableCell>Sede</TableCell>
                        <TableCell>Director Técnico</TableCell>
                        <TableCell>Presidente</TableCell>
                        <TableCell>Número de Trabajadores</TableCell>
                        <TableCell>Número de Jugadores</TableCell>
                    </StyleTableRowHead>
                </TableHead> 
                <TableBody>
                    {
                        teams.map(team =>(
                            <StyleTableRowBody key ={team._id}>
                                <TableCell>{team.name}</TableCell>
                                <TableCell>{team.category}</TableCell>
                                <TableCell>{team.firstColor}</TableCell>
                                <TableCell>{team.secondColor}</TableCell>
                                <TableCell>{team.campus}</TableCell>
                                <TableCell>{team.technicalDirector}</TableCell>
                                <TableCell>{team.president}</TableCell>
                                <TableCell>{team.workerNumber}</TableCell>
                                <TableCell>{team.playerNumber}</TableCell>
                            </StyleTableRowBody>
                        ))
                    }
                
                </TableBody>  
            </StyledTable>
            
        </div>
    );
};


export default AllTeams;
