import React, { useState, useEffect } from 'react';
import './MyOrders.css';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';

const MyOrders = () => {
    // Estado para controlar el botón activo
    const [activeButton, setActiveButton] = useState('Todos');

    // Efecto para asegurarse de que el botón "Todos" esté activo por defecto al cargar la página
    useEffect(() => {
        setActiveButton('Todos');
    }, []);

    // Función para manejar el cambio de contenido
    const renderOrderHistory = () => {
        switch (activeButton) {
            case 'Preparando':
                return (
                    <div className="orders-message">
                        <p>Pedido en preparación...</p>
                    </div>
                );
            case 'Enviado':
                return (
                    <div className="orders-message">
                        <p>Tu pedido ha sido enviado.</p>
                    </div>
                );
            case 'Para recoger':
                return (
                    <div className="orders-message">
                        <p>Tu pedido está listo para recoger.</p>
                    </div>
                );
            case 'Entregado':
                return (
                    <div className="orders-message">
                        <p>Tu pedido ha sido entregado.</p>
                    </div>
                );
            default:
                return (
                    <div className="orders-message">
                        <i className="fas fa-shopping-bag"></i>
                        <p>¡Haz tu primera compra!</p>
                        <p>Aquí podrás ver tus compras y hacer el seguimiento de tus envíos.</p>
                        <Link to="/menu" className="btn-order-now">Compra ahora</Link>
                    </div>
                );
        }
    };

    return (
        <>
            <Navbar />
            <div className="filters-search-container">
                <div className="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" className={`btn btn-outline-primary ${activeButton === 'Todos' ? 'active' : ''}`} onClick={() => setActiveButton('Todos')}>Todos</button>
                    <button type="button" className={`btn btn-outline-primary ${activeButton === 'Preparando' ? 'active' : ''}`} onClick={() => setActiveButton('Preparando')}>Preparando</button>
                    <button type="button" className={`btn btn-outline-primary ${activeButton === 'Enviado' ? 'active' : ''}`} onClick={() => setActiveButton('Enviado')}>Enviado</button>
                    <button type="button" className={`btn btn-outline-primary ${activeButton === 'Para recoger' ? 'active' : ''}`} onClick={() => setActiveButton('Para recoger')}>Para recoger</button>
                    <button type="button" className={`btn btn-outline-primary ${activeButton === 'Entregado' ? 'active' : ''}`} onClick={() => setActiveButton('Entregado')}>Entregado</button>
                </div>
                <div className="search-bar">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Nombre del producto / ID del pedido" aria-label="Buscar" />
                        <span className="search-icon">
                            <i className="fa-solid fa-magnifying-glass" />
                        </span>
                    </form>
                </div>
            </div>

            <main className="order-history">
                {renderOrderHistory()}
            </main>
        </>
    );
};

export default MyOrders;