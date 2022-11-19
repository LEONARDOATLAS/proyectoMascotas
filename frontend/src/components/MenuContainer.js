import React, {useState, useEffect} from "react";
import {  Link  } from 'react-router-dom'


const MenuContainer = () => {

  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token !== null) {
        setLoggedIn(true);
    }
},[]);


  return (
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        <li className="nav-item">
          <Link to={"/"} className="nav-link">
            <i className="nav-icon fa fa-home" />
            <p>
              Inicio
            </p>
          </Link>
        </li>

   
            {/* Para iniciar el Menu de Productos */}


          <li className="nav-item">
            <Link to={"/productos"} className="nav-link">
              <i className="nav-icon fa fa-tasks" />
              <p>
                Productos
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/productosventa"} className="nav-link">
              <i className="nav-icon fa fa-building" />
              <p>
                ProductosVenta
              </p>
            </Link>
          </li>

          { loggedIn &&

          <li className="nav-item" diplay="none">
            <Link href="#" className="nav-link">
              <i className="nav-icon fa fa-folder-open" />
              <p>
                Ventas
                <i className="fas fa-angle-left right" />
              </p>
            </Link>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link to={"/factura"} className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Factura</p>
                </Link>
              </li>
              <li className="nav-item">
                <a href="pages/tables/data.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Pedidos</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/tables/jsgrid.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>pendiente</p>
                </a>
              </li>
            </ul>
          </li>

          }
        
            { loggedIn &&

              <li className="nav-item">
              <Link href="#" className="nav-link">
                <i className="nav-icon fa fa-folder-open" />
                <p>
                  Administracion
                  <i className="fas fa-angle-left right" />
                </p>
              </Link>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to={"/productos"} className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Poductos</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/categorias" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Categorias</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/tables/jsgrid.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>pendiente</p>
                  </a>
                </li>

                <li className="nav-item">
                <Link to={"/clientes"} className="nav-link">
                <i className="nav-icon fa fa-users" />
                <p>
                Clientes
                </p>
                </Link>
              </li>


              </ul>
            </li>
            
            }

              <li className="nav-item d-none d-sm-inline-block" >
              <Link to={"/login"} className="nav-link">
              <i className="nav-icon fa fa-power-off"></i>
                Login
              </Link>
            </li>


      </ul>
    </nav>
  );
};

export default MenuContainer;
