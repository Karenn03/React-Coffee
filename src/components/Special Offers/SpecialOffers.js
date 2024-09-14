import React from 'react';
import './SpecialOffers.css';

const SpecialOffers = ({ offers }) => {
    return (
      <div className="ofertas-especiales">
        <div className="vertical-line" />
        <h2>OFERTAS ESPECIALES</h2>
        <h4>¡No te pierdas nuestras promociones!</h4>
        <div className="promotions">
          {offers.map((offer, index) => (
            <div className="promo-item" key={index}>
              <img src={offer.imagen} alt={offer.alt} />
              <div className="promo-content">
                <h3>{offer.oferta}</h3>
                <p>{offer.descripcion}</p>
                <button>Ver más</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default SpecialOffers;