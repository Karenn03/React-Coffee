import React from 'react';
import './MenuHeader.css';

const MenuHeader = ({ title }) => {
    return (
        <>
        <header className="header">
            <h1>{title}</h1>
        </header>
        <br />
        </>
    );
};

export default MenuHeader;