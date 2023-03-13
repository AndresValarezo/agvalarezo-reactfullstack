import { useState } from 'react';
import { FormControl, FormGroup, InputLabel, Input, Typography,styled, Button,Alert} from '@mui/material';
import {addTeam} from '../service/api.js'
import {useNavigate} from 'react-router-dom'
import '../css/styles.css'

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
    category: "",
    firstColor: "",
    secondColor: "",
    campus: "",
    technicalDirector: "",
    president: "",
    workerNumber: 0,
    playerNumber: 0
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

const AlertStyled = styled(Alert)`
    margin-top: 5%;
    border: red 2px solid;
    background-color: #FAB6B6;
    color: black;
`;

//class
function AddTeam() {
    const [team,setTeam]= useState(objectDefault);
    var [component, setComponent] = useState(true);

    const navigate = useNavigate();

    function onValueChange(e){
        setTeam({...team,[e.target.name]: e.target.value});
    }
    async function addTeamInformation(){
        if(team.playerNumber>=11 && team.playerNumber <=22)
        {
            await addTeam(team);
            navigate('/');
        }
        if (team.playerNumber===0 || team.playerNumber<11 || team.playerNumber>22){
            setComponent(false);
        }

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
                <InputLabelCentered>Primer Color </InputLabelCentered>
                <InputCentered onChange={(e)=> onValueChange(e)} name= "firstColor"/>
            </FormControl>
            <FormControl>
                <InputLabelCentered>Segundo Color </InputLabelCentered>
                <InputCentered onChange={(e)=> onValueChange(e)} name= "secondColor"/>
            </FormControl>
            <FormControl>
                <InputLabelCentered>Sede </InputLabelCentered>
                <InputCentered onChange={(e)=> onValueChange(e)} name= "campus"/>
            </FormControl>
            <FormControl>
                <InputLabelCentered>Nombre del Director Técnico </InputLabelCentered>
                <InputCentered onChange={(e)=> onValueChange(e)} name= "technicalDirector"/>
            </FormControl>
            <FormControl>
                <InputLabelCentered>Nombre del Presidente </InputLabelCentered>
                <InputCentered onChange={(e)=> onValueChange(e)} name= "president"/>
            </FormControl>
            <FormControl>
                <InputLabelCentered>Número de Trabajadores </InputLabelCentered>
                <InputCentered onChange={(e)=> onValueChange(e)} name= "workerNumber" type='Number'/>
            </FormControl>
            <FormControl>
                <InputLabelCentered>Número de Jugadores </InputLabelCentered>
                <InputCentered onChange={(e)=> onValueChange(e)} name= "playerNumber" type='Number'/>
            </FormControl>
            <div hidden={component} class="alert alert-danger">Numero de jugadores inválido</div>
            <FormControl>
                
                <ButtonS variant= "contained" onClick={()=> addTeamInformation()}> Añadir Equipo </ButtonS>
            </FormControl>
            
        </Container>

    );

};

export default AddTeam;