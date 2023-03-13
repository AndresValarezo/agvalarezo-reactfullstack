import { Fragment } from "react";
import { Container, styled, Typography } from "@mui/material";
import NavBar from './NavBar';

import "./css/adminUser.css";

const ContainerS = styled(Container)`
    margin-bottom: 1%;
    color: white;
    display: grid;
`;

const Title4 = styled(Typography)`
    margin-top:5%;
    margin-bottom:3%;
    text-align: center;
`;

function AdminUserL() {
    return (
        <Fragment>
            <NavBar />
            <ContainerS>
            <Title4 variant="h3">Seleccione como Iniciar Sesion</Title4>
                <button className="button button2"><img src="./img/image.jpg" width={"100%"} height="100px" />ADMINISTRADOR</button>
                <button className="button button2"><img src="./img/image.jpg" width={"100%"} height="100px" />USUARIO</button>
            </ContainerS>
        </Fragment>
    );

};

export default AdminUserL;