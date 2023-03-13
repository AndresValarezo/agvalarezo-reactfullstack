import React from 'react';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography, Button, FormGroup, styled } from '@mui/material';
import { getMedicines, deleteMedicine, editQuantity} from '../service/api';
import { useState, useEffect, Fragment} from 'react';
import NavBar from './NavBar';
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
    margin-bottom: 5%;
    & > div { 
        margin-top: 5%;   
    }
`;

const Title4 = styled(Typography)`
    text-align: center;
`;

const TableCellStyled = styled(TableCell)`
    text-align: center;
    align-items: center;

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
    margin-top: 2%;

`;

const ButtonStyled = styled(Button)`
    margin-left: 10px;
    margin-right: 10px;
    
    min-width: 10%;

`;


export default function Orders() {

    const [medicines, setMedicines]= useState([]);

    useEffect(()=>{
        getAllMedicines();
    },[]);

    const getAllMedicines = async ()=>{
       let response= await getMedicines();
       setMedicines(response.data);
    };

    const  deleteMedicineDetails = async (id)=>{
        await deleteMedicine(id);
        getAllMedicines();
    };
    const  modifyQuantity  = async (id)=>{
        await editQuantity(id);
        getAllMedicines();
    };

    return (
        <Fragment>
            <NavBar />

            <ContainerS>
                <Title4 variant="h4">Medicamentos Registrados</Title4>
                
                <TableStyled size="small">
                    <TableHead>
                        <StyleTableRowHead>
                            <TableCellStyled>ID</TableCellStyled>
                            <TableCellStyled>Nombre</TableCellStyled>
                            <TableCellStyled>Categoría</TableCellStyled>
                            <TableCellStyled>Descripción</TableCellStyled>
                            <TableCellStyled>Cantidad</TableCellStyled>
                            <TableCellStyled>Precio</TableCellStyled>
                            <TableCellStyled>Fecha Elab.</TableCellStyled>
                            <TableCellStyled>Fecha Expir.</TableCellStyled>
                            <TableCellStyled align="right">Acciones</TableCellStyled>
                        </StyleTableRowHead>
                    </TableHead>
                    <TableBody>
                        {medicines.map((objectMedicine) => (
                            <TableRow key = {objectMedicine.id}>
                                <TableCellStyled>{objectMedicine.id}</TableCellStyled>
                                <TableCellStyled>{objectMedicine.name}</TableCellStyled>
                                <TableCellStyled>{objectMedicine.category}</TableCellStyled>
                                <TableCellStyled>{objectMedicine.description}</TableCellStyled>
                                <TableCellStyled>{objectMedicine.quantity}</TableCellStyled>
                                <TableCellStyled>{objectMedicine.price}</TableCellStyled>
                                <TableCellStyled>{objectMedicine.elabDate}</TableCellStyled>
                                <TableCellStyled>{objectMedicine.expDate}</TableCellStyled>
                                <TableCellStyled >
                                    <ButtonStyled variant='contained' onClick={()=>deleteMedicineDetails(objectMedicine.id)}>Borrar</ButtonStyled>
                                    <ButtonStyled variant='contained' style= {{marginRight: 10}} component = {Link} to= {`/edit/${objectMedicine.id}`}>Editar</ButtonStyled>
                                    <ButtonStyled variant='contained' onClick={()=>modifyQuantity(objectMedicine.id)}>Quitar unidad</ButtonStyled>                                
                                </TableCellStyled>
                            </TableRow>
                        ))}
                    </TableBody>
                </TableStyled>
            </ContainerS>
            <Footer/>
        </Fragment>
    );
}