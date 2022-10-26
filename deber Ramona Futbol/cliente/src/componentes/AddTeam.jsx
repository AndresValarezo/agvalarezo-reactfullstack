import { useState } from 'react';
import { FormControl, FormGroup, InputLabel, Input, Typography,styled, Button} from '@mui/material';
import {addTeam} from '../service/api.js'
import {useNavigate} from 'react-router-dom'

//styles
const Container= styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div { 
        margin-top: 20px;
    }
`;

const objectDefault = {
    name: "",
    username: "",
    email: "",
    phone: ""
};

const ButtonS= styled(Button)`
    margin-left: 25%;
    margin-right: 50%;

`;
const Title4= styled(Typography)`
    text-align: center;
`;
const InputCentered= styled(Input)`
    margin-left: 25%;
    margin-right: 25%;
`;
const InputLabelCentered= styled(InputLabel)`
    margin-left: 25%;
    margin-right: 25%;
`;

//class
function AddTeam() {
    const [team,setTeam]= useState(objectDefault);

    const navigate = useNavigate();

    function onValueChange(e){
        setTeam({...team,[e.target.name]: e.target.value});
    }
    async function addTeamInformation(){
        await addTeam(team);
        navigate('/');
    }

    return(
        <Container>
            <Title4 variant="h4">Nuevo Equipo</Title4>
            <FormControl>
                <InputLabelCentered>Nombre </InputLabelCentered>
                <InputCentered onChange={(e)=> onValueChange(e)} name= "name"/>
            </FormControl>
            <FormControl>
                <InputLabelCentered>Categoria </InputLabelCentered>
                <InputCentered onChange={(e)=> onValueChange(e)} name = "category"/>
            </FormControl>
            <FormControl>
                <InputLabelCentered>Escudo </InputLabelCentered>
                <InputCentered onChange={(e)=> onValueChange(e)} name= "shield"/>
            </FormControl>
            <FormControl>
                <InputLabelCentered>Colores Uniforme </InputLabelCentered>
                <InputCentered onChange={(e)=> onValueChange(e)} name= "uniformColors"/>
            </FormControl>
            <FormControl>
                <ButtonS variant= "contained" onClick={(e)=> addTeamInformation()}> Añadir Equipo </ButtonS>
            </FormControl>
        </Container>
    );

};

export default AddTeam;