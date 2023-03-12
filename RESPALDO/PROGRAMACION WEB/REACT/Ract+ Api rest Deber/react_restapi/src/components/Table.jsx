import React from 'react';
import '../index.css';
import {Box} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';


const Table= (props)=>{
    const countries = props.countries;

console.log(countries);

const columns =[
    {field: 'country', headerName: 'country', width: 200},
    {field: 'domains', headerName: 'Domain', width: 200},
    {field: 'name', headerName: 'Name', width: 200},
    {field: 'webpages', headerName: 'Web Page', width: 200},
    {field: 'alphaTwoCode', headerName: 'Code', width: 200},
];

return(
    <Box sx={{
        width: '60%',
        marginLeft: '19%',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        paddingLeft: '20px',
        paddingRight: '20px',
        background: '#fff',
        borderRadius: '15px',
        boxShadow: '1px 1px 20px #333',
        }}
    >

        <h1> List of Universities</h1>

        <div style={{height: 400, width: '100%'}}>
            <DataGrid
                rows={
                    countries.map(item =>(
                        {id: Math.random() * (1000000-1)+1,
                        country: item.country,
                        domains: item.domains,
                        name: item.name,
                        webpages: item.web_pages,
                        alphaTwoCode: item.alpha_two_code,
                        }
                        ))
                }
                columns= {columns}
            >
                
            </DataGrid>

        </div>
    </Box>

)
};

export default Table;