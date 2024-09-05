import React from 'react';
import './Navbar.css';
import logo from '../../assets/img/logo.png'; 

const Navbar = () => {
  return (
    <div className="container-fluid p-0 nav-bar">
        <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3">
            <div className="left-links">
                <div className="logo">
                    <a href="index.html" className="navbar-brand px-lg-4 m-0">
                        <img src={logo} alt="Coffee Tech Logo" />
                    </a>
                </div>
                <ul>
                    <li>
                        <a href="menu.html" className="nav-item nav-link active">
                            {" "}
                            Menú{" "}
                        </a>
                    </li>
                    <li>
                        <a href="mis-pedidos.html" className="nav-item nav-link">
                            {" "}
                            Mis Pedidos{" "}
                        </a>
                    </li>
                    <li>
                        <a href="reservar-mesa.html" className="nav-item nav-link">
                            {" "}
                            Reservar Mesa{" "}
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-item nav-link">
                            {" "}
                            Carrito{" "}
                        </a>
                    </li>
                </ul>
            </div>
            <div className="right-links">
                <a href="inicio-sesion.html"> Inicia Sesión </a>
                <a href="registro.html" className="btnRegistro"> Regístrate </a>
            </div>
        </nav>
    </div>

  );
};

export default Navbar;