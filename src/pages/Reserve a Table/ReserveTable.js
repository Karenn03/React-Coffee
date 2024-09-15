import React, { useState, useEffect } from 'react';
import './ReserveTable.css';
import Navbar from '../../components/Navbar/Navbar';

const mesas = [
    { id: 1, capacidad: 2 },
    { id: 2, capacidad: 4 },
    { id: 3, capacidad: 6 },
    { id: 4, capacidad: 8 },
    { id: 5, capacidad: 2 },
    { id: 6, capacidad: 4 },
    { id: 7, capacidad: 6 },
    { id: 8, capacidad: 8 },
    { id: 9, capacidad: 2 },
    { id: 10, capacidad: 4 },
    { id: 11, capacidad: 6 },
    { id: 12, capacidad: 8 },
    { id: 13, capacidad: 2 },
    { id: 14, capacidad: 4 },
];

const ReserveTable = () => {
    const [numPersonas, setNumPersonas] = useState(1);
    const [mesaSeleccionada, setMesaSeleccionada] = useState(null);
    const [mesasDisponibles, setMesasDisponibles] = useState([]);
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [requests, setRequests] = useState('');

    useEffect(() => {
        const availableTables = mesas.filter(mesa => mesa.capacidad >= numPersonas);
        setMesasDisponibles(availableTables);
    }, [numPersonas]);

    const handleMesaClick = (mesaId) => {
        setMesaSeleccionada(mesaId);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (numPersonas <= 0) {
            alert('Por favor, ingrese un número válido de personas.');
            return;
        }

        if (!mesaSeleccionada) {
            alert('Por favor, seleccione una mesa.');
            return;
        }

        const today = new Date();
        const selectedDate = new Date(fecha);

        if (selectedDate < today) {
            alert('La fecha seleccionada ya ha pasado. Por favor, elija una fecha válida.');
            return;
        }

        // Aquí puedes añadir la lógica para enviar el formulario
        alert(`Reserva confirmada para la mesa ${mesaSeleccionada}`);

        // Restablecer el estado del formulario
        setFecha('');
        setHora('');
        setNumPersonas(1);
        setRequests('');
        setMesaSeleccionada(null);
    };

    return (
        <>
            <Navbar />
            <section className="reservar-mesa-section">
                <div className="reservar-mesa-container">
                    <h1>Reservar Mesa</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="fecha">Fecha:</label>
                            <input type="date" id="fecha" name="fecha" value={fecha} onChange={(e) => setFecha(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="hora">Hora:</label>
                            <input type="time" id="hora" name="hora" value={hora} onChange={(e) => setHora(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="personas">Número de Personas:</label>
                            <input type="number" id="personas" name="personas" min={1} value={numPersonas} onChange={(e) => setNumPersonas(parseInt(e.target.value))} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mesa">Seleccione una Mesa:</label>
                            <div className="mesas-container">
                                {mesasDisponibles.map(mesa => (
                                    <div key={mesa.id} className={`mesa ${mesa.id === mesaSeleccionada ? 'selected' : ''}`} onClick={() => handleMesaClick(mesa.id)}>
                                        <span className="mesa-numero">{mesa.id}</span>
                                    </div>
                                ))}
                            </div>
                            <input type="hidden" id="mesa-seleccionada" name="mesa" value={mesaSeleccionada || ''} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="requests">Peticiones especiales:</label>
                            <textarea id="requests" name="requests" value={requests} onChange={(e) => setRequests(e.target.value)} />
                        </div>
                        <button type="submit" className="btn-reservar">Reservar</button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default ReserveTable;