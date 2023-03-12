import React, { Fragment } from 'react'
import { Box, Container, styled, FormGroup, Typography, FormControl, FormLabel, Input, Select, MenuItem, Button } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save';
import NavBar from './NavBar';
import { useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { addNewMedicine } from '../service/api';
import Footer from './Footer';

const ContainerS = styled(FormGroup)`
    width: 30%;
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
        margin-top: 3%;   
    }
    align-items: center;
`;
const ButtonStyled = styled(Button)`
    margin-top: 5%;
    margin-bottom: 5%;
`;
const SelectStyled = styled(Select)`
    width: 60%;
    height: 50%;
`;

const Title4 = styled(Typography)`   
    text-align: center;
    font-weight: bold;
`;

const LabelStyled = styled(FormLabel)`
    font-weight: bold;
    margin-top: 5%;

`;
const objectDefault = {
    id: 0,
    name: "",
    description: "",
    category: "",
    quantity: 0,
    price: "",
    elabDate: "",
    expDate: ""
};

export default function FormAddM() {

    const [medicine,setMedicine]= useState(objectDefault);

    const navigate = useNavigate();

    function onValueChange(e){
        setMedicine({...medicine,[e.target.name]: e.target.value});
    }
    async function addMedicineInformation(){
        await addNewMedicine(medicine);
        navigate('/all');
    }
    return (
        <Fragment>
            <NavBar />
            <ContainerS>
                <Box>
                    <Container>
                        <Title4 variant="h4">Agregar Medicina</Title4>
                        <FormControl>
                            <FormControl>
                                <LabelStyled className=''>Codigo: <Input onChange={(e) => onValueChange(e)} name='id'type='number'/></LabelStyled>

                            </FormControl>
                            <FormControl>
                                <LabelStyled >Medicina: <Input onChange={(e) => onValueChange(e)} name="name"  /></LabelStyled>

                            </FormControl>
                            <FormControl>
                                <LabelStyled >Descripción: <Input onChange={(e) => onValueChange(e)} name="description"  ></Input></LabelStyled>

                            </FormControl>
                            <FormControl>
                                <LabelStyled >Categoria: <SelectStyled onChange={(e) => onValueChange(e)} value={medicine.category} name='category'>
                                    <MenuItem value={'Analgésicos'}>Analgésicos</MenuItem>
                                    <MenuItem value={'Antiinflamatorios'}>Antiinflamatorios</MenuItem>
                                    <MenuItem value={'Mucolíticos'}>Mucolíticos</MenuItem>
                                    <MenuItem value={'Antiinfecciosos'}>Antiinfecciosos</MenuItem>
                                    <MenuItem value={'Antitusivos'}>Antitusivos</MenuItem>
                                    <MenuItem value={'Antiulcerosos'}>Antiulcerosos</MenuItem>
                                    <MenuItem value={'Antiácidos'}>Antiácidos</MenuItem>
                                    <MenuItem value={'Laxantes'}>Laxantes</MenuItem>
                                    <MenuItem value={'Antipiréticos'}>Antipiréticos</MenuItem>
                                    <MenuItem value={'Antialérgicos'}>Antialérgicos</MenuItem>
                                </SelectStyled> </LabelStyled>

                            </FormControl>
                            <FormControl>
                                <LabelStyled >Cantidad: <Input onChange={(e) => onValueChange(e)} name='quantity' type="number" ></Input></LabelStyled>

                            </FormControl>
                            <FormControl>
                                <LabelStyled className=''>Precio: <Input type='number' step="0.01" name='price'   onChange={(e) => onValueChange(e)}></Input> </LabelStyled>

                            </FormControl>
                            <FormControl>
                                <LabelStyled className=''>Fecha de elaboración: <Input onChange={(e) => onValueChange(e)} name="elabDate"  type="date" /></LabelStyled>

                            </FormControl>
                            <FormControl>
                                <LabelStyled className=''>Fecha de expiracion: <Input  onChange={(e) => onValueChange(e)}  name="expDate"  type="date" /> </LabelStyled>

                            </FormControl>
                            <FormControl>
                                <ButtonStyled variant="contained" color='primary' startIcon={<SaveIcon />} onClick={() => addMedicineInformation()}>Guardar</ButtonStyled>
                            </FormControl>

                        </FormControl>
                    </Container>
                </Box>
            </ContainerS>
            <Footer></Footer>
        </Fragment>

    )
}