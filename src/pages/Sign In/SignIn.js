import React from 'react';
import './SignIn.css';
import logo from '../../assets/img/logo.png'; 

const SignIn = () => {
    return (
        <section className="registration-section">
            <div className="form-container">
                <div className="logo-container">
                    <img src={logo} alt="Logo" />
                </div>
                <h2>¿No tienes una cuenta? <a href="registro.html">Regístrate</a></h2>
                <form className="registration-form">
                    <div className="form-group">
                        <i className="fa fa-envelope" />
                        <input type="email" id="email" placeholder="Correo Electrónico" />
                    </div>
                    <div className="form-group">
                        <i className="fa fa-lock" />
                        <input type="password" id="password" placeholder="Contraseña" />
                    </div>
                    <a href="restablecer-contraseña.html" className="forgot-password">¿Olvidaste la contraseña?</a>
                    <button type="submit" className="register-btn">Inicia Sesión</button>
                </form>
                <div className="social-login">
                    <p>O conéctate con</p>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook" /></a>
                        <a href="#"><i className="fab fa-google" /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};
        
export default SignIn;