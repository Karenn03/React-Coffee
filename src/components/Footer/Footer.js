import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-section">
                    <h2>COFFEE TECH</h2>
                    <h4>Sobre Nosotros</h4>
                    <ul>
                        <li><a href="#">Quienes somos</a></li>
                        <li><a href="#">Servicios</a></li>
                        <li><a href="#">Nuestras sedes</a></li>
                        <li><a href="#">Trabaja con Coffee Tech</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <br /> <br /> <br />
                    <h4>Soporte</h4>
                    <ul>
                        <li><a href="#">Ayuda y FAQs</a></li>
                        <li><a href="#">Soporte en línea</a></li>
                        <li><a href="#">+57 315 667 7315</a></li>
                        <li><a href="mailto:soporte@coffeetech.com">Soporte@coffeetech.com</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <br /> <br /> <br />
                    <h4>Legal</h4>
                    <ul>
                        <li><a href="#">Aviso legal</a></li>
                        <li><a href="#">Política de privacidad</a></li>
                        <li><a href="#">Política de cookies</a></li>
                        <li><a href="#">Política de calidad</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <br /> <br /> <br />
                    <h4>Redes Sociales</h4>
                    <ul className="social-media">
                        <li><a href="#"><i className="fa-brands fa-instagram" /> Instagram</a></li>
                        <li><a href="#"><i className="fa-brands fa-facebook" /> Facebook</a></li>
                        <li><a href="#"><i className="fa-brands fa-twitter" /> Twitter</a></li>
                        <li><a href="#"><i className="fa-brands fa-youtube" /> YouTube</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© Coffee Tech. Todos los derechos reservados</p>
            </div>
        </footer>
    );
};

export default Footer;        