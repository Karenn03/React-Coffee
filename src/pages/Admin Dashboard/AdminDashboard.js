import React, { useState } from 'react';
import './AdminDashboard.css';
import Navbar from '../../components/Navbar/Navbar';

const AdminDashboard = () => {
    // Estado para la sección activa
    const [activeSection, setActiveSection] = useState('promociones');

    // Función para cambiar la sección activa
    const handleSectionChange = (sectionId) => {
        setActiveSection(sectionId);
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
                        <form>
                            <div className="form-group">
                                <label htmlFor="nombre-promocion">Nombre de la Promoción:</label>
                                <input type="text" id="nombre-promocion" name="nombre-promocion" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="descripcion-promocion">Descripción:</label>
                                <textarea id="descripcion-promocion" name="descripcion-promocion" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inicio-promocion">Fecha de Inicio:</label>
                                <input type="date" id="inicio-promocion" name="inicio-promocion" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="fin-promocion">Fecha Final:</label>
                                <input type="date" id="fin-promocion" name="fin-promocion" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="tipo-producto">Tipo de Descuento:</label>
                                <select id="tipo-producto" name="tipo-producto" required>
                                    <option value="porCantidad">Descuento por Cantidad</option>
                                    <option value="porTemporada">Descuento por Temporada</option>
                                    <option value="porFidelidad">Descuento por Fidelidad</option>
                                    <option value="deLanzamiento">Descuento de Lanzamiento</option>
                                    <option value="porCompraMínima">Descuento por Compra Mínima</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="valor-descuento">Valor del Descuento:</label>
                                <input type="number" id="valor-descuento" name="valor-descuento" step="0.01" min={0} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="estado">Estado:</label>
                                <select id="estado" name="estado" required>
                                    <option value="activa">Activa</option>
                                    <option value="inactiva">Inactiva</option>
                                    <option value="programada">Programada</option>
                                    <option value="suspendida">Suspendida</option>
                                </select>
                            </div>
                            <button type="submit" className="btn-submit">Crear Promoción</button>
                        </form>
                    </section>
                    {/* Roles */}
                    <section id="roles" className={`dashboard-section ${activeSection === 'roles' ? '' : 'hidden'}`}>
                        <h2>Crear Roles</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="nombre-rol">Nombre del Rol:</label>
                                <input type="text" id="nombre-rol" name="nombre-rol" required />
                            </div>
                            <button type="submit" className="btn-submit">Crear Rol</button>
                        </form>
                    </section>
                    {/* Productos */}
                    <section id="productos" className={`dashboard-section ${activeSection === 'productos' ? '' : 'hidden'}`}>
                        <h2>Crear Productos</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="nombre-producto">Nombre del Producto:</label>
                                <input type="text" id="nombre-producto" name="nombre-producto" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="descripcion-producto">Descripción:</label>
                                <input type="text" id="descripcion-producto" name="descripcion-producto" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="precio">Precio:</label>
                                <input type="number" id="precio" name="precio" step="0.01" min={0} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="tipo-producto">Tipo de Producto:</label>
                                <select id="tipo-producto" name="tipo-producto" required>
                                    <option value="bebidasCalientes">Bebidas Calientes</option>
                                    <option value="bebidasFrias">Bebidas Frías</option>
                                    <option value="panaderiaPasteleria">Panadería y Pastelería</option>
                                    <option value="desayunosBrunch">Desayunos y Brunch</option>
                                </select>
                            </div>
                            <button type="submit" className="btn-submit">Crear Producto</button>
                        </form>
                    </section>
                    {/* Tipos de Productos */}
                    <section id="tipos-productos" className={`dashboard-section ${activeSection === 'tipos-productos' ? '' : 'hidden'}`}>
                        <h2>Crear Tipos de Productos</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="nombre-tipo-producto">Nombre del Tipo de Producto:</label>
                                <input type="text" id="nombre-tipo-producto" name="nombre-tipo-producto" required />
                            </div>
                            <button type="submit" className="btn-submit">Crear Tipo de Producto</button>
                        </form>
                    </section>
                    {/* Mesas */}
                    <section id="mesas" className={`dashboard-section ${activeSection === 'mesas' ? '' : 'hidden'}`}>
                        <h2>Crear Mesas</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="capacidad-mesa">Capacidad:</label>
                                <input type="number" id="capacidad-mesa" name="capacidad-mesa" required />
                            </div>
                            {/*
                            <div className="form-group">
                                <label htmlFor="estado-mesa">Estado:</label>
                                <select id="estado-mesa" name="estado-mesa" required>
                                    <option value="disponible">Disponible</option>
                                    <option value="ocupada">Ocupada</option>
                                    <option value="reservada">Reservada</option>
                                    <option value="mantenimiento">En Mantenimiento</option>
                                </select>
                            </div>
                            */}
                            <button type="submit" className="btn-submit">Crear Mesa</button>
                        </form>
                    </section>
                </main>
            </div>
        </>
    );
};

export default AdminDashboard;