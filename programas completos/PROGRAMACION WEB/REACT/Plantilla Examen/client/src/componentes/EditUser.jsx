import { useState, useEffect } from 'react';
import { FormControl, FormGroup, InputLabel, Input, Typography,styled, Button} from '@mui/material';
import {editUser, getUser} from '../service/api.js'
import {useNavigate, useParams} from 'react-router-dom'


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
function EditUser() {
    const [user,setUser]= useState(objectDefault);

    const navigate = useNavigate();
    const {id}= useParams();

    useEffect(()=>{
        loadUserInformation();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const loadUserInformation = async ()=>{
        const response = await getUser(id);
        setUser(response.data);
    };

    function onValueChange(e){
        setUser({...user,[e.target.name]: e.target.value});
    }
    async function editUserInformation(){
        await editUser(user,id);
        navigate('/all');
    }

    return(
        <Container>
            <Title4 variant="h4">Edit User</Title4>
            <FormControl>
                <InputCentered disabled="disabled" onChange={(e)=> onValueChange(e)} name= "id" value ={"Id: "+user.id}/>
            </FormControl>
            <FormControl>
                <InputLabelCentered>Name </InputLabelCentered>
                <InputCentered onChange={(e)=> onValueChange(e)} name= "name" value ={user.name}/>
            </FormControl>
            <FormControl>
                <InputLabelCentered>Username </InputLabelCentered>
                <InputCentered onChange={(e)=> onValueChange(e)} name = "username" value={user.username}/>
            </FormControl>
            <FormControl>
                <InputLabelCentered>Email </InputLabelCentered>
                <InputCentered onChange={(e)=> onValueChange(e)} name= "email" value={user.email}/>
            </FormControl>
            <FormControl>
                <InputLabelCentered>Phone </InputLabelCentered>
                <InputCentered onChange={(e)=> onValueChange(e)} name= "phone" value={user.phone}/>
            </FormControl>
            <FormControl>
                <ButtonS variant= "contained" onClick={(e)=> editUserInformation()}> Edit User </ButtonS>
            </FormControl>
        </Container>
    );

};

export default EditUser;