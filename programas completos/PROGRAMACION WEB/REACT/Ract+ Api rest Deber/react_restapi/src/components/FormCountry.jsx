import React from "react";
import '../index.css';
import {Box,TextField} from '@mui/material';

const FormCountry=(props)=>{
    const {formCountry,setFormCountry} = props;
    const handleChange = (event)=>{
        const{name,value}= event.target;
        setFormCountry({...formCountry,[name]:value});
    };
/*
    const handleSumbit = (e)=>{
        e.preventDefault();
    };
*/
    return(
        <form>
        <Box
             sx={{
                    width: 300,
                    marginLeft: '40%',
                    height: 'auto',
                    '&:hover': {
                    opacity: [0.9, 0.8, 0.7],
                    },
                }}
        >
            <TextField fullWidth
                name="country"
                id="country"
                value={formCountry.country}
                onChange={handleChange}
                placeholder="Search by Country"
                label="Country"
            >

            </TextField>
        </Box>
        </form>
    )
}

export default FormCountry;

