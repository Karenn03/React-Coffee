import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';
import Navbar from '../../components/Navbar/Navbar';

import PromocionesServices from '../../services/PromocionesServices';
import RolesServices from '../../services/RolesServices';
import ProductoServices from '../../services/ProductoServices';
import TipoProductoServices from '../../services/TipoProductoServices';
import MesasServices from '../../services/MesasServices';

import { useNavigate, useParams } from 'react-router-dom';

const AdminDashboard = () => {
    // Estado para la sección activa
    const [activeSection, setActiveSection] = useState('promociones');

    // Función para cambiar la sección activa
    const handleSectionChange = (sectionId) => {
        setActiveSection(sectionId);
    };

    // Función para enviar el formulario (promociones)
    const [promociones, setPromociones] = useState([]);
    const [idPromociones, setIdPromociones] = useState('');
    const [nombrePromo, setNombrePromo] = useState('');
    const [descripcionPromo, setDescripcionPromo] = useState('');
    const [fechaInicio, setFechaInicio] = useState('');
    const [fechaFinal, setFechaFinal] = useState('');
    const [tipoDescuento, setTipoDescuento] = useState('');
    const [valorDescuento, setValorDescuento] = useState(0);
    const [estado, setEstado] = useState('activa');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        PromocionesServices.getAllPromociones().then(response => {
            console.log('Response data:', response.data);
            if (Array.isArray(response.data)) {
                setPromociones(response.data);
            } else {
                console.error('La respuesta no es un array:', response.data);
                setPromociones([]);
            }
        }).catch(error => {
            console.log(error);
            setPromociones([]); 
        });
    }, []);
    
    const savePromo = (e) => {
        e.preventDefault();
        const promo = { idPromociones, nombrePromo, descripcionPromo, fechaInicio, fechaFinal, tipoDescuento, valorDescuento, estado };
    
        if (idPromociones) {
            PromocionesServices.updatePromociones(idPromociones, promo).then((response) => {
                const updatedPromociones = promociones.map(p => (p.idPromociones === idPromociones ? response.data : p));
                setPromociones(updatedPromociones);
                navigate('/AdminDashboard');
            }).catch(error => {
                console.log(error);
            });
        } else {
            PromocionesServices.createPromociones(promo).then((response) => {
                setPromociones(prev => [...prev, response.data]);
                navigate('/AdminDashboard');
            }).catch(error => {
                console.log(error);
            });
        }
    };
    
    const deletePromo = (id) => {
        PromocionesServices.deletePromocion(id).then(() => {
            setPromociones(promociones.filter(p => p.idPromociones !== id));
        }).catch(error => {
            console.log(error);
        });
    };
    
    const editPromo = (promo) => {
        setIdPromociones(promo.idPromociones);
        setNombrePromo(promo.nombrePromo);
        setDescripcionPromo(promo.descripcionPromo);
        setFechaInicio(promo.fechaInicio);
        setFechaFinal(promo.fechaFinal);
        setTipoDescuento(promo.tipoDescuento);
        setValorDescuento(promo.valorDescuento);
        setEstado(promo.estado);
        setActiveSection('promociones');
    };

    // Función para enviar el formulario (productos)
    const [productos, setProductos] = useState([]);
    const [idProductos, setIdProductos] = useState('');
    const [nombreProducto, setNombreProducto] = useState('');
    const [descripcionProducto, setDescripcionProducto] = useState('');
    const [precio, setPrecio] = useState('');
    const [idTipoProductoProducto, setIdTipoProductoProducto] = useState('');

    useEffect(() => {
        ProductoServices.getAllProductos().then(response => {
            console.log('Response data:', response.data);
            if (Array.isArray(response.data)) {
                setProductos(response.data);
            } else {
                console.error('La respuesta no es un array:', response.data);
                setProductos([]);
            }
        }).catch(error => {
            console.log(error);
            setProductos([]);
        });
    }, []);

    const saveProducto = (e) => {
        e.preventDefault();
        const producto = { idProductos, nombreProducto, descripcionProducto, precio, idTipoProductoProducto };
    
        if (idProductos) {
            ProductoServices.updateProducto(idProductos, producto).then((response) => {
                console.log('Producto actualizado:', response.data);
                const updatedProductos = productos.map(p => (p.idProductos === idProductos ? response.data : p));
                setProductos(updatedProductos);
                navigate('/AdminDashboard');
            }).catch(error => {
                console.log(error);
            });
        } else {
            ProductoServices.createProducto(producto).then((response) => {
                console.log('Producto creado:', response.data);
                setProductos(prev => [...prev, response.data]);
                navigate('/AdminDashboard');
            }).catch(error => {
                console.log(error);
            });
        }
    };
    
    const deleteProducto = (id) => {
        ProductoServices.deleteProducto(id).then(() => {
            setProductos(productos.filter(p => p.idProductos !== id));
        }).catch(error => {
            console.log(error);
        });
    };

    const editProducto = (producto) => {
        setIdProductos(producto.idProductos);
        setNombreProducto(producto.nombreProducto);
        setDescripcionProducto(producto.descripcionProducto);
        setPrecio(producto.precio);
        setIdTipoProductoProducto(producto.idTipoProductoProducto);
    };

    // Función para enviar el formulario (roles)
    const [roles, setRoles] = useState([]);
    const [idRoles, setIdRoles] = useState('');
    const [nombreRol, setNombreRol] = useState('');
   
    useEffect(() => {
        RolesServices.getAllRoles().then(response => {
            console.log('Response data:', response.data);
            if (Array.isArray(response.data)) {
                setRoles(response.data);
            } else {
                console.error('La respuesta no es un array:', response.data);
                setRoles([]);
            }
        }).catch(error => {
            console.log(error);
            setRoles([]); 
        });
    }, []);

    const saveRol = (e) => {
        e.preventDefault();
        const rol = { idRoles, nombreRol };
    
        if (idRoles) {
            RolesServices.updateRol(idRoles, rol).then((response) => {
                const updatedRoles = roles.map(r => (r.idRoles === idRoles ? response.data : r));
                setRoles(updatedRoles);
                navigate('/AdminDashboard');
            }).catch(error => {
                console.log(error);
            });
        } else {
            RolesServices.createRoles(rol).then((response) => {
                setRoles(prev => [...prev, response.data]);
                navigate('/AdminDashboard');
            }).catch(error => {
                console.log(error);
            });
        }
    };

    const deleteRol = (id) => {
        RolesServices.deleteRol(id).then(() => {
            setRoles(roles.filter(r => r.idRoles !== id));
        }).catch(error => {
            console.log(error);
        });
    };
    
    const editRol = (rol) => {
        setIdRoles(rol.idRoles);
        setNombreRol(rol.nombreRol);
        setActiveSection('roles');
    };

    // Función para enviar el formulario (tipo productos)
    const [tiposProducto, setTiposProducto] = useState([]);
    const [idTipoProducto, setIdTipoProducto] = useState('');
    const [nombreTipoProducto, setNombreTipoProducto] = useState('');
   
    useEffect(() => {
        TipoProductoServices.getAllTiposProducto().then(response => {
            console.log('Response data:', response.data);
            if (Array.isArray(response.data)) {
                setTiposProducto(response.data);
            } else {
                console.error('La respuesta no es un array:', response.data);
                setTiposProducto([]);
            }
        }).catch(error => {
            console.log(error);
            setTiposProducto([]);
        });
    }, []);
    
    const saveTipoProducto = (e) => {
        e.preventDefault();
        const tipoProducto = { idTipoProducto, nombreTipoProducto };
    
        if (idTipoProducto) {
            TipoProductoServices.updateTipoProducto(idTipoProducto, tipoProducto).then((response) => {
                console.log('Tipo actualizado:', response.data);
                const updatedTiposProducto = tiposProducto.map(tp => (tp.idTipoProducto === idTipoProducto ? response.data : tp));
                setTiposProducto(updatedTiposProducto);
                navigate('/AdminDashboard');
            }).catch(error => {
                console.log(error);
            });
        } else {
            TipoProductoServices.createTipoProducto(tipoProducto).then((response) => {
                console.log('Tipo creado:', response.data);
                setTiposProducto(prev => [...prev, response.data]);
                navigate('/AdminDashboard');
            }).catch(error => {
                console.log(error);
            });
        }
    };
    
    const deleteTipoProducto = (id) => {
        TipoProductoServices.deleteTipoProducto(id).then(() => {
            setTiposProducto(tiposProducto.filter(r => r.idTipoProducto !== id));
        }).catch(error => {
            console.log(error);
        });
    };

    const editTipoProducto = (tipoProducto) => {
        setIdTipoProducto(tipoProducto.idTipoProducto);
        setNombreTipoProducto(tipoProducto.nombreTipoProducto);
        setActiveSection('tiposProducto');
    };

    // Función para enviar el formulario (mesas)
    const [mesas, setMesas] = useState([]);
    const [idMesas, setIdMesas] = useState('');
    const [capacidad, setCapacidad] = useState('');
    
    useEffect(() => {
        MesasServices.getAllMesas().then(response => {
            console.log('Response data:', response.data);
            if (Array.isArray(response.data)) {
                setMesas(response.data);
            } else {
                console.error('La respuesta no es un array:', response.data);
                setMesas([]);
            }
        }).catch(error => {
            console.log(error);
            setMesas([]);
        });
    }, []);

    const saveMesa = (e) => {
        e.preventDefault();
        const mesa = { idMesas, capacidad };
    
        if (idMesas) {
            MesasServices.updateMesa(idMesas, mesa).then((response) => {
                console.log('Mesa actualizada:', response.data);
                const updatedMesas = mesas.map(m => (m.idMesas === idMesas ? response.data : m));
                setMesas(updatedMesas);
                navigate('/AdminDashboard');
            }).catch(error => {
                console.log(error);
            });
        } else {
            MesasServices.createMesa(mesa).then((response) => {
                console.log('Mesa creada:', response.data);
                setMesas(prev => [...prev, response.data]);
                navigate('/AdminDashboard');
            }).catch(error => {
                console.log(error);
            });
        }
    };

    const deleteMesa = (id) => {
        MesasServices.deleteMesa(id).then(() => {
            setMesas(mesas.filter(m => m.idMesas !== id));
        }).catch(error => {
            console.log(error);
        });
    };
    
    const editMesa = (mesa) => {
        setIdMesas(mesa.idMesas);
        setCapacidad(mesa.capacidad);
        setActiveSection('mesas');
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
                                <th scope='col'></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    promociones.map((promocion, index) =>(
                                        <tr key={promocion.idPromociones}>
                                            <td>{index + 1}</td>
                                            <td>{promocion.nombrePromo}</td>
                                            <td>{promocion.descripcionPromo}</td>
                                            <td>{promocion.fechaInicio}</td>
                                            <td>{promocion.fechaFinal}</td>
                                            <td>{promocion.tipoDescuento}</td>
                                            <td>{promocion.valorDescuento}</td>
                                            <td>{promocion.estado}</td>
                                            <td>
                                                <button type="button" className="btn btn-danger" onClick={() => deletePromo(promocion.idPromociones)}>Eliminar</button>
                                                <button type="button" className="btn btn-warning" onClick={() => editPromo(promocion)}>Editar</button>
                                            </td>
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

                        <table class="table-secondary">
                            <thead>
                                <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nombre del rol</th>
                                <th scope='col'></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    roles.map((rol, index) =>(
                                        <tr key={rol.idRoles}>
                                            <td>{index + 1}</td>
                                            <td>{rol.nombreRol}</td>
                                            <td>
                                                <button type="button" className="btn btn-danger" onClick={() => deleteRol(rol.idRoles)}>Eliminar</button>
                                                <button type="button" className="btn btn-warning" onClick={() => editRol(rol)}>Editar</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

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
                        
                        <table class="table-secondary">
                            <thead>
                                <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Descripción</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Tipo Producto</th>
                                <th scope='col'></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    productos.map(producto => (
                                        <tr key={producto.idProductos}>
                                            <td>{producto.nombreProducto}</td>
                                            <td>{producto.descripcionProducto}</td>
                                            <td>{producto.precio}</td>
                                            <td>{producto.idTipoProductoProducto}</td>
                                            <td>
                                                <button onClick={() => editProducto(producto)}>Editar</button>
                                                <button onClick={() => deleteProducto(producto.idProductos)}>Eliminar</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

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

                        <table class="table-secondary">
                            <thead>
                                <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nombre del tipo de producto</th>
                                <th scope='col'></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    roles.map((tipoProducto, index) =>(
                                        <tr key={tipoProducto.idTipoProducto}>
                                            <td>{index + 1}</td>
                                            <td>{tipoProducto.nombreTipoProducto}</td>
                                            <td>
                                                <button type="button" className="btn btn-danger" onClick={() => deleteTipoProducto(tipoProducto.idTipoProducto)}>Eliminar</button>
                                                <button type="button" className="btn btn-warning" onClick={() => editTipoProducto(tipoProducto)}>Editar</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

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

                        <table className="table-secondary">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Capacidad</th>
                                    <th scope='col'></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    mesas.map((mesa, index) => (
                                        <tr key={mesa.idMesas}>
                                            <td>{index + 1}</td>
                                            <td>{mesa.capacidad}</td>
                                            <td>
                                                <button type="button" className="btn btn-danger" onClick={() => deleteMesa(mesa.idMesas)}>Eliminar</button>
                                                <button type="button" className="btn btn-warning" onClick={() => editMesa(mesa)}>Editar</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

                    </section>
                </main>
            </div>
        </>
    );
};

export default AdminDashboard;