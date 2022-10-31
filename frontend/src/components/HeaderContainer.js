import React from 'react';

const HeaderContainer = () => {
    return ( 
<section className="content-header">
  <div className="container-fluid">
    <div className="row mb-2">
      <div className="col-sm-6">
        <h1>Practica noche</h1>
      </div>
      <div className="col-sm-6">
        <ol className="breadcrumb float-sm-right">
          <li className="breadcrumb-item"><a href="#">Inicio</a></li>
          <li className="breadcrumb-item active">Pagina en blanco</li>
        </ol>
      </div>
    </div>
  </div>{/* /.container-fluid */}
</section>

     );
}
 
export default HeaderContainer;