import React, { Fragment }from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import './App.css';

import Home from './pages/Home'
import Plantilla from './pages/plantilla';
import ProductoListar from './pages/products/ProductoListar';
import ProductoFormulario from './pages/products/ProductoFormulario';
import ProductoEditar from './pages/products/ProductoEditar';
import CrearCuenta from './pages/auth/CrearCuenta';
import Login from './pages/auth/Login';
import ClienteListar from './pages/clients/ClienteListar';
import ClienteFormulario from './pages/clients/ClienteFormulario';
import ClienteEditar from './pages/clients/ClienteEditar';
import ProductoDetalle from './pages/products/ProductoDetalle';
import Error404 from './pages/error404';
import ProductosVenta from './pages/ventas/ProductosVenta';

function App() {
  return (
    <Fragment>
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/crearcuenta" exact element={<CrearCuenta />} />
        <Route path="/plantilla" exact element={<Plantilla />} />
        <Route path="/productos" exact element={<ProductoListar />} />
        <Route path="/productosagregar" exact element={<ProductoFormulario />} />
        <Route path="/productoseditar/:idproducto" exact element={<ProductoEditar />} />
        <Route path="/productosdetalle/:idproducto" exact element={<ProductoDetalle />} />
        <Route path="/clientes" exact element={<ClienteListar />} />
        <Route path="/clientesagregar" exact element={<ClienteFormulario />} />
        <Route path="/clienteseditar/:idcliente" exact element={<ClienteEditar />} />

        {/* RUTAS DE VENTAS */}
        <Route path="/productosventa" exact element={<ProductosVenta />} />
        <Route path="*" exact element={<Error404 />}/>
      </Routes>
    </Router>
   </Fragment>
  );
}

export default App;
