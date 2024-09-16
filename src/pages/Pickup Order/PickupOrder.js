import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PickupOrder.css';

const PickupOrder = () => {
    const [branch, setBranch] = useState('');
    const [pickupTime, setPickupTime] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí se maneja el envío de los datos al backend
        console.log("Sucursal:", branch);
        console.log("Fecha y Hora de Retiro:", pickupTime);

        // Redirige al menú después de enviar el formulario
        navigate('/menu');
    };

    return (
        <div className="pickup-order">
        <h2>Pide para Retirar</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Seleccione una Sucursal:</label>
                <select value={branch} onChange={(e) => setBranch(e.target.value)} required>
                    <option value="">Seleccione</option>
                    <option value="Sucursal 1">Sucursal 1</option>
                    <option value="Sucursal 2">Sucursal 2</option>
                    <option value="Sucursal 3">Sucursal 3</option>
                </select>
            </div>
            <div>
                <label>Fecha y Hora de Retiro:</label>
                <input type="datetime-local" value={pickupTime} onChange={(e) => setPickupTime(e.target.value)} required />
            </div>
            <button type="submit">Continuar al Menú</button>
        </form>
        </div>
    );
};

export default PickupOrder;