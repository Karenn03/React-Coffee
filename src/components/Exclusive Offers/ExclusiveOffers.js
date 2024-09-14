import React from 'react';
import './ExclusiveOffers.css';


const ExclusiveOffers = () => {
    return (  
        <section className="subscription-section">
            <div className="ripped-edge-top" />
                <div className="subscription-overlay">
                    <h2>¡Recibe Ofertas Exclusivas!</h2>
                    <p>Suscríbete para recibir las mejores ofertas directamente en tu correo</p>
                    <form className="subscription-form">
                        <input type="email" placeholder="Ingresa tu correo electrónico" />
                        <button type="submit">Suscribirse</button>
                    </form>
                </div>
            <div className="ripped-edge-bottom" />
        </section>
    );
};
        
export default ExclusiveOffers;