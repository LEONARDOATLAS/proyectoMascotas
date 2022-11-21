import React from 'react';
import { Link } from 'react-router-dom'


const Narvarinicio = () => {
    return ( <div>
        
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <div className="container-fluid">
    <Link className="navbar-brand" to={"/"}>TiendaMascotas</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to={"/"}>Inicio</Link>
        <Link className="nav-link" to={"/home"}>Administración</Link>
        <Link className="nav-link" to={"#"}>Productos</Link>
      </div>
    </div>
  </div>
</nav>

    </div> );
}
 
export default Narvarinicio;