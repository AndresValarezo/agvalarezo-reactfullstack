
import { Typography, Container, styled} from '@mui/material';
import Footer from './Footer';
import NavBar from './NavBar';
import "./css/home.css";
import Carrousel from './Carrousel';

const Title4 = styled(Typography)`
    margin-top:5%;
    margin-bottom:3%;
    text-align: center;
`;
const Title5 = styled(Typography)`
    margin-top:5%;
    text-align: left;
`;
const ContainerS = styled(Container)`
    margin-bottom: 1%;
    color: white;
    display: grid;
`;


function Home() {
    return (
        <div>
            <NavBar />
            <ContainerS>
                <Title4 variant="h3">Titulo</Title4>
                <Carrousel></Carrousel>
                <Title5 variant='h5'>Compra los mejores articulos a mejor precio</Title5>
                <button className="button button2">Comienza Ahora</button>
            </ContainerS>
            <Footer></Footer>
        </div>
    );

}

export default Home;