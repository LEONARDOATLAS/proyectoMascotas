import React from 'react';
import ProductosVentaInicio from '../ventas/ProductosVentaInicio';
import CarruselInicio from './CarruselInicio';
import Narvarinicio from './NarvarInicio';
import '../css/principal.css'

const Inicio = () => {
    return ( <div className='container-fluid fondoInicio'>
            <Narvarinicio />
            <div className='container-fluid carrusel'>
            <CarruselInicio />
            </div>

            <div>Nuestros Productos</div>
            <ProductosVentaInicio />


    </div> );
}
 
export default Inicio;