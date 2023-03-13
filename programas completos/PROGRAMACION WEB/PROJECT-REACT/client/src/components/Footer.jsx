import '../css/footer.css';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../images/cruzar.png';
import { FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer-distributed">

            <div className="footer-left">

                <img src={logo} alt="logo" className='imgL'></img><h3>Farma<span>Veci</span></h3>

                <p className="footer-links">
                    <a href="/all" className="link-1">Inicio</a>

                    <a href="/all">Tabla de Medicinas</a>

                    <a href="/add">Agregar Medicina</a>

                    <a href="/findC">Buscar Medicinas</a>

                    <a href="/page">Sobre Nosotros</a>

                </p>

                <p className="footer-company-name">FarmaVeci © 2022</p>
            </div>

            <div className="footer-center">
                <p>
                
                <span>Contactos</span>
                <br></br>
                <span>Telefono</span>
                +593 95 979 7357
                <span>Email</span>
                farmaveci@gmail.com
                </p>
            </div>
            <div className="footer-right">

                <p className="footer-company-about">
                    <span>Sobre Farmaveci</span>
                    Farmaveci una botica que se ha posicionado en los
                    sectores rurales de la ciudad de Quito en
                    la preservación de la salud de sus vecinos.
                </p>

                <div className="footer-icons">

                    <a href="https://github.com/Francisco-Suntaxi/Project-AdvancedWeb"><FaGithub></FaGithub></a>

                </div>

            </div>

        </footer>
    );

};

export default Footer;