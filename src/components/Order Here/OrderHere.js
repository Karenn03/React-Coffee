import React from 'react';
import './OrderHere.css';
import cafePideAqui from '../../assets/img/cafe-pide-aqui.png'; 

const OrderHere = () => {
    return (    
        <div className="pide-aqui">
            <div className="vertical-line" />
            <h2>Pide Aquí</h2>
            <div className="order-container">
                <div className="order-option left">
                    <h3>Domicilio</h3>
                    <p>
                    Disfruta de tu café favorito sin salir de casa. Haz tu pedido a domicilio y nosotros nos encargamos de llevarlo hasta tu puerta en el
                    menor tiempo posible. Selecciona tus bebidas y bocadillos favoritos, y relájate mientras nosotros hacemos el resto.
                    </p>
                    <button>Pide a domicilio</button>
                </div>
                <img src={cafePideAqui} alt="Coffee Image" className="coffee-image" />
                <div className="order-option right">
                    <h3>Para retirar</h3>
                    <p>
                    Haz tu pedido en línea y retíralo en la cafetería cuando te sea más conveniente. Evita las filas y asegura tu bebida favorita lista para
                    llevar. Perfecto para cuando estás en movimiento pero no quieres renunciar a tu café preferido.
                    </p>
                    <button>Pide para retirar</button>
                </div>
            </div>
        </div>
    );
};

export default OrderHere;