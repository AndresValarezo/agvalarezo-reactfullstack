
import { AppBar, Toolbar, styled } from '@mui/material'
import { NavLink } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router-dom';


const Header = styled(AppBar)`background: #111111`;
const Tabs = styled(NavLink)`
font-size: 20px;
margin-right: 5%;
color: inherit;
text-decoration: none;

`;


function NavBar() {

    const clientId = "699170672538-d245qt3jsdj1libs1tgof8sstt4jdm6o.apps.googleusercontent.com";
    const navigate = useNavigate();


    const onSuccess = () => {
        console.log("Logout successful");
        navigate('/');
    }

    return (
        <Header position='static'>
            <Toolbar>
                <GoogleLogout
                    clientId={clientId}
                    render={renderProps => (
                        <Tabs to ="/"   onClick={renderProps.onClick}>Salir</Tabs>
                      )}
                    buttonText="Salir"
                    onLogoutSuccess={onSuccess}
                />
                <Tabs to="/all">Tabla de Medicinas</Tabs>
                <Tabs to="/add">Añadir Medicina</Tabs>
                <Tabs to="/findC">Buscar Medicina</Tabs>
            </Toolbar>
        </Header>
    );

};

export default NavBar;