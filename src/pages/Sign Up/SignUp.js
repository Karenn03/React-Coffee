import React, { useState } from 'react';
import './SignUp.css';
import logo from '../../assets/img/logo.png'; 

const SignUp = () => {
    // Estados para almacenar los valores de los inputs
    const [formData, setFormData] = useState({
        documento: '',
        nombres: '',
        apellidos: '',
        correoElectronico: '',
        contraseña: '',
        confirmPassword: '',
        telefono: '',
        direccion: '',
    });

    // Estado para almacenar los mensajes de error
    const [errorMessage, setErrorMessage] = useState('');

    // Manejar cambios en los inputs
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    // Manejar envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateRegistrationForm()) {
            return;
        }
        console.log('Formulario enviado', formData);
    };

    // Validación del formulario
    const validateRegistrationForm = () => {
        const { documento, nombres, apellidos, correoElectronico, contraseña, confirmPassword, telefono, direccion } = formData;
        
        if (documento.trim() === '') {
            showToast('El campo de documento es obligatorio');
            return false;
        }
        if (nombres.trim() === '') {
            showToast('El campo de nombres es obligatorio');
            return false;
        }
        if (apellidos.trim() === '') {
            showToast('El campo de apellidos es obligatorio');
            return false;
        }    
        if (correoElectronico.trim() === '') {
            showToast('El campo de correo electrónico es obligatorio');
            return false;
        }
        if (!validateEmail(correoElectronico)) {
            showToast('Ingrese un correo electrónico válido');
            return false;
        }
        if (contraseña === '') {
            showToast('El campo de contraseña es obligatorio');
            return false;
        }
        if (!isPasswordValid(contraseña)) {
            showToast('La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número');
            return false;
        }
        if (confirmPassword === '') {
            showToast('El campo de confirmación de contraseña es obligatorio');
            return false;
        }
        if (contraseña !== confirmPassword) {
            showToast('Las contraseñas no coinciden');
            return false;
        }
        if (telefono.trim() === '') {
            showToast('El campo de teléfono es obligatorio');
            return false;
        }
        if (!validatePhone(telefono)) {
            showToast('Ingrese un número de teléfono válido');
            return false;
        }
        if (direccion.trim() === '') {
            showToast('El campo de dirección es obligatorio');
            return false;
        }
        return true;
    };

    const validateEmail = (correoElectronico) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(correoElectronico);
    };

    const isPasswordValid = (contraseña) => {
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return passwordPattern.test(contraseña);
    };

    const validatePhone = (telefono) => {
        const phonePattern = /^[0-9]{20}$/; 
        return phonePattern.test(telefono);
    };

    const showToast = (message) => {
        setErrorMessage(message);
        setTimeout(() => setErrorMessage(''), 3000);
    };

    return (
        <section className="registration-section">
            <div className="form-container">
                <div className="logo-container">
                    <img src={logo} alt="Logo" />
                </div>
                <h2>¿Ya tienes una cuenta? <a href="inicio-sesion.html">Inicia sesión</a></h2>
                <form className="registration-form" id="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <i className="fa fa-id-card" />
                        <input type="text" id="documento" placeholder="Documento" value={formData.documento} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <i className="fa fa-user-pen" />
                        <input type="text" id="nombres" placeholder="Nombres" value={formData.nombres} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <i className="fa fa-user-large" />
                        <input type="text" id="apellidos" placeholder="Apellidos" value={formData.apellidos} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <i className="fa fa-envelope" />
                        <input type="email" id="correoElectronico" placeholder="Correo Electrónico" value={formData.correoElectronico} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <i className="fa fa-lock" />
                        <input type="password" id="contraseña" placeholder="Contraseña" value={formData.contraseña} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <i className="fa fa-lock" />
                        <input type="password" id="confirmPassword" placeholder="Confirmar Contraseña" value={formData.confirmPassword} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <i className="fa fa-phone" />
                        <input type="tel" id="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <i className="fa fa-location-dot" />
                        <input type="text" id="direccion" placeholder="Dirección" value={formData.direccion} onChange={handleInputChange} />
                    </div>
                    <button type="submit" className="register-btn">Regístrate</button>
                </form>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
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
        
export default SignUp;