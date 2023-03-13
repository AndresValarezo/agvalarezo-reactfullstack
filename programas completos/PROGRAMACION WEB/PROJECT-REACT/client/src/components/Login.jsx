import React, { Fragment } from 'react';
import Marquee from "react-fast-marquee";
import { FormGroup, Alert, FormControl, Input, InputLabel, styled, Typography, Button } from '@mui/material';
import logo from '../images/img1.jpg';
import '../css/styleLogin.css';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { validateLogin, validateToken } from '../service/api';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';



const ContainerS = styled(FormGroup)`
    width: 70%;
    display: grid;
    justify-content: center;
    grid-template-areas: "img InputCentered1"
                         "img InputCentered1"
                         "img Button";
    column-gap: 10%;
    margin: 5% auto 0 auto;
    background-color: white;
    margin-bottom: 10%;
    box-shadow:
       inset 0 -3em 3em rgba(0,0,0,0.1),
             0 0  0 2px rgb(255,255,255),
             0.3em 0.3em 1em rgba(0,0,0,0.3);
    margin-top: 10%;
    & > div { 
        margin-top: 5%;   
    }
`;
const InputCentered = styled(Input)`
    grid-area: InputCentered1;
 
`;
const InputLabelCentered = styled(InputLabel)`
 
`;
const ButtonLogIn = styled(Button)`
    grid-area: Button;
    max-width: 100%;
    height: auto;
    padding-bottom: 2%;
`;

const AlertStyled = styled(Alert)`
    margin-top: 5%;
    border: red 2px solid;
    background-color: #FAB6B6;
    color: black;
`;

export default function Login() {
    const clientId = "699170672538-d245qt3jsdj1libs1tgof8sstt4jdm6o.apps.googleusercontent.com";
    const [user, setUser] = useState([]);
    const [token, setToken] = useState([]);
    const navigate = useNavigate();
    var [component, setComponent] = useState(true);

    useEffect(() => {

        function start() {
          gapi.client.init({
            clientId: clientId,
            scope: ""
          });
    
        };
        gapi.load('client:auth2',start);
    
      });


    const getToken = async (user) => {
        let response = await validateLogin(user);
        setToken(response.data);
    };

    function onValueChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const validateUser = () => {
        getToken(user);

        if (token.length === 0 || token === undefined) {
            setComponent(false);
        }
        else {
            console.log(token);
            document.cookie = `token="${token}"; max-age="${60 * 3}; path=/; samesite=strict`;
            console.log(document.cookie);
            navigate('all');
        }
        validateToken(document.cookie);

    }

    const onSuccess = (res) =>{
        console.log("Login successful  Current User: ", res.profileObj);
        navigate('all');
    }

    const onFailure = (res) =>{
        console.log("Login failed", res);
    }

    return (
        <Fragment>
            <Marquee speed={70} gradientColor={[]}><Typography variant="h4">FARMAVECI</Typography></Marquee>
            <ContainerS>
                <img src={logo} alt="logo"></img>
                <FormControl>
                    <InputLabelCentered> Usuario: </InputLabelCentered>
                    <InputCentered onChange={(e) => onValueChange(e)} name="userName" />
                </FormControl>
                <FormControl>
                    <InputLabelCentered> Contraseña: </InputLabelCentered>
                    <InputCentered onChange={(e) => onValueChange(e)} name="password" type='password' />
                </FormControl>
                <FormControl>

                    <ButtonLogIn onClick={() => validateUser()} variant='contained'>
                        Iniciar Sesion
                    </ButtonLogIn>
                    <AlertStyled hidden={component} severity="error">Usuario y/o Contraseña Incorrectos</AlertStyled>
                    <div>
                    <br></br>
                    <GoogleLogin
                        clientId={clientId}
                        buttonText="Iniciar con Google"
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true}
                    />
                    </div>
                </FormControl>

            </ContainerS>

        </Fragment>

    );
};
