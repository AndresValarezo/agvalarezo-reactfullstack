import Table from "./Table";
import FormCountry from "./FormCountry";
import {getCountry} from "../services/axios.js";
import React,{ useState } from "react";
import { useEffect } from "react";
import { Box } from "@mui/system";

const TableLayout = (props)=>{
    const [formCountry, setFormCountry] = useState({
        country: "",
    });
    const [countries, setCountries] = useState([]);
    console.log(formCountry,countries);
    useEffect(()=>{
        async function loadCountries(){
            const response = await getCountry(formCountry.country);
            if(response.status===200)
            {
                setCountries(response.data);

            }
        }
        loadCountries();
    },[formCountry]);

    return(
        <Box>
            <br></br><br></br>
            <FormCountry formCountry={formCountry} setFormCountry={setFormCountry}> </FormCountry>
            <br></br>
            <Table countries={countries}></Table>
        </Box>
    )
};
export default TableLayout;