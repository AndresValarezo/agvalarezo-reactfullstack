
import React, { Fragment } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FormGroup from '@mui/material/FormGroup';
import {Typography,FormLabel,Input,FormControl} from '@mui/material';
import NavBar from './NavBar';
import SearchMedicinesCategory from './SearchMedicinesCategory';
import { useState } from 'react';
import { getInfoMedicines } from '../service/api';
import Footer from './Footer';

const ContainerS = styled(FormGroup)`
    width: 75%;
    display: grid;
    justify-content: center;

    margin: 5% auto 0 auto;
    background-color: white;
    box-shadow:
       inset 0 -3em 3em rgba(0,0,0,0.1),
             0 0  0 2px rgb(255,255,255),
             0.3em 0.3em 1em rgba(0,0,0,0.3);
    margin-top: 5%;
    & > div { 
        margin-top: 1%;   
    }
`;

const Title4 = styled(Typography)`
    text-align: center;
`;

const StyledTableCell = styled(TableCell)`
    text-align: center;

`;
const StyleTableRowHead = styled(TableRow)`   
background: #000000;
& > th {
    text-align: center;
    color: #fff;
    font-size: 17px;
}
`
const TableStyled = styled(Table)`
    margin-top: 1%;

`;

const LabelStyled = styled(FormLabel)`
    font-weight: bold;
    margin-left: 10%;
    margin-top: 1%;

`;
const InputStyled = styled(Input)`
    margin-left: 10%;
    margin-right: 75%;
`;

export default function TableMedicines() {
    const [ users, setUsers ] = useState([]);
    const [ search, setSearch ] = useState("");

    const showData = async () => {
        const response = await getInfoMedicines();
        const data = await response.json();
        setUsers(data);

    }   
  
    const searcher = (e) => {
        setSearch(e.target.value); 
        showData();
    }
     
     const results = !search ? users : users.filter((data)=> data.name.toLowerCase().includes(search.toLocaleLowerCase()));
    

    return (
        <Fragment>
            <NavBar/>
        <ContainerS>
            <Title4 variant="h4">Buscar por Nombre</Title4>
            
                <FormControl >
                    <LabelStyled >Medicina: </LabelStyled>
                    <InputStyled value={search} onChange={searcher} type='text' name='nameMedicine' id='nameMedicine'></InputStyled>
                </FormControl>



            <TableContainer component={Paper}>
                <TableStyled aria-label="customized table">
                    <TableHead>
                        <StyleTableRowHead>
                            <StyledTableCell>Id </StyledTableCell>
                            <StyledTableCell align="right">Nombre</StyledTableCell>
                            <StyledTableCell align="right">Categoria</StyledTableCell>
                            <StyledTableCell align="right">Descripcion</StyledTableCell>
                            <StyledTableCell align="right">Precio</StyledTableCell>
                            <StyledTableCell align="right">Cantidad</StyledTableCell>
                            <StyledTableCell align="right">Fecha Elab.</StyledTableCell>
                            <StyledTableCell align="right">Fecha Exp.</StyledTableCell>

                        </StyleTableRowHead>
                    </TableHead>
                    <TableBody>
                        {results.map((result) => (
                            <TableRow key={result.name}>
                                <StyledTableCell component="th" scope="row">
                                    {result.id}
                                </StyledTableCell>
                                <StyledTableCell align="right">{result.name}</StyledTableCell>
                                <StyledTableCell align="right">{result.category}</StyledTableCell>
                                <StyledTableCell align="right">{result.description}</StyledTableCell>
                                <StyledTableCell align="right">{result.price}</StyledTableCell>
                                <StyledTableCell align="right">{result.quantity}</StyledTableCell>
                                <StyledTableCell align="right">{result.elabDate}</StyledTableCell>
                                <StyledTableCell align="right">{result.expDate}</StyledTableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </TableStyled>
            </TableContainer>
        </ContainerS>
        <SearchMedicinesCategory/>
        <Footer></Footer>
        </Fragment>

    );

}