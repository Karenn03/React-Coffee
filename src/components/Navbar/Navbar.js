import React from 'react';
import './Navbar.css';
import logo from '../../assets/img/logo.png'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="container-fluid p-0 nav-bar">
            <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3">
                <div className="left-links">
                    <div className="logo">
                        <Link to="/" className="navbar-brand px-lg-4 m-0"><img src={logo} alt="Coffee Tech Logo" /></Link>
                    </div>
                    <ul>
                        <li><Link to="/menu" className="nav-item nav-link active"> Menú </Link></li>
                        <li><Link to="/myOrders" className="nav-item nav-link"> Mis Pedidos </Link></li>
                        <li><Link to="/reserveTable" className="nav-item nav-link"> Reservar Mesa </Link></li>
                        <li><Link to="/shoppingCart" className="nav-item nav-link"> Carrito </Link></li>
                    </ul>
                </div>
                <div className="right-links">
                    <Link to="/signIn"> Inicia Sesión </Link>
                    <Link to="/signUp" className="btnRegistro"> Regístrate </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;