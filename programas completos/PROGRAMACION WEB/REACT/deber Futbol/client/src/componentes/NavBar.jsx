
import {AppBar,Toolbar,styled} from '@mui/material'
import { NavLink } from 'react-router-dom';

//styles
const Header= styled(AppBar)`background: #111111`;
const Tabs = styled(NavLink)`
font-size: 20px;
margin-left: 30px;
margin-right: 30px;
color: inherit;
text-decoration: none;
`;

//component NavBar
function NavBar (){
    return(
        <Header position='static'>
            <Toolbar>
                <Tabs to='/'>Equipos</Tabs>
                <Tabs to="/add">Añadir Equipo</Tabs>
            </Toolbar>
        </Header>
    );

};

export default NavBar;