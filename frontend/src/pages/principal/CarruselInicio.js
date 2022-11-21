import React from 'react';


const CarruselInicio = () => {
    return ( <div className='carrusel'>
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://i.ytimg.com/vi/PDqNKRVdXWM/maxresdefault.jpg" className="d-block w-100 imgcarrusel" alt="" />
    </div>
    <div className="carousel-item">
      <img src="https://evi.com.co/wp-content/uploads/2014/04/Tienda-de-Mascotas-1.png" className="d-block w-100 imgcarrusel" alt="" />
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/vector-gratis/tienda-mascotas-moderna-interior-dibujos-animados_33099-1694.jpg?w=2000" className="d-block w-100 imgcarrusel" alt="" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Anterior</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Siguiente</span>
  </button>
</div>

    </div> );
}
 
export default CarruselInicio;