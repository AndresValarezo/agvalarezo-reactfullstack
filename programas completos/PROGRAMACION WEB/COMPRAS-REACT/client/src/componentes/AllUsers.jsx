import { useEffect, useState } from 'react';
import {Table, TableHead, TableBody, TableRow, TableCell,styled, Button} from '@mui/material'
import {getUsers,deleteUser} from '../service/api.js'
import { Link } from 'react-router-dom';

//styles
const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px auto 0 auto;

`;

const StyleTableRowHead = styled(TableRow)`   
background: #000000;
& > th {
    text-align: center;
    color: #fff;
    font-size: 20px;
}
`
const StyleTableRowBody = styled(TableRow)`   
& > td {
    font-size: 15px;
    text-align: center;
}
`


//class
function AllUsers () {

    const [users, setUsers]= useState([]);

    useEffect(()=>{
        getAllUsers();
    },[]);

    const getAllUsers = async ()=>{
       let response= await getUsers();
       setUsers(response.data);
    };
    const  deleteUserDetails = async (id)=>{
        await deleteUser(id);
        getAllUsers();
    };

    return(
        <div>
            <StyledTable>
                <TableHead>
                    <StyleTableRowHead>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell></TableCell>
                    </StyleTableRowHead>
                </TableHead> 
                <TableBody>
                    {
                        users.map(user =>(
                            <StyleTableRowBody key ={user._id}>
                                <TableCell>{user._id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.phone}</TableCell>
                                <TableCell>
                                    <Button variant = "contained" style= {{marginRight: 10}} component = {Link} to= {`/edit/${user._id}`}> Edit </Button>
                                    <Button variant = "contained" color = "secondary" onClick= {()=>deleteUserDetails(user._id)}> Delete </Button>
                                </TableCell>
                            </StyleTableRowBody>
                        ))
                    }
                
                </TableBody>  
            </StyledTable>
            
        </div>
    );
};


export default AllUsers;
