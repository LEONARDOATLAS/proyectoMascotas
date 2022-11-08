import React from 'react';

import './ventas.css'

export default function Product({product : {id, nombre, valor, urlimagen, descripcion} }) {
  

  return (
    
    <div className="col">
        <div className="card">
            <div className='imagen'>
            <img  src={urlimagen} className="card-img-top" alt="..." />
            </div>
        <div className="card-body">
            <h5 className="card-title">{nombre}</h5> 
            <h4 className="card-text">Precio: {valor}</h4>
            <p className="card-text">{descripcion}</p>
            <i className="fa fa-shopping-basket" aria-hidden="true"></i>
        </div>
        </div>
    </div>

  );
}
