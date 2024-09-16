import React from 'react';
import { useCart } from '../../pages/Shopping Cart/CartContext'; // Asegúrate de que la ruta es correcta
import './ShoppingCart.css';
import Navbar from '../../components/Navbar/Navbar';

const ShoppingCart = () => {
    const { cart, removeFromCart } = useCart();

    // Agrupar productos por nombre y contar cantidades
    const groupedCartItems = cart.reduce((acc, item) => {
        const existingItem = acc.find(i => i.title === item.title);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            acc.push({ ...item, quantity: 1 });
        }
        return acc;
    }, []);

    // Calcular el total de la compra
    const totalAmount = groupedCartItems.reduce((sum, item) => sum + (parseFloat(item.price) || 0) * item.quantity, 0);

    return (
        <>
            <Navbar />
            <div className="shopping-cart-container">
                <div className="shopping-cart">
                    <h1>Carrito de Compras</h1>
                    {groupedCartItems.length === 0 ? (
                        <p className="empty-cart-message">Tu carrito está vacío</p>
                    ) : (
                        <ul>
                            {groupedCartItems.map((item, index) => (
                                <li key={index}>
                                    <img src={item.image} alt={item.title} />
                                    <div className="item-details">
                                        <span>{item.title}</span>
                                        <span>Cantidad: {item.quantity}</span>
                                        <button onClick={() => removeFromCart(item.title)}>Eliminar</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="cart-summary">
                    <h2>Total</h2>
                    <p>${totalAmount.toFixed(2)}</p>
                </div>
            </div>
        </>
    );
};

export default ShoppingCart;
