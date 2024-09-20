import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';
import Navbar from '../../components/Navbar/Navbar';

import PromocionesServices from '../../services/PromocionesServices';
import RolesServices from '../../services/RolesServices';
import ProductoServices from '../../services/ProductoServices';
import TipoProductoServices from '../../services/TipoProductoServices';
import MesasServices from '../../services/MesasServices';

import { useNavigate, useParams } from 'react-router-dom';

let promociones = [];
let setPromociones;

const AdminDashboard = () => {
    // Estado para la sección activa
    const [activeSection, setActiveSection] = useState('promociones');

    // Función para cambiar la sección activa
    const handleSectionChange = (sectionId) => {
        setActiveSection(sectionId);
    };

    const promocionesArray = Array.isArray(promociones) ? promociones : [];

    // Función para enviar el formulario (promociones)
    const [idPromociones, setIdPromociones] = useState('');
    const [nombrePromo, setNombrePromo] = useState('');
    const [descripcionPromo, setDescripcionPromo] = useState('');
    const [fechaInicio, setFechaInicio] = useState('');
    const [fechaFinal, setFechaFinal] = useState('');
    const [tipoDescuento, setTipoDescuento] = useState('Descuento_por_Cantidad');
    const [valorDescuento, setValorDescuento] = useState(0);
    const [estado, setEstado] = useState('activa');
    const navigate = useNavigate();
    const { id } = useParams();

    // Función para cargar las promociones al montar el componente
    useEffect(() => {
        obtenerPromociones();
    }, [promociones]);
    
    const obtenerPromociones = () => {
        PromocionesServices.getAllPromociones().then((response) => {
            setPromociones(response.data);
        }).catch(error => {
            console.log(error);
        });
    };

    const savePromo = (e) => {
        e.preventDefault();
        const promo = {idPromociones, nombrePromo, descripcionPromo, fechaInicio, fechaFinal, tipoDescuento, valorDescuento, estado };
        PromocionesServices.createPromociones(promo).then((response) => {
           console.log(response.data);
           navigate('/AdminDashboard');
        }).catch(error => {
            console.log(error)
        })
    }

    // Función para enviar el formulario (productos)
    const [idProductos, setIdProductos] = useState('');
    const [nombreProducto, setNombreProducto] = useState('');
    const [descripcionProducto, setDescripcionProducto] = useState('');
    const [precio, setPrecio] = useState('');
    const [idTipoProductoProducto, setIdTipoProductoProducto] = useState('');

    const saveProducto = (e) => {
        e.preventDefault();
        const Producto = {idProductos, nombreProducto, descripcionProducto, precio, idTipoProductoProducto};
        ProductoServices.createProducto(Producto).then((response) => {
           console.log(response.data);
           navigate('/AdminDashboard');
         }).catch(error => {
             console.log(error)
        })
     }

    // Función para enviar el formulario (roles)
    const [idRoles, setIdRoles] = useState('');
    const [nombreRol, setNombreRol] = useState('');
   
    const saveRol = (e) => {
       e.preventDefault();
       const rol = {idRoles, nombreRol};
        RolesServices.createRoles(rol).then((response) => {
          console.log(response.data);
          navigate('/AdminDashboard');
        }).catch(error => {
            console.log(error)
       })
    }

    // Función para enviar el formulario (tipo productos)
    const [idTipoProducto, setIdTipoProducto] = useState('');
    const [nombreTipoProducto, setNombreTipoProducto] = useState('');
   
    const saveTipoProducto = (e) => {
        e.preventDefault();
        const tipoProducto = {idTipoProducto, nombreTipoProducto};
        TipoProductoServices.createTipoProducto(tipoProducto).then((response) => {
            console.log(response.data);
            navigate('/AdminDashboard');
        }).catch(error => {
           console.log(error)
        })
    }

    // Función para enviar el formulario (mesas)
    const [idMesas, setIdMesas] = useState('');
    const [capacidad, setCapacidad] = useState('');
       
    const saveMesa = (e) => {
        e.preventDefault();
        const mesa = {idMesas, capacidad};
        MesasServices.createMesa(mesa).then((response) => {
            console.log(response.data);
            navigate('/AdminDashboard');
        }).catch(error => {
           console.log(error)
        })
    }

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
                                <label htmlFor="nombrePromo">Nombre de la Promoción:</label>
                                <input
                                    type="text"
                                    id="nombrePromo" 
                                    name="nombrePromo" 
                                    value={nombrePromo} 
                                    onChange={(e) => setNombrePromo(e.target.value)} 
                                    required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="descripcionPromo">Descripción:</label>
                                <textarea
                                    id="descripcionPromo" 
                                    name="descripcionPromo" 
                                    value={descripcionPromo} 
                                    onChange={(e) => setDescripcionPromo(e.target.value)} 
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="fechaInicio">Fecha de Inicio:</label>
                                <input
                                    type="datetime-local" 
                                    id="fechaInicio" 
                                    name="fechaInicio" 
                                    value={fechaInicio} 
                                    onChange={(e) => setFechaInicio(e.target.value)}
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="fechaFinal">Fecha Final:</label>
                                <input
                                    type="datetime-local" 
                                    id="fechaFinal" 
                                    name="fechaFinal" 
                                    value={fechaFinal} 
                                    onChange={(e) => setFechaFinal(e.target.value)}
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="tipoDescuento">Tipo de Descuento:</label>
                                <select
                                    id="tipoDescuento" 
                                    name="tipoDescuento" 
                                    value={tipoDescuento} 
                                    onChange={(e) => setTipoDescuento(e.target.value)} 
                                    required
                                >
                                    <option value="Descuento_por_Cantidad">Descuento por Cantidad</option>
                                    <option value="Descuento_por_Temporada">Descuento por Temporada</option>
                                    <option value="Descuento_por_Fidelidad">Descuento por Fidelidad</option>
                                    <option value="Descuento_de_Lanzamiento">Descuento de Lanzamiento</option>
                                    <option value="Descuento_por_Compra_Mínima">Descuento por Compra Mínima</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="valorDescuento">Valor del Descuento:</label>
                                <input
                                    type="number" 
                                    id="valorDescuento" 
                                    name="valorDescuento" 
                                    value={valorDescuento} 
                                    onChange={(e) => setValorDescuento(e.target.value)}
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
                                    value={estado} 
                                    onChange={(e) => setEstado(e.target.value)}
                                    required
                                >
                                    <option value="activa">Activa</option>
                                    <option value="inactiva">Inactiva</option>
                                    <option value="programada">Programada</option>
                                    <option value="suspendida">Suspendida</option>
                                </select>
                            </div>
                            <button onClick={(e) => savePromo(e)}
                                type="submit" className="btn-submit">Crear Promoción</button>
                        </form>

                        <table class="table-secondary">
                            <thead>
                                <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Descripción</th>
                                <th scope="col">Fecha Inicio</th>
                                <th scope="col">Fecha Final</th>
                                <th scope="col">Tipo Descuento</th>
                                <th scope="col">Valor Descuento</th>
                                <th scope="col">Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    promocionesArray.map((promocion) =>(
                                        <tr key={promocion.idPromociones}>
                                            <td>{promocion.idPromociones}</td>
                                            <td>{promocion.nombrePromo}</td>
                                            <td>{promocion.descripcionPromo}</td>
                                            <td>{promocion.fechaInicio}</td>
                                            <td>{promocion.fechaFinal}</td>
                                            <td>{promocion.tipoDescuento}</td>
                                            <td>{promocion.valorDescuento}</td>
                                            <td>{promocion.estado}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                            </table>

                    </section>
                    {/* Roles */}
                    <section
                    id="roles" className={`dashboard-section ${activeSection === 'roles' ? '' : 'hidden'}`}>
                        <h2>Crear Roles</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="nombreRol">Nombre del Rol:</label>
                                <input
                                    type="text"
                                    id="nombreRol"
                                    name="nombreRol"
                                    value={nombreRol} 
                                    onChange={(e) => setNombreRol(e.target.value)} 
                                    required
                                />
                            </div>
                            <button onClick={(e) => saveRol(e)}
                                type="submit" className="btn-submit">Crear Rol</button>
                        </form>
                    </section>
                    {/* Productos */}
                    <section
                        id="productos" className={`dashboard-section ${activeSection === 'productos' ? '' : 'hidden'}`}>
                        <h2>Crear Productos</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="nombreProducto">Nombre del Producto:</label>
                                <input
                                    type="text"
                                    id="nombreProducto"
                                    name="nombreProducto"
                                    value={nombreProducto} 
                                    onChange={(e) => setNombreProducto(e.target.value)} 
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="descripcionProducto">Descripción:</label>
                                <input
                                    type="text"
                                    id="descripcionProducto"
                                    name="descripcionProducto"
                                    value={descripcionProducto} 
                                    onChange={(e) => setDescripcionProducto(e.target.value)} 
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="precio">Precio:</label>
                                <input
                                    type="number"
                                    id="precio"
                                    name="precio"
                                    value={precio} 
                                    onChange={(e) => setPrecio(parseFloat(e.target.value))} 
                                    step="0.01"
                                    min={0}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="idTipoProductoProducto">Tipo de Producto:</label>
                                <select
                                    id="idTipoProductoProducto"
                                    name="idTipoProductoProducto"
                                    value={idTipoProductoProducto} 
                                    onChange={(e) => setIdTipoProductoProducto(e.target.value)} 
                                    required
                                >
                                    <option value="1">Bebidas Calientes</option>
                                    <option value="2">Bebidas Frías</option>
                                    <option value="3">Panadería y Pastelería</option>
                                    <option value="4">Desayunos y Brunch</option>
                                </select>
                            </div>
                            <button onClick={(e) => saveProducto(e)}
                                type="submit" className="btn-submit">Crear Producto</button>
                        </form>
                    </section>
                    {/* Tipos de Productos */}
                    <section
                    id="tipos-productos" className={`dashboard-section ${activeSection === 'tipos-productos' ? '' : 'hidden'}`}>
                        <h2>Crear Tipos de Productos</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="nombreTipoProducto">Nombre del Tipo de Producto:</label>
                                <input
                                    type="text"
                                    id="nombreTipoProducto"
                                    name="nombreTipoProducto"
                                    value={nombreTipoProducto} 
                                    onChange={(e) => setNombreTipoProducto(e.target.value)} 
                                    required
                                />
                            </div>
                            <button onClick={(e) => saveTipoProducto(e)}
                                type="submit" className="btn-submit">Crear Tipo de Producto</button>
                        </form>
                    </section>
                    {/* Mesas */}
                    <section
                    id="mesas" className={`dashboard-section ${activeSection === 'mesas' ? '' : 'hidden'}`}>
                        <h2>Crear Mesas</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="capacidad">Capacidad:</label>
                                <input
                                    type="number"
                                    id="capacidad"
                                    name="capacidad"
                                    value={capacidad} 
                                    onChange={(e) => setCapacidad(e.target.value)} 
                                    required
                                />
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
                            <button onClick={(e) => saveMesa(e)}
                                type="submit" className="btn-submit">Crear Mesa</button>
                        </form>
                    </section>
                </main>
            </div>
        </>
    );
};

export default AdminDashboard;