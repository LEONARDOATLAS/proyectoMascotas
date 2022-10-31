import React from "react";
import { Link } from 'react-router-dom'

import MenuContainer from '../components/MenuContainer'

const SidebarContainer = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <Link to={"/"} className="brand-link">
        <img
          src="dist/img/AdminLTELogo.png"
          alt=""
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">Tienda Mascotas</span>
      </Link>

      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="dist/img/user2-160x160.jpg"
              className="img-circle elevation-2"
              alt=""
            />
          </div>
          <div className="info">
            <Link to={"#"} className="d-block">
              GRUPO_9
            </Link>
          </div>
        </div>
        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input
              className="form-control form-control-sidebar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw" />
              </button>
            </div>
          </div>
        </div>

        <MenuContainer></MenuContainer>

      </div>
    </aside>
  );
};

export default SidebarContainer;
