import React from 'react';
import './ResetPassword.css';
import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
    return (
        <section className="registration-section">
            <div className="form-container">
                <div className="logo-container">
                    <img src={logo} alt="Logo" />
                </div>
                <h2>¿Olvidaste tu contraseña?</h2>
                <h4>Ingresa tu correo electrónico para <br /> restablecer tu contraseña</h4>
                <form className="registration-form">
                    <div className="form-group">
                        <i className="fa fa-envelope" />
                        <input type="email" id="email" placeholder="Correo Electrónico" />
                    </div>
                    <button type="submit" className="register-btn">Restablecer Contraseña</button>
                    <Link to="/signIn" className="sign-in">Inicia Sesión</Link>
                </form>
            </div>
        </section>
    );
};

export default ResetPassword;