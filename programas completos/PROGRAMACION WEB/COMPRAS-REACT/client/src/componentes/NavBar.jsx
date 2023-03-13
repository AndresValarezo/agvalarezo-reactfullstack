
import {AppBar,Toolbar,styled} from '@mui/material'
import { NavLink } from 'react-router-dom';

//styles
const Header= styled(AppBar)`background: #111111`;
const Tabs = styled(NavLink)`
font-size: 20px;
margin-right: 20px;
color: inherit;
text-decoration: none;
`;

const TabsInverted = styled(NavLink)`
font-size: 20px;
margin-left: 75%;
margin-right: 40px;
color: inherit;
text-decoration: none;
`;

//component NavBar
function NavBar (){
    return(
        <Header position='static'>
            <Toolbar>
                <Tabs to='/'>Home</Tabs>
                <TabsInverted to="/adminUserL">Iniciar Sesion</TabsInverted>
                <Tabs to="/adminUserR">Registrarse</Tabs>
            </Toolbar>
        </Header>
    );

};

export default NavBar;