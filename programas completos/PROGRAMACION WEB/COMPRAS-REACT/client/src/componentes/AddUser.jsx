import { useState } from 'react';
import { FormControl, FormGroup, InputLabel, Input, Typography,styled, Button} from '@mui/material';
import {addUser} from '../service/api.js'
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
function AddUser() {
    const [user,setUser]= useState(objectDefault);

    const navigate = useNavigate();

    function onValueChange(e){
        setUser({...user,[e.target.name]: e.target.value});
    }
    async function addUserInformation(){
        await addUser(user);
        navigate('/all');
    }

    return(
        <Container>
            <Title4 variant="h4">New User</Title4>
            <FormControl>
                <InputLabelCentered>Name </InputLabelCentered>
                <InputCentered onChange={(e)=> onValueChange(e)} name= "name"/>
            </FormControl>
            <FormControl>
                <InputLabelCentered>Username </InputLabelCentered>
                <InputCentered onChange={(e)=> onValueChange(e)} name = "username"/>
            </FormControl>
            <FormControl>
                <InputLabelCentered>Email </InputLabelCentered>
                <InputCentered onChange={(e)=> onValueChange(e)} name= "email"/>
            </FormControl>
            <FormControl>
                <InputLabelCentered>Phone </InputLabelCentered>
                <InputCentered onChange={(e)=> onValueChange(e)} name= "phone"/>
            </FormControl>
            <FormControl>
                <ButtonS variant= "contained" onClick={(e)=> addUserInformation()}> Add User </ButtonS>
            </FormControl>
        </Container>
    );

};

export default AddUser;