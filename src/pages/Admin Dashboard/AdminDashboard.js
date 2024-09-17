import React, { useState } from 'react';
import './AdminDashboard.css';
import Navbar from '../../components/Navbar/Navbar';
import axios from '../../config/axiosConfig';

const AdminDashboard = () => {
    // Estado para la sección activa
    const [activeSection, setActiveSection] = useState('promociones');
    
    // Estado del formulario
    const [promotionData, setPromotionData] = useState({
        nombrePromo: '',
        descripcionPromo: '',
        fechaInicio: '',
        fechaFinal: '',
        tipoDescuento: 'Descuento_por_Cantidad',
        valorDescuento: 0,
        estado: 'activa'
    });

    // Función para cambiar la sección activa
    const handleSectionChange = (sectionId) => {
        setActiveSection(sectionId);
    };

    // Función para manejar cambios en los campos del formulario
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPromotionData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

   // Función para enviar el formulario
   const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/promociones/create', promotionData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.status === 200) {
                alert('Promoción creada exitosamente');
            } else {
                alert('Error al crear promoción');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error al crear promoción');
        }
    };

    return (
        <>
            <Navbar />
            <div className="dashboard-container">
                <aside className="sidebar">
                    <ul className="menu">
                        <li><a href="#" className={`menu-item ${activeSection === 'promociones' ? 'active' : ''}`} onClick={() => handleSectionChange('promociones')}><i className="fas fa-tags" /> Promociones</a></li>
                        <li><a href="#" className={`menu-item ${activeSection === 'roles' ? 'active' : ''}`} onClick={() => handleSectionChange('roles')}><i className="fas fa-user-shield" /> Roles</a></li>
                        <li><a href="#" className={`menu-item ${activeSection === 'productos' ? 'active' : ''}`} onClick={() => handleSectionChange('productos')}><i className="fas fa-coffee" /> Productos</a></li>
                        <li><a href="#" className={`menu-item ${activeSection === 'tipos-productos' ? 'active' : ''}`} onClick={() => handleSectionChange('tipos-productos')}><i className="fas fa-boxes" /> Tipos de Productos</a></li>
                        <li><a href="#" className={`menu-item ${activeSection === 'mesas' ? 'active' : ''}`} onClick={() => handleSectionChange('mesas')}><i className="fas fa-table" /> Mesas</a></li>
                    </ul>
                </aside>
                <main className="main-content">
                    {/* Promociones */}
                    <section id="promociones" className={`dashboard-section ${activeSection === 'promociones' ? '' : 'hidden'}`}>
                        <h2>Crear Promociones</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="nombrePromo">Nombre de la Promoción:</label>
                                <input
                                    type="text"
                                    id="nombrePromo" 
                                    name="nombrePromo" 
                                    value={promotionData.nombrePromo} 
                                    onChange={handleInputChange} 
                                    required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="descripcionPromo">Descripción:</label>
                                <textarea
                                    id="descripcionPromo" 
                                    name="descripcionPromo" 
                                    value={promotionData.descripcionPromo} 
                                    onChange={handleInputChange} 
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="fechaInicio">Fecha de Inicio:</label>
                                <input
                                    type="datetime-local" 
                                    id="fechaInicio" 
                                    name="fechaInicio" 
                                    value={promotionData.fechaInicio} 
                                    onChange={handleInputChange} 
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="fechaFinal">Fecha Final:</label>
                                <input
                                    type="datetime-local" 
                                    id="fechaFinal" 
                                    name="fechaFinal" 
                                    value={promotionData.fechaFinal} 
                                    onChange={handleInputChange} 
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="tipoDescuento">Tipo de Descuento:</label>
                                <select
                                    id="tipoDescuento" 
                                    name="tipoDescuento" 
                                    value={promotionData.tipoDescuento} 
                                    onChange={handleInputChange} 
                                    required
                                >
                                    <option value="porCantidad">Descuento por Cantidad</option>
                                    <option value="porTemporada">Descuento por Temporada</option>
                                    <option value="porFidelidad">Descuento por Fidelidad</option>
                                    <option value="deLanzamiento">Descuento de Lanzamiento</option>
                                    <option value="porCompraMínima">Descuento por Compra Mínima</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="valorDescuento">Valor del Descuento:</label>
                                <input
                                    type="number" 
                                    id="valorDescuento" 
                                    name="valorDescuento" 
                                    value={promotionData.valorDescuento} 
                                    onChange={handleInputChange} 
                                    step="0.01" 
                                    min="0" 
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="estado">Estado:</label>
                                <select
                                    id="estado" 
                                    name="estado" 
                                    value={promotionData.estado} 
                                    onChange={handleInputChange} 
                                    required
                                >
                                    <option value="activa">Activa</option>
                                    <option value="inactiva">Inactiva</option>
                                    <option value="programada">Programada</option>
                                    <option value="suspendida">Suspendida</option>
                                </select>
                            </div>
                            <button
                                type="submit" className="btn-submit">Crear Promoción</button>
                        </form>
                    </section>
                    {/* Roles */}
                    <section
                    id="roles" className={`dashboard-section ${activeSection === 'roles' ? '' : 'hidden'}`}>
                        <h2>Crear Roles</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="nombre-rol">Nombre del Rol:</label>
                                <input
                                    type="text"
                                    id="nombre-rol" name="nombre-rol" required />
                            </div>
                            <button
                                type="submit" className="btn-submit">Crear Rol</button>
                        </form>
                    </section>
                    {/* Productos */}
                    <section
                    id="productos" className={`dashboard-section ${activeSection === 'productos' ? '' : 'hidden'}`}>
                        <h2>Crear Productos</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="nombre-producto">Nombre del Producto:</label>
                                <input
                                    type="text"
                                    id="nombre-producto" name="nombre-producto" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="descripcion-producto">Descripción:</label>
                                <input
                                    type="text"
                                    id="descripcion-producto" name="descripcion-producto" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="precio">Precio:</label>
                                <input
                                    type="number"
                                    id="precio" name="precio" step="0.01" min={0} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="tipo-producto">Tipo de Producto:</label>
                                <select
                                id="tipo-producto" name="tipo-producto" required>
                                    <option value="bebidasCalientes">Bebidas Calientes</option>
                                    <option value="bebidasFrias">Bebidas Frías</option>
                                    <option value="panaderiaPasteleria">Panadería y Pastelería</option>
                                    <option value="desayunosBrunch">Desayunos y Brunch</option>
                                </select>
                            </div>
                            <button
                                type="submit" className="btn-submit">Crear Producto</button>
                        </form>
                    </section>
                    {/* Tipos de Productos */}
                    <section
                    id="tipos-productos" className={`dashboard-section ${activeSection === 'tipos-productos' ? '' : 'hidden'}`}>
                        <h2>Crear Tipos de Productos</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="nombre-tipo-producto">Nombre del Tipo de Producto:</label>
                                <input
                                    type="text"
                                    id="nombre-tipo-producto" name="nombre-tipo-producto" required />
                            </div>
                            <button
                                type="submit" className="btn-submit">Crear Tipo de Producto</button>
                        </form>
                    </section>
                    {/* Mesas */}
                    <section
                    id="mesas" className={`dashboard-section ${activeSection === 'mesas' ? '' : 'hidden'}`}>
                        <h2>Crear Mesas</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="capacidad-mesa">Capacidad:</label>
                                <input
                                    type="number"
                                    id="capacidad-mesa" name="capacidad-mesa" required />
                            </div>
                            {/*
                            <div className="form-group">
                                <label htmlFor="estado-mesa">Estado:</label>
                                <select
                                id="estado-mesa" name="estado-mesa" required>
                                    <option value="disponible">Disponible</option>
                                    <option value="ocupada">Ocupada</option>
                                    <option value="reservada">Reservada</option>
                                    <option value="mantenimiento">En Mantenimiento</option>
                                </select>
                            </div>
                            */}
                            <button
                                type="submit" className="btn-submit">Crear Mesa</button>
                        </form>
                    </section>
                </main>
            </div>
        </>
    );
};

export default AdminDashboard;