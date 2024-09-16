import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart(prevCart => {
            // Verifica si el producto ya está en el carrito
            const existingProduct = prevCart.find(cartItem => cartItem.title === item.title);
    
            if (existingProduct) {
                // Actualiza la cantidad si el producto ya está en el carrito
                return prevCart.map(cartItem =>
                    cartItem.title === item.title
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                // Añade el nuevo producto al carrito con cantidad inicial 1
                return [...prevCart, { ...item, quantity: 1 }];
            }
        });
    };
    
    const removeFromCart = (title) => {
        setCart(prevCart => prevCart.filter(item => item.title !== title));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);