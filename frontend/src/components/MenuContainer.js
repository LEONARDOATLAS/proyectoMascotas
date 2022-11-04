import React from "react";
import {  Link  } from 'react-router-dom'


const MenuContainer = () => {


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

        <li className="nav-item">
          <Link to={"/Plantilla"} className="nav-link"
          >
            
            <i className="nav-icon fa fa-home" />
            <p>
              Plantilla
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
            <Link to={"/clientes"} className="nav-link">
              <i className="nav-icon fa fa-users" />
              <p>
                Clientes
              </p>
            </Link>
          </li>

            <li className="nav-item">
            <Link href="#" className="nav-link">
              <i className="nav-icon fas fa-university" />
              <p>
                Ventas
                <i className="fas fa-angle-left right" />
              </p>
            </Link>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link href="pages/tables/simple.html" className="nav-link">
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


      </ul>
    </nav>
  );
};

export default MenuContainer;
