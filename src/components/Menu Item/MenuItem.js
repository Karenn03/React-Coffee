import React from 'react';
import './MenuItem.css';
import { Link } from 'react-router-dom';

const MenuItem = ({ title, imageSrc, imageAlt, detailsLink, className, onAddToCart, price }) => {
    return (
        <div className={className}>
            <h2>{title}</h2>
            <img src={imageSrc} alt={imageAlt} />
            <div className="buttons">
                <button className="btn-cart" onClick={() => onAddToCart({ title, image: imageSrc, price })}>
                    <i className="fa fa-shopping-cart"></i>
                </button>
                <Link to={detailsLink} className="btn-details">Detalles</Link>
                <button className="btn-heart"> <i className="fa fa-heart"></i> </button>
            </div>
        </div>
    );
};

export default MenuItem;