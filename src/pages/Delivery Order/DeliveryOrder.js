import React from 'react';
import './DeliveryOrder.css';

const DeliveryOrder = () => {
    return (
        <div className="delivery-order">
            <h2>Pide a Domicilio</h2>
            <form>
                <div>
                    <label>Dirección de Entrega:</label>
                    <input type="text" placeholder="Ingrese su dirección" />
                </div>
                <div>
                    <label>Seleccione los productos:</label>
                    <select>
                        <option>Producto 1</option>
                        <option>Producto 2</option>
                        <option>Producto 3</option>
                    </select>
                </div>
                <button type="submit">Confirmar Pedido</button>
            </form>
        </div>
    );
};

export default DeliveryOrder;